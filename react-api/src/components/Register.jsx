import React, { Component } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button, Col, Row, Container } from 'react-bootstrap';
import './Register.css'

function Register() {

    const [loginDetails, setLoginDetails] = useState({
        userName: "",
        password: "",
        nickName: "",
        profilePic: ""
    });

    const navigate = useNavigate();

    const uploadImage = (e) => {
        let val = e.target.files[0]
        let content = URL.createObjectURL(val)
        setLoginDetails({ ...loginDetails, profilePic: content })
    }

    const [usersList, setUsersList] = useState([]);

    const getResponse = async () => {
        const resp = await fetch('http://localhost:5287/api/Users');
        const data = await resp.json();
        setUsersList(data);
    };

    useEffect(() => {
        getResponse();
    });

    async function postData(name, password) {
        const response =
            await fetch('http://localhost:5287/api/users/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ "Id": name, "Password": password })
            });
        console.log(response.json());
        return response.json();
    }

    const verify = () => {
        var pass = document.getElementById('pass').value;
        var passAgain = document.getElementById('passAgain').value;
        var userName = document.getElementById('userName').value;
        var nickName = document.getElementById('nickName').value;

        var nameTaken = false;
        for (var i in usersList) {
            if (usersList[i].id === userName) {
                console.log(usersList[i].id);
                nameTaken = true;
            }
        }
        if (nameTaken === true) {
            alert("name is taken");
        } else if (userName === "") {
            alert("you have to enter a username");
        } else if (pass !== passAgain) {
            alert("passwords do not match");
        } else if (nickName === "") {
            alert("you have to enter a nickname")
        } else if (pass === "") {
            alert("you have to enter a password")
        } else if (!(/^[A-Za-z0-9]*$/.test(pass)) || pass.length < 4) {
            alert("The password should contain only letters and numbers and be at least 4 characters")
        } else {
            postData(userName, pass);
            navigate('/Conversations', { state: { name: nickName, profilePic: loginDetails.profilePic } })
        }
    }

    return (
        <div class="form-horizontal">
            <Container class="col">
                <h1 className="display-1"><strong><em>lets chat!</em></strong></h1>
                <form>
                    <Row>
                        <Col>Username:</Col>
                        <Col> <input id='userName' class='inputSqure' placeholder="Username" onChange={(e) => {
                            setLoginDetails({ ...loginDetails, username: e.target.value })
                        }} /> </Col>
                    </Row>
                    <Row>
                        <Col>Nickname:</Col>
                        <Col> <input id='nickName' class='inputSqure' placeholder="Nickname" onChange={(e) => {
                            setLoginDetails({ ...loginDetails, nickname: e.target.value })
                        }} /> </Col>
                    </Row>
                    <Row>
                        <Col>Password:</Col>
                        <Col> <input id="pass" class='inputSqure' type="password" placeholder="Password" onChange={(e) => {
                            setLoginDetails({ ...loginDetails, password: e.target.value })
                        }} /> </Col>
                    </Row>
                    <Row>
                        <Col>Repeat password:</Col>
                        <Col> <input id="passAgain" class='inputSqure' type='password' placeholder="Write password again" /> </Col>
                    </Row>
                    <Row>
                        <Col>Profile picture:</Col>
                        <Col>

                            <label for="uploadImg" class="btn btn-outline-secondary" style={{ "background-color": "aliceblue" }}>
                                upload image
                                <input type={"file"} id="uploadImg" hidden={true}
                                    onChange={(e) => uploadImage(e)} />
                            </label>

                        </Col>
                    </Row>
                </form>
                <div class="text-center" style={{ "margin": "10px" }}>
                    <Button variant="primary" style={{ "margin": "5px", "float": "left", "width": "100px" }} onClick={verify}>
                        Register!
                    </Button>
                    <p className='center rounded'> If you are already registered , <Link to={'/'}>Login!</Link> </p>
                </div>
            </Container>
        </div>
    );
}

export default Register;
