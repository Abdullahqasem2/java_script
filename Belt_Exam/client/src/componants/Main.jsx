import React, { useEffect, useState } from 'react';
import  {Router,Link} from '@reach/router';
import Create from './Forms/Create';
import ShowAll from '../view/ShowAll';
import ShowOne from '../view/ShowOne';
import Update from './Forms/Update';
import Chat from './Forms/Chat';
import Home from './Home';
import { useAuth } from '../context/AuthContext';
import { navigate } from '@reach/router';
import Login from './Login';

const Main = () => {
  if(!user || loding) return <Login />
////////////////////////////////////////////////
  const handleLogout = async () => {
		await auth.signOut();

		navigate('/');
	}
  return(
    <div>
    <h1><div onClick={handleLogout} className="logout-tab">
						Logout
					</div>
          </h1>
      <center>
        <Link to = "/home" style={{textDecoration: "none", color:"yellow"}}> Home </Link> |
        <Link to = "/add" style={{textDecoration: "none", color:"yellow"}}> Create </Link> |
        <Link to = "/show" style={{textDecoration: "none", color:"yellow"}}> Show </Link>|
        <Link to = "/chat" style={{textDecoration: "none", color:"yellow"}}> Chat </Link>
       </center>
        <Router>
           <Create path="/add" />
           <ShowAll path="/show" />
           <ShowOne path="/show/:id" />
           <Update path="/edit/:id/:firstName/:lastName/:age" />
           <Chat path="/chat" />
           <Home path="/home" />
        </Router>
      </div>
    );
};
export default Main;
