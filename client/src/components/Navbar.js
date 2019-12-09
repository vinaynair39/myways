import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import {startLogout} from '../actions/auth';
import styled from "styled-components";
import { connect } from "react-redux";

class Navbar extends Component {

  render() {
    const loginRegLink = (
      <div>
        <Link to="/login" className="nav-links mr-5">
          Login
        </Link>
        <Link to="/signup" className="nav-links mr-5">
          Register
        </Link>
      </div>
    );

    const userLink = (
      <div>
        {/* <Link to="/profile" className="nav-links mr-4">
          User
        </Link> */}
        <a href="" onClick={this.props.logout.bind(this)} className="nav-links mr-4">
          Logout
        </a>
      </div>
    );

    return (
      <NavWrapper>
        <div className="d-flex align-items-center nav-name col-6 ">
          <Link to="/" className="nav-name">
            <h1 className="nav-name">MyWays</h1>
          </Link>
        </div>

        <div className="d-flex align-items-center justify-content-end col-6 nav-links">
          <div>{this.props.isAuthenticated? userLink : loginRegLink}</div>
        </div>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  display: flex;
  .nav-link {
    color: var(--mainDark) !important;
    font-size: 1.3rem;
    text-transform: uppercase;
  }
  .nav-links {
    color: black;
    text-decoration: none;
  }
  .nav-name {
    font-size: 2.8rem;
    font-weight: bold;
    text-decoration: none;
    color: black;
  }
  .nav-links {
    font-size: 1.4rem;
  }
  .text-green {
    color: #0f9d58;
  }
  .text-black {
    color: black;
  }
  .button {
    justify-content: flex-end;
    color: #424242;
    font-size: 2.3rem;
  }
  .button:hover {
    color: black;
  }
  .search-bar {
    background: #e6e6e6;
    border: 1px solid #bdbdbd;
    width: 40%;
    margin-left: 1rem;
    margin-right: 1rem;
  }
  .nav-font {
    font-size: 1.4rem;
  }
  .navbar-navigation {
    list-style: none;
    display: block;
  }
  .input-form {
    width: 49vw;
    background: transparent;
    border: none;
  }
  .submit-btn {
    height: 3.3rem;
    border: none;
    background: #0f9d58;
    color: var(--mainWhite);
  }
  @media only screen and (max-width: 1200px) {
    .nav-name {
      font-size: 1.8rem;
      font-weight: bold;
      text-decoration: none;
    }
    .button {
      justify-content: center;
      color: #424242;
      font-size: 1.6rem;
    }
  }
`;

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});
const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(startLogout())
});
export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
