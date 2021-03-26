import React from 'react';
import './Title.css';
import {NavLink} from 'react-router-dom';
import {useAuth} from '../Authentication/AuthContext';

const Title = ({userSelected}) => {
  const {currentUser} = useAuth();
  return (
    <div className="title">
      <div className="right">
      <p className="right">Logged in as {currentUser.email}</p>
      <NavLink to='/logout' >Logout</NavLink>
      </div>
      <h4>Welcome to notInstagram!<span>{'\u{1F44B}'}</span></h4>
      <h4></h4>
    </div>
  )
}

export default Title;
