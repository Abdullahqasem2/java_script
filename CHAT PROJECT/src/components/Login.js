import React from 'react';
import {GoogleOutlined, FacebookOutlined} from '@ant-design/icons'
import "firebase/app";

import {auth} from '../firebase';
import firebase from 'firebase/app';



const Login = () => {
	return(
			<div id="login-page">
				<div id ="login-card">
					<h2> Welcome to shoriken </h2>

					<div
						className="login-button google"
						onClick={()=> auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
					>
						<GoogleOutlined /> sign in with Google
					</div>
				</div>
				<br/> <br/>
				
			</div>
		);
}

export default Login;