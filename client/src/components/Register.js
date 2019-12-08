import React, { Component } from 'react'
import {startSignUp } from '../actions/auth';
import {connect} from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt, faUser, faSchool, faKey } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
const Wrapper = styled.div`
  background: white;
  width: 37vw;
  padding: 3rem 1.5rem 1rem 1.5rem;
  .form-box {
    font-size: 1.2rem;
    background: #f3f7f7;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 4px inset, transparent 0px 0px 0px;
    padding: 1rem;
    display: flex;
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
`;

class Register extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      school: '',
      phone: '',
      password: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const newUser = {
        name: this.state.name,
        school: this.state.school,
        phone: this.state.phone,
        password: this.state.password,
    }
    this.props.startSignUp(newUser);
  }

  render() {
    return (
      <Wrapper className="">
            <form noValidate onSubmit={this.onSubmit}>
              <div className="form-box">
              <div className="d-flex justify-content-center align-items-center icon-box">
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
              <div className="form-box my-3 ">
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
              <div className="form-box">
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
              <div className="form-box my-3">
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
              <div className="d-flex justify-content-end">
            <button type="submit" className="form-button">
              Register
            </button>
          </div>
            </form>
          </Wrapper>
    )
  }
}
const mapDispatchToProps = (dispatch) => ({
  startSignUp: (credentials)=> dispatch(startSignUp(credentials)),
  setUIErrors: (error) => dispatch({
      type: 'SET_ERRORS',
      error: error
  }),
  unsetError: () => dispatch({
      type: 'SET_ERRORS',
      error: ''
  })
});

// const mapStateToProps = (state) => ({
//   error: state.auth.error,
//   loading: state.auth.loading
 
// })


export default connect(undefined, mapDispatchToProps)(Register);
