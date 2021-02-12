import React, { useState, useEffect } from "react";
import logo from "./images/wodamoiLogo.png";
import login from "./images/login.png";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import AddWod from "./AddWod";

const NavBar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    history.push('/');
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;
    if(token) {
      const decodedToken = decode(token);
      if(decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    <header className="headerNavBar">
      <Link to="/">         
        <img src={logo} alt="logo" className="logo" /> 
      </Link>

      <div>
        {user ? (
          <div>
            {/* <Avatar  alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar> */}
            {/* <Typography className="nameLog" variant="h6">{user.result.name}</Typography> */}
            <Avatar className="avatar" alt={user.result.name} src={user.result.imageUrl} onClick={logout}>{user.result.name.charAt(0)}</Avatar>
            <AddWod className="addWod"/>
          </div>
        ) : (
          <Link to="/auth">
            <img src={login} alt="login" className="login" />
          </Link>
        )}
      </div>
    </header>
  );
};

export default NavBar;