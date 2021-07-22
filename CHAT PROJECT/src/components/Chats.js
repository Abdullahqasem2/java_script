import React, {useRef, useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {ChatEngine} from 'react-chat-engine';
import {auth} from '../firebase';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';

const Chats = () => {

	const history = useHistory();
	const { user } = useAuth();
	const [loding, setLoding] = useState(true);
	const handleLogout = async () => {
		await auth.signOut();

		history.push('/');
	}

	const getFile = async (url) => {
		const response = await fetch(url);
		const data = await response.blob();

		return new File([data], "userPhoto.jpg", { type: 'image/jpeg' })
	}

	useEffect(()=> {
		if(!user){
			history.push('/');
			return;
		}
		axios.get('https://api.chatengine.io/users/me', {
			headers: {
				"project-id": "92eb43d4-5670-4244-b590-56ce5709c6b5",
				"user-name": user.email,
				"user-secret": user.uid,
			}
		})
		.then(() => {
			setLoding(false);
		})
		.catch(() => {
			let formdata = new FormData();
			formdata.append('email',user.email);
			formdata.append('username', user.email);
			formdata.append('secret', user.uid);
			getFile(user.photoURL)
				.then((avatar) => {
					formdata.append('avatar', avatar, avatar.name);

					axios.post('https://api.chatengine.io/users',
						formdata,
						{headers:{ "private-key": "3d690c13-9b9c-4cd8-8cc2-b9982f1b0f8d" }}
						)
					.then(() => setLoding(false))
					.catch((error) => console.log(error))
				})
		})
	},[user, history]);

	if(!user || loding) return 'Loding ...';
	return(
			<div className="chats-page">
				<div className="nav-bar">
					<div className="logo-tab">
						Shuriken
					</div>
					<div onClick={handleLogout} className="logout-tab">
						Logout
					</div>
				</div>
				<ChatEngine
					hight="calc(100vh - 66px)"
					projectID="92eb43d4-5670-4244-b590-56ce5709c6b5"
					userName={user.email}
					userSecret={user.uid}
				/>
			</div>
		);

}

export default Chats;
