import React, { Component } from "react";
import { startSignUp } from "../actions/auth";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileAlt,
  faUser,
  faSchool,
  faKey
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;
  height: 88vh;
  justify-content: center;
  align-items: center;
  .form-box {
    font-size: 1.2rem;
    background: #f3f7f7;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 4px inset, transparent 0px 0px 0px;
    padding: 1rem;
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
      phone: "",
      password: "",
      formErrors: { name: "", school: "", phone: "", password: "" },
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
        formErrors.name =
          value.length < 6 ? "Minimum 6 characters required" : "";
        break;
      case "school":
        formErrors.school =
          value.length < 6 ? "Minimum 6 characters required" : "";
        break;
      case "phone":
        formErrors.phone =
          value.length <= 1
            ? "Minimum 1 character required"
            : value.length > 10
              ? "Maximum 10 characters allowed"
              : "";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "Minimum 6 characters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  }
  onSubmit = e => {
    e.preventDefault();
    if (formValid(this.state)) {
      const newUser = {
        name: this.state.name,
        school: this.state.school,
        phone: this.state.phone,
        password: this.state.password
      };
      console.log(newUser);
      this.props.startSignUp(newUser);
    } else {
      console.error("Invalid Inputs. Informed the User");
    }
  };

  render() {
    const { formErrors } = this.state;
    return (
      <Wrapper className="">
        <form noValidate onSubmit={this.onSubmit} className="form-main d-flex flex-column justify-content-center align-items-center">
          <div className="form-box ">
            <div className="d-flex justify-content-center align-items-center icon-box ">
              <FontAwesomeIcon icon={faUser} className="form-icon" />
            </div>
            <input
              type="text"
              className="input-box ml-2"
              name="name"
              placeholder="Enter your name"
              value={this.state.name}
              onChange={this.onChange}
            />
          </div>
          {formErrors.name.length > 0 && (
            <span className="errorMessage">{formErrors.name}</span>
          )}
          <div className="form-box mt-4">
            <div className="d-flex justify-content-center align-items-center icon-box">
              <FontAwesomeIcon icon={faSchool} className="form-icon" />
            </div>
            <input
              type="school"
              className="input-box ml-2"
              name="school"
              placeholder="Enter school name"
              value={this.state.school}
              onChange={this.onChange}
            />
          </div>
          {formErrors.school.length > 0 && (
            <span className="errorMessage">{formErrors.school}</span>
          )}
          <div className="form-box mt-4">
            <div className="d-flex justify-content-center align-items-center icon-box">
              <FontAwesomeIcon icon={faMobileAlt} className="form-icon" />
            </div>
            <input
              type="text"
              className="input-box ml-2"
              name="phone"
              placeholder="Phone"
              value={this.state.phone}
              onChange={this.onChange}
            />
          </div>
          {formErrors.phone.length > 0 && (
            <span className="errorMessage">{formErrors.phone}</span>
          )}
          <div className="form-box mt-4">
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
          {formErrors.password.length > 0 && (
            <span className="errorMessage">{formErrors.password}</span>
          )}
          <div className="d-flex justify-content-end mt-4">
            <button type="submit" className="form-button">
              Register
            </button>
          </div>
        </form>
      </Wrapper>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  startSignUp: credentials => dispatch(startSignUp(credentials)),
  setUIErrors: error =>
    dispatch({
      type: "SET_ERRORS",
      error: error
    }),
  unsetError: () =>
    dispatch({
      type: "SET_ERRORS",
      error: ""
    })
});

// const mapStateToProps = (state) => ({
//   error: state.auth.error,
//   loading: state.auth.loading

// })

export default connect(undefined, mapDispatchToProps)(Register);
