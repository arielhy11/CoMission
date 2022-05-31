import React, { Component } from 'react';

import { Nav } from "react-bootstrap";
import "./NaviMe.css"
import h1 from "./h1.jpg"
import { useState, useEffect } from "react";


function NaviMe({ username, friend }) {

    const [lastMessage, setLastMessage] = useState();
    const [lastTime, setLastTime] = useState();

    const getResponse = async () => {
        const resp = await fetch('http://localhost:5287/api/contacts/' + username + '/' + friend + '/messages');
        const data = await resp.json();
        setLastTime(data[data.length - 1].created);
        if (data[data.length - 1].content.length > 20) {
            setLastMessage(data[data.length - 1].content.substr(1, 17) + "...");
        } else
            setLastMessage(data[data.length - 1].content);
    }

    useEffect(() => {
        getResponse();
    });

    return (
        <Nav.Item className="surr" style={{ "height": "87px", "border": "solid", "border-radius": "5px", "border-width": "1px" }}>
            <div className="inlineClass">
                <Nav.Link className="inlineClass" eventKey={friend}>
                    <img className='friend_pic' src={h1} alt=""></img>
                    <strong>{friend}</strong>
                    <div className="sepe">
                        {lastTime}<strong>{' >'}</strong>
                        <span style={{ "margin": "1px" }}> {lastMessage}</span>
                    </div>
                </Nav.Link>
            </div>
        </Nav.Item >
    );
}

export default NaviMe;