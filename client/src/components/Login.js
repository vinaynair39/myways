import React, { Component } from "react";
import { startLogin } from "../actions/auth";
import { SET_ERRORS } from "../actions/constants";
import { connect } from "react-redux";
import Loader from 'react-loader-spinner'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt, faKey } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
const Wrapper = styled.div`
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 1.5rem 1rem 1.5rem;
  .form-box {
    font-size: 1.2rem;
    background: #f3f7f7;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 4px inset, transparent 0px 0px 0px;
    padding: 1rem;
    display: flex;
  }
  .form-main{
    background: white;
    padding: 1.5rem 3rem;
  }
  .input-box {
    border: none;
    outline: none;
    background: transparent;
  }
  .icon-box{
    width: 3vw;
  }
  .form-button {
    border: none;
    background: #1ba94c;
    color: white;
    padding: 0.5rem 1rem;
    font-size: 1.5rem;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 1px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  }
  .form-icon {
    font-size: 1.4rem;
  }
  .errorMessage {
    color: red;
  }

`;

class Login extends Component {
  constructor() {
    super();
    this.state = {
      phone: "",
      password: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    const user = {
      phone: this.state.phone,
      password: this.state.password
    };
    this.props.startLogin(user);
  }

  onError() {
    return <span className="errorMessage">{this.props.error}</span>
  }

  render() {
    return (
      <Wrapper className="">
        {this.props.loading && <div className="spinner"></div>}
        <form noValidate onSubmit={this.onSubmit} className="form-main">
          <h1 className="pb-3 pt-0 text-center">Login</h1>
          <div className="form-box">
            <div className="d-flex justify-content-center align-items-center icon-box">
              <FontAwesomeIcon icon={faMobileAlt} className="form-icon" />
            </div>
            <input
              type="text"
              className="input-box"
              name="phone"
              placeholder="Your phone"
              value={this.state.phone}
              onChange={this.onChange}
            />
          </div>
          {this.props.error === "User Doesn't Exist, Please Register!" && (
            this.onError()
          )}
          <div className="form-box my-4">
            <div className="d-flex justify-content-center align-items-center icon-box">
              <FontAwesomeIcon icon={faKey} className="form-icon" />
            </div>
            <input
              type="password"
              className="input-box"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.onChange}
            />
          </div>
          {this.props.error === "Inavlid Password!" && (
            this.onError()

          )}
          <div className="d-flex justify-content-end">
            <button type="submit" className="form-button">
              Sign in
            </button>
          </div>
        </form>
      </Wrapper>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startLogin: credentials => dispatch(startLogin(credentials)),
  unsetError: () =>
    dispatch({
      type: SET_ERRORS,
      error: ""
    })
});

const mapStateToProps = (state) => ({
  error: state.auth.error,
  loading: state.auth.loading
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
