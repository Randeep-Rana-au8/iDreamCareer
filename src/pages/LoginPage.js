import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Redirect } from "react-router-dom";
import "./LoginPage.css";
// import Svg from "../images/90576.jpg";
import { Button, Form, FormControl } from "react-bootstrap";
import { connect } from "react-redux";
import svg from "../images/social-media.png";

const Login = ({ state, setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailChange = (event) => setEmail(event.target.value);
  const onPasswordChange = (event) => setPassword(event.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  // if (user) return <Redirect to="/homePage" />;
  return (
    <div>
      <div className="welcomeNote">
        <h1>Sign In to</h1>
        <h1>Recharge Direct</h1>
      </div>
      <div className="mainDiv">
        <div className="imgDiv">
          <img className="loginSvg" src={svg} alt="login svg" />
        </div>

        <Form className="loginForm" onSubmit={onSubmit}>
          <h4 style={{ textAlign: "center" }}>Login Form</h4>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={onEmailChange} />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={onPasswordChange} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
          <div>
            <br />
            <p>
              {" "}
              <span>New User? </span>
              <span>
                <Link to="/signup">Signup</Link>
              </span>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
