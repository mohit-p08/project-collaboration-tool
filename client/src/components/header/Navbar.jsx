/* 
Name of the Module : Navigation Bar
Date of Module Creation : 30/08/2021
Author of the module: Jaimin Prajapati
What the module does : Navigate to Diffrent modules
Modification history : 
    module Active state effect and hover effect
*/

import React from 'react'
import './navbar.css'
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

const Navbar = () => {
    const auth = useSelector(state => state.auth);
    const { user, isLogged } = auth;

    const handleLogout = async () => {
        try {
            await axios.get('/user/logout');
            localStorage.removeItem('firstLogin');
            window.location.href = "/";
        } catch (err) {
            window.location.href = "/";
        }
    }

    const userLink = () => {
        return <li className="drop-nav">
            <Link to="#" className="avatar">
                <img className="profile_dp" src={user.avatar} alt="" /> {user.name} <i className="fas fa-angle-down"></i>
            </Link>
            <ul className="dropdown">
                <li><Link to="/dashboard">My Profile</Link></li>
                <li><Link to="/myprojects">My Projects</Link></li>
                <li><Link to="/resetpassword">Change Password</Link></li>
                <li><Link to="/" onClick={handleLogout}>Logout</Link></li>
            </ul>
        </li>
    }

    return (
        <>
            <header>
                <p className="Logo pt-3">Project Collabration Tool</p>

                <input type="checkbox" name="" className="chk-icon" />

                <div className="nav pt-3">
                    <ol>
                        <li><NavLink activeClassName="active" exact to="/" >HOME</NavLink></li>
                        <li><NavLink activeClassName="active" exact to="/about" >ABOUT</NavLink></li>
                        <li><NavLink activeClassName="active" exact to="/contact" >CONTACT</NavLink></li>
                        <li><NavLink activeClassName="active" exact to="/projects" >PROJECTs</NavLink></li>
                        {isLogged ? userLink() : <li><NavLink to="/login"><i className="fas fa-user"></i> Sign in</NavLink></li>}
                    </ol>
                </div>
            </header>
        </>
    )
}

export default Navbar