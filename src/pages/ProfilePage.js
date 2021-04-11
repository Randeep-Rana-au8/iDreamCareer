import React, { useEffect, useState } from "react";
import { Form, Button, Row, Image } from "react-bootstrap";
import Message from "../component/Message";
import "./ProfilePage.css";
import svg from "../images/userVector.png";
import { connect } from "react-redux";
import { updateUser } from "../actions/userAction";

const ProfilePage = ({ userLoginData, history, updateUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (password.length > 0) {
      const checkPass = password.length && password === confirmPassword ? password : "";
      if (checkPass) {
        const data = {
          name,
          email,
          dob,
          password,
        };
        updateUser(data);
        setSuccess("User updated");
      } else {
        setError("Password not matched");
      }
    } else {
      const data = {
        name,
        email,
        dob,
        password: userLoginData.userInfo.password,
      };

      updateUser(data);
      setSuccess("User updated");
    }
  };

  useEffect(() => {
    if (!userLoginData.userInfo) {
      history.push("/login");
    } else {
      setName(userLoginData.userInfo.name);
      setEmail(userLoginData.userInfo.email);
      setDob(userLoginData.userInfo.dob);
      setError("");
    }
  }, [userLoginData.userInfo]);

  return (
    <>
      <h1 style={{ textAlign: "center", marginBottom: " 30px" }}>Profile Page </h1>
      <div className="profileContainer">
        <div className="profilePageContent">
          {success && <Message>{success}</Message>}
          <Image src={svg} alt="user" className="userImage" />
        </div>

        <div className="userProfileEdit">
          <h2>User Profile</h2>

          <Form className="editProfileForm" onSubmit={submitHandler}>
            {error && <Message variant="danger"> {error}</Message>}
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="date">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter Date of Birth"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button type="submit" variant="primary">
              Update
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    userLoginData: state.userLogin,
  };
};

export default connect(mapStateToProps, { updateUser })(ProfilePage);
