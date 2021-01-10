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
      <h2>Image Repository</h2>
      <p>A place to share & view other people's photography. </p>
    </div>
  )
}

export default Title;