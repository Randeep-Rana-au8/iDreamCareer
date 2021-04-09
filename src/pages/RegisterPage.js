import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import "./RegisterPage.css";
import { Button, Form, FormControl } from "react-bootstrap";
import svg from "../images/friends.png";

const Login = ({ state, setUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onNameChange = (event) => setName(event.target.value);
  const onEmailChange = (event) => setEmail(event.target.value);
  const onPasswordChange = (event) => setPassword(event.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  // if (user) return <Redirect to="/homePage" />;
  return (
    <div>
      <div className="registerWelcomeNote">
        <h1>Sign Up to</h1>
        <h1>Recharge Direct</h1>
      </div>
      <div className="mainDiv">
        <div className="imgDiv">
          <img className="registerSvg" src={svg} alt="register svg" />
        </div>

        <Form className="registerForm" onSubmit={onSubmit}>
          <h4 style={{ textAlign: "center" }}>Register Form</h4>
          <Form.Group controlId="formBasicText">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" onChange={onNameChange} />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={onEmailChange} />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={onPasswordChange} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Sign Up
          </Button>
          <div>
            <br />
            <p>
              {" "}
              <span>Existing User? </span>
              <span>
                <Link to="/login">Login</Link>
              </span>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
