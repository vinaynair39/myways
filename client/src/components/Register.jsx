import React, { Component } from "react";
import { startSignUp, setError } from "../actions/auth";
import { SET_ERRORS } from "../actions/constants";
import { connect } from "react-redux";
import { Image } from 'semantic-ui-react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from './Navbar'
import {
  faMobileAlt,
  faUser,
  faSchool,
  faKey,
  faCity,
  faChalkboardTeacher,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import Loader from "./Loader";

const Wrapper = styled.div`
.loginPage{
  display:grid;
  background-color:#2E3740;
  grid-template-columns: 1fr 1fr;
  align-items:center;
  height:91vh;
}
.login-image{
  & img{
    height: 70vh; 
     padding: 0 0 0 2rem;
  }
}
.login-card{
  height: 80vh;
  align-self: center; 
  justify-self: center;

}
  .form-box {
    font-size: 1.2rem;
    background: #f3f7f7;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 4px inset, transparent 0px 0px 0px;
    padding: 1rem;
    @media screen and (min-height: 800px){
      margin: 2rem 1.5rem;
      width: 20vw;
    }
    margin:0.9rem 0.8rem;
    display: flex;
    border-radius: 4rem;
  }
  .input-box {
    border: none;
    outline: none;
    background: transparent;
  }
  .form-main{
    background: #2e3740;
    padding: 2rem 3rem;
    height: 30rem;
    border-radius: 4rem;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 1px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  }
  .icon-box {
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
  .errorMessage {
    color: red;
  }
`;

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;
  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      school: "",
      class: "",
      city: "",
      phone: "",
      password: "",
      confirmPassword: "",
      formErrors: { name: "", school: "", phone: "", password: "", confirmPassword: "", city: "" },
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };
    switch (name) {
      case "name":
        formErrors.name = value.length < 6 ? "Minimum 6 characters required for Name" : '';
        break;
      case "school":
        formErrors.school = value.length < 6 ? "Minimum 6 characters required for School" : '';
        break;
      case "class":
        break;
      case "city":
        formErrors.city = value.length < 1 ? "City Required" : '';
        break;
      case "phone":
        formErrors.phone = value.length <= 1
          ? "Phone Number Required"
          : value.length > 10
            ? "Maximum 10 characters allowed for a phone number"
            : "";
        break;
      case "password":
        formErrors.password = value.length < 6 ? "Minimum 6 characters required for Password" : '';
        break;
      case "confirmPassword":
        console.log('hi')
        formErrors.confirmPassword = this.state.password !== this.state.password ? "Passwords Doesn't match" : ''
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value })

  }
  onSubmit = e => {
    e.preventDefault();
    if (formValid(this.state) && this.state.password === this.state.confirmPassword) {
      const newUser = {
        name: this.state.name,
        school: this.state.school,
        phone: this.state.phone,
        password: this.state.password,
        city: this.state.city,
        class: this.state.class
      };
      console.log(newUser);
      this.props.startSignUp(newUser);
    } else {
      this.props.setError("passwords doesn't match")
    }
  };

  render() {
    const { formErrors } = this.state;
    return (
      <React.Fragment><Navbar />
        <Wrapper className="">
          {this.props.loading && <Loader />}
          <div className="loginPage">
            <div className="login-image animated fadeIn">
              <Image src={process.env.PUBLIC_URL + '/register.svg'} />
            </div>
            <form className="login-card animated fadeIn">
              <div className="d-flex justify-content-center align-items-center">
                <div className="d-flex flex-column  align-items-center mx-3 my-4">
                  <div className="form-box ">
                    <div className="d-flex justify-content-center align-items-center icon-box ">
                      <FontAwesomeIcon icon={faUser} className="form-icon" />
                    </div>
                    <input
                      type="text"
                      className="input-box ml-2"
                      name="name"
                      placeholder="Enter Your Name"
                      value={this.state.name}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-box ">
                    <div className="d-flex justify-content-center align-items-center icon-box">
                      <FontAwesomeIcon icon={faSchool} className="form-icon" />
                    </div>
                    <input
                      type="text"
                      className="input-box ml-2"
                      name="school"
                      placeholder="Enter Your School Name"
                      value={this.state.school}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-box ">
                    <div className="d-flex justify-content-center align-items-center icon-box">
                      <FontAwesomeIcon icon={faChalkboardTeacher} className="form-icon" />
                    </div>
                    <input
                      type="text"
                      className="input-box ml-2"
                      name="class"
                      placeholder="Enter Your Current Class"
                      value={this.state.class}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-box ">
                    <div className="d-flex justify-content-center align-items-center icon-box">
                      <FontAwesomeIcon icon={faEnvelope} className="form-icon" />
                    </div>
                    <input
                      type="text"
                      className="input-box ml-2"
                      name="email"
                      placeholder="Enter Your Email Id"
                      value={this.state.email}
                      onChange={this.onChange}
                    />
                  </div>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center ">
                  <div className="form-box ">
                    <div className="d-flex justify-content-center align-items-center icon-box">
                      <FontAwesomeIcon icon={faCity} className="form-icon" />
                    </div>
                    <input
                      type="text"
                      className="input-box ml-2"
                      name="city"
                      placeholder="Enter Your City"
                      value={this.state.city}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-box ">
                    <div className="d-flex justify-content-center align-items-center icon-box">
                      <FontAwesomeIcon icon={faMobileAlt} className="form-icon" />
                    </div>
                    <input
                      type="text"
                      className="input-box ml-2"
                      name="phone"
                      placeholder="Enter Phone Number"
                      value={this.state.phone}
                      onChange={this.onChange}
                    />
                  </div>

                  <div className="form-box ">
                    <div className="d-flex justify-content-center align-items-center icon-box">
                      <FontAwesomeIcon icon={faKey} className="form-icon" />
                    </div>
                    <input
                      type="password"
                      className="input-box ml-2"
                      name="password"
                      placeholder="Password"
                      value={this.state.password}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-box ">
                    <div className="d-flex justify-content-center align-items-center icon-box">
                      <FontAwesomeIcon icon={faKey} className="form-icon" />
                    </div>
                    <input
                      type="password"
                      className="input-box ml-2"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      value={this.state.confirmPassword}
                      onChange={this.onChange}
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <button type="submit" onClick={this.onSubmit} className="form-button">
                  Register
            </button>
              </div>
              {!!this.props.error && <div className="mt-4 mx-5 alert alert-danger" role="alert">{this.props.error} </div>}
              {this.state.formErrors.name.length > 0 && <div className="mt-4 mx-5 alert alert-danger" role="alert">{this.state.formErrors.name}</div>}
              {this.state.formErrors.city.length > 0 && <div className="mt-4 mx-5 alert alert-danger" role="alert">{this.state.formErrors.city}</div>}
              {this.state.formErrors.school.length > 0 && <div className="mt-4 mx-5 alert alert-danger" role="alert">{this.state.formErrors.school}</div>}
              {this.state.formErrors.phone.length > 0 && <div className="mt-4 mx-5 alert alert-danger" role="alert">{this.state.formErrors.phone}</div>}
              {this.state.formErrors.password.length > 0 && <div className="mt-4 mx-5 alert alert-danger" role="alert">{this.state.formErrors.password}</div>}

            </form>
          </div>
        </Wrapper>
      </React.Fragment>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  startSignUp: credentials => dispatch(startSignUp(credentials)),
  unsetError: () =>
    dispatch({
      type: "SET_ERRORS",
      error: ""
    }),
  setError: (error) => dispatch(setError(error))
});

const mapStateToProps = (state) => ({
  error: state.auth.error,
  loading: state.auth.loading

})

export default connect(mapStateToProps, mapDispatchToProps)(Register);
