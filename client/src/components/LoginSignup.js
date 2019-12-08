import React from "react";
import styled from "styled-components";
import Login from "./Login";
import Register from "./Register";
import { Link, Switch, Route } from "react-router-dom";

const Wrapper = styled.div`
  background: #f3f7f7;
  min-height: 100vh;
  padding-top: 2rem;
  padding-bottom: 2rem;
  .auth-branding {
    font-size: 3rem;

    font-weight: 1000;
  }
  .auth-box-header {
    background: white;
    width: 37vw;
    font-size: 1.4rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-content: center;
    align-items: center;
    border-bottom: 1px dashed #738f93;
  }
  .signup {

  }
  .login{
  }
  .auth-link {
    text-decoration: none;
    color: black;
  }
`;

export default function LoginSignup() {
  return (
    <Wrapper className="d-flex flex-column justify-content-center align-items-center">
      <div className="auth-branding">MyWays</div>
      <div className="auth-box-header">
        <div className="text-center p-3 login">
          <Link to="/login" className="auth-link">
            Login
          </Link>
        </div>
        <div className="text-center p-3 signup">
          <Link to="/signup" className="auth-link">
            Sign Up
          </Link>
        </div>
      </div>
      <Switch>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/signup" component={Register}></Route>
      </Switch>
      <div className="auth-box"></div>
    </Wrapper>
  );
}
