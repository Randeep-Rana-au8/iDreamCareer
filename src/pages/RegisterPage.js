import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import "./RegisterPage.css";
import { Button, Form, FormControl } from "react-bootstrap";
import svg from "../images/friends.png";
import { connect } from "react-redux";
import { userRegister } from "../actions/userAction";

const Register = ({ state, setUser, userRegister, userLogin, history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (userLogin.userInfo) {
      history.push("/");
    }
  }, [userLogin]);

  const onNameChange = (event) => setName(event.target.value);
  const onEmailChange = (event) => setEmail(event.target.value);
  const onPasswordChange = (event) => setPassword(event.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };

    userRegister(data);
  };

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

        <Form className="registerForm" onSubmit={handleSubmit}>
          <h4 style={{ textAlign: "center" }}>Register Form</h4>
          <Form.Group controlId="formBasicText">
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              type="text"
              name="name"
              placeholder="Enter Name"
              onChange={onNameChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              type="email"
              name="email"
              placeholder="Enter email"
              onChange={onEmailChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              name="password"
              placeholder="Password"
              onChange={onPasswordChange}
            />
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

const mapStateToProps = (state) => {
  return {
    userLogin: state.userLogin,
  };
};

export default connect(mapStateToProps, { userRegister })(Register);
