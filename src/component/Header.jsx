import React, { useEffect } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { connect } from "react-redux";
import { logout } from "../actions/userAction";
import "./Header.css";

const Header = ({ userLogin, history, logout }) => {
  const handleLogout = () => {
    logout();
  };

  const handleLogin = () => {
    history.push("/login");
  };

  useEffect(() => {
    //
  }, [userLogin.userInfo]);

  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="#home">iDreamCareer</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#pricing">Features</Nav.Link>
        <Nav.Link href="#features">Profile</Nav.Link>
      </Nav>

      {userLogin.userInfo ? (
        <Button variant="outline-primary" onClick={handleLogout}>
          Logout
        </Button>
      ) : (
        <Button variant="outline-primary" onClick={handleLogin}>
          Login
        </Button>
      )}
    </Navbar>
  );
};

const mapStateToProps = (state) => {
  return {
    userLogin: state.userLogin,
  };
};

export default connect(mapStateToProps, { logout })(Header);
