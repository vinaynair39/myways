import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { startLogout } from "../actions/auth";
import styled from "styled-components";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faUserPlus } from "@fortawesome/free-solid-svg-icons";

class Navbar extends Component {
  render() {
    const loginRegLink = (
      <div>
        <Link to="/login" className="nav-links mr-5 text-color2">
          Login
        </Link>
        <Link to="/signup" className="nav-links mr-4 text-color2">
          Register
        </Link>
      </div>
    );

    const userLink = (
      <div>
        {/* <Link to="/profile" className="nav-links mr-4">
          User
        </Link> */}
        <a
          href=""
          onClick={this.props.logout.bind(this)}
          className="nav-links mr-4"
        >
          Logout
        </a>
      </div>
    );

    return (
      <NavWrapper>
        <div className="d-flex align-items-center nav-name col-6 pl-1 ">
          <Link to="/" className="nav-name">
            <img className="logo2 " src={process.env.PUBLIC_URL + '/edoflip.png'} />
            <img className="logo" src={"https://www.myways.in/visitor/img/logo/logo%20home.png"} />
          </Link>
        </div>

        <div className="d-flex align-items-center justify-content-end col-6 nav-links">
          <div className='text-color2 mr-4 text-capitalize'>{this.props.isAuthenticated ? `Hello ${this.props.user}!` : loginRegLink}</div>
        </div>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  display: flex;
  background: #2e3740;
  height: 9vh;
  box-shadow: 0 8px 8px -6px #2e3740;
  .nav-links {
    color: black;
    font-size: 1.2rem!important;
    text-decoration: none;
  }
  .logo{
    margin-bottom: 0.2rem;
    height:7vh;
    position:relative;
    left: -0.7vw;
  }
  .logo2{
    margin-left:1rem;
    padding: 0 0.3rem;
    margin-bottom: 0.5rem;
    height:5vh;
    position:relative;
    top:-0.2vh;  
  }
  .icon-reg{
    font-size: 1.4rem;
  }
  .nav-name {
    font-weight: bold;
    text-decoration: none !important;
    color: black;
  }
  .nav-links {
    font-size: 1rem;
  }
  .nav-links:hover{
    color: #FFC765;
  }


  .text-green {
    color: #0f9d58;
  }
  .text-black {
    color: black;
  }
  .text-color1 {
    color: #FFC765;
  }
  .text-color2 {
    color: #E6E6E6;
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

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user ? state.auth.user.name : ''
});
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(startLogout())
});
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
