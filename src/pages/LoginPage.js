import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";
import { Button, Form, FormControl } from "react-bootstrap";
import { connect } from "react-redux";
import svg from "../images/social-media.png";
import { userLogin } from "../actions/userAction";
import Message from "../component/Message";

const Login = ({ state, setUser, history, userLogin, userLoginData }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailChange = (event) => setEmail(event.target.value);
  const onPasswordChange = (event) => setPassword(event.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    const data = { email, password };
    userLogin(data);
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    if (userLoginData.userInfo) {
      history.push("/");
    }
    console.log(userLogin);
  }, [userLogin, userLoginData]);

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
          {userLoginData.errorLogin && (
            <Message variant="danger">{userLoginData.errorLogin}</Message>
          )}
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={onEmailChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={onPasswordChange}
            />
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

const mapStateToProps = (state) => {
  return {
    userLoginData: state.userLogin,
  };
};

export default connect(mapStateToProps, { userLogin })(Login);
