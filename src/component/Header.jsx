import React, { useEffect } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { connect } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";

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
      <LinkContainer to="/">
        <Navbar.Brand>iDreamCareer</Navbar.Brand>
      </LinkContainer>
      <Nav className="mr-auto">
        <LinkContainer to="/">
          <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/feature">
          <Nav.Link>Features</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/profile">
          <Nav.Link>Profile</Nav.Link>
        </LinkContainer>
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
