import React, { Component } from 'react'
import {startSignUp } from '../actions/auth';
import {connect} from 'react-redux';

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
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Register</h1>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Enter your name"
                  value={this.state.name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="school">School</label>
                <input
                  type="school"
                  className="form-control"
                  name="school"
                  placeholder="Enter school name"
                  value={this.state.school}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  placeholder="Phone"
                  value={this.state.phone}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Register!
              </button>
            </form>
          </div>
        </div>
      </div>
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
