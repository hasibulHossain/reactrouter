import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const navigation = () => (
    <header>
        <nav className="Navigation">
            <ul>
            <NavLink to="/posts" exact ><li>POSTS</li></NavLink>
                <NavLink to={{
                    pathname: '/new-post',
                    hash: '#submit',
                    search: '?quick-submit=true'
                }} ><li>NEW-POST</li></NavLink>
                <NavLink to="/about" ><li>ABOUT</li></NavLink>
            </ul>
        </nav>
    </header>
);

export default navigation;