import React, { useRef,useState } from "react";
import "./DropDownMenu.css";
import { useDetectOutsideClick } from "./UseDetectOutsideClick.js";
import {useAuth} from '../Authentication/AuthContext';
import useDb from '../../hooks/useDb';

const DropDownMenu = ({userName, setUserName, userSelected, setUserSelected}) => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);
  const {docs} = useDb("listOfUsers");
  const {currentUser} = useAuth();
  const handleClick = (name,id) => 
  {
    setUserSelected(id);
    setUserName(name);
  }
  return (
    <div className="container">
      <div className="menu-container">
        <button onClick={onClick} className="menu-trigger">
          <span><i>{userName}</i> Repository</span>
          <img
            src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg"
            alt="User avatar"
          />
        </button>
        <nav
          ref={dropdownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
        >   
          <ul>
              {docs && docs.map(doc => (
                  <li>
                    <a href="#" onClick={() => handleClick(doc.name,doc.id)}>{doc.name}</a>
                  </li>
              ))}
          </ul>
        </nav>
      </div>
    </div>
  )}

export default DropDownMenu