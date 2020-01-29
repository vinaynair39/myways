import React, { Component, useState } from "react";
import { startLogin, setError } from "../../actions/auth";
import { SET_ERRORS } from "../../actions/constants";
import { Image } from 'semantic-ui-react'
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt, faKey, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import Loader from "../Loader/Loader";
import Navbar from '../Navbar/Navbar'


const Wrapper = styled.div`
  .loginPage{
    display:grid;
    background-color:#2E3740;
    grid-template-columns: 1.2fr 0.8fr;
    align-items:center;
    height:91vh;
  }
  .login-image{
    & img{
      height: 80vh; 
       padding: 0 0 0 2rem;
      align-self: center;
      justify-self: center;
    }
  }
  .login-card{
    width: 35vw;
    height: 60vh;
    align-self: center;
    justify-self: center;

  }
.form-box {
  display:flex;
  justify:content: space-evenly;
  text-align:center;
  font-size: 1.2rem;
  background: #f3f7f7;
  margin: 2rem auto;
  width: 25vw;
  padding: 1rem;
  display: flex;
  border-radius: 4rem;
  @media screen and (min-height: 800px){
    margin: 3rem auto;
    width: 25vw;
  }
}
  .form-main{
    background: #2e3740;
    height: 27rem;
    border-radius: 1rem;
    // box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 1px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  }
  .input-box {
    border: none;
    outline: none;
    width:80%;
    background: transparent;
    color: #2F3841;
  }
  .icon-box{
    background-color:transparent;
    border:none;
    min-width: 3vw;
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
    max-width:1.5vw;
    width:1.5vw;
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
  .logo {
    width: 70%;
    height: 7rem;
    margin-bottom: 1rem;
    @media screen and (min-height: 800px){
      height: 10rem;
    }
  }
`;

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = React.createRef();
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
    this.props.unsetError();
    this.setState({ [e.target.name]: e.target.value });
  }
  toggleShow(e) {
    e.preventDefault();
    this.setState({ hidden: !this.state.hidden });
  }
  onSubmit(e) {
    e.preventDefault();
    if (this.state.phone.length < 1)
      this.props.setError('Please Enter Your Phone Number');
    else if (this.state.phone.length < 10 || this.state.phone.length < 10)
      this.props.setError('Please Enter A Correct Phone Number');
    else if (this.state.phone.length < 1)
      this.props.setError('Please Enter Your Password');
    else {
      const user = {
        phone: this.state.phone,
        password: this.state.password
      };
      this.props.startLogin(user);
    }
  }

  onError() {
    return <span className="errorMessage">{this.props.error}</span>
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Wrapper className="">
          {this.props.loading && <Loader />}
          <div className="loginPage">
            <div className="login-image animated fadeIn">
              <Image src={process.env.PUBLIC_URL + '/login.svg'} />
            </div>
            <form className="login-card animated fadeIn">
              <h1 className="pb-3 pt-0 text-center title">Login</h1>
              <div className="form-box">
                <div className="d-flex justify-content-center align-items-center icon-box">
                  <FontAwesomeIcon color={'#2e3740'} icon={faMobileAlt} className="form-icon" />
                </div>
                <input
                  type="text"
                  required
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
              <div className="form-box">
                <div className="d-flex justify-content-center align-items-center icon-box">
                  <FontAwesomeIcon color={'#2e3740'} icon={faKey} className="form-icon" />
                </div>
                <input
                  type={this.state.hidden ? "password" : "text"}
                  className="input-box"
                  required
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onKeyDown={e => {
                    if(e.key === 'Enter')
                      this.login.current.click();
                  }}
                  onChange={this.onChange}
                />
                <button type="button" className='passbutton' onClick={this.toggleShow}><FontAwesomeIcon color={'#2e3740'} icon={this.state.hidden ? faEye : faEyeSlash} className="form-icon" /></button>
              </div>
              {this.props.error === "Inavlid Password!" && (
                this.onError()
              )}
              <div className="d-flex justify-content-center">
                <button type="submit" ref={this.login}  onClick={this.onSubmit} className="form-button">
                  Sign in
                </button>
              </div>
              {!!this.props.error && <div className="mt-4 mx-5 alert alert-danger" role="alert">{this.props.error} </div>}

            </form>
          </div>
        </Wrapper>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startLogin: credentials => dispatch(startLogin(credentials)),
  unsetError: () =>
    dispatch({
      type: SET_ERRORS,
      error: ""
    }),
  setError: (error) => dispatch(setError(error))
});

const mapStateToProps = (state) => ({
  error: state.auth.error,
  loading: state.auth.loading
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
