import React, { Component, useState } from "react";
import { startLogin } from "../actions/auth";
import { SET_ERRORS } from "../actions/constants";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt, faKey, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import LoadingPage from '../pages/LoadingPage';
import styled from "styled-components";

const Wrapper = styled.div`
  height: 88vh;
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
    border-radius: 4rem;
  }
  .form-main{
    background: #2e3740;
    height: 27rem;
    padding: 1.5rem 3rem;
    border-radius: 1rem;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 1px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  }
  .input-box {
    border: none;
    outline: none;
    background: transparent;
  }
  .input-box2{
    border: none;
    outline: none;
    background: transparent;
    width: 15rem;
  }
  .icon-box{
    width: 3vw;
  }
  .form-button {
    border: none;
    background: #FFC765;
    outline:none;
    color: white;
    padding: 0.5rem 1rem;
    font-size: 1.5rem;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 1px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    border-radius: 6px;
    &:hover{
      transform: scale(1.1);
    }
    &:active{
        transform: translateY(4px);
        border-bottom: solid 5px #FFC765;
    }
  }
  .form-icon {
    font-size: 1.4rem;
  }
  .title{
    color: #FFC765;
  }
  .errorMessage {
    color: #FFC765;
  }
  .passbutton{
    background-color:transparent;
    border:none;
    outline: none;
  }

`;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: "",
      password: "",
      errors: {},
      hidden: true
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  toggleShow() {
    this.setState({ hidden: !this.state.hidden });
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
        <form noValidate onSubmit={this.onSubmit} className="form-main d-flex flex-column justify-content-center align-items-center">
          <h1 className="pb-3 pt-0 text-center title">Login</h1>
          <div className="form-box  mt-3 mb-4">
            <div className="d-flex justify-content-center align-items-center icon-box">
              <FontAwesomeIcon color={'#2e3740'} icon={faMobileAlt} className="form-icon" />
            </div>
            <input
              type="text"
              className="input-box2"
              name="phone"
              placeholder="Your phone"
              value={this.state.phone}
              onChange={this.onChange}
            />
          </div>
          {this.props.error === "User Doesn't Exist, Please Register!" && (
            this.onError()
          )}
          <div className="form-box my-1">
            <div className="d-flex justify-content-center align-items-center icon-box">
              <FontAwesomeIcon color={'#2e3740'} icon={faKey} className="form-icon" />
            </div>
            <input
              type={this.state.hidden ? "password" : "text"}
              className="input-box"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.onChange}
            />
            <button className='passbutton' onClick={this.toggleShow}><FontAwesomeIcon color={'#2e3740'} icon={this.state.hidden ? faEye : faEyeSlash} className="form-icon" /></button>
          </div>
          {this.props.error === "Inavlid Password!" && (
            this.onError()

          )}
          <div className="d-flex justify-content-end">
            <button type="submit" className="form-button mt-4">
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
