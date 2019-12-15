import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { startLogout } from '../actions/auth';
import {
  faPoll,
  faColumns,
  faChartArea,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { startAddTests } from '../actions/test'
import TesList from './TestList';
import PublicRoute from "../routers/PublicRoute";
import Login from "./Login";
import Register from "./Register";
import { Router, Route, Switch } from "react-router-dom";
import { Link, withRouter } from "react-router-dom";
import TestPage from '../pages/DashboardPage';

const Wrapper = styled.div`
  display: grid;
  height: 92vh;
  grid-template-columns: 1fr 5fr;
  .grid-col-1 {
  }
  .grid-col-2 {
    overflow-y: scroll;
  }
  .sidebar {
    display: grid;
    grid-template-rows: 1fr 1fr;
    color: white;
    background: #2e3740;
    padding: 1rem 0;
  }
  .sidebar-grid1 {
    display: grid;
    align-items: center;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  }
  .sidebar1-item {
    padding-left: 1rem;
    font-size: 1.2rem;
    cursor: pointer;
    user-select: none; /* supported by Chrome and Opera */
   -webkit-user-select: none; /* Safari */
   -khtml-user-select: none; /* Konqueror HTML */
   -moz-user-select: none; /* Firefox */
   -ms-user-select: none; /* Internet Explorer/Edge */
  }
  .sidebar2-item {
    padding-left: 1rem;
    font-size: 1.2rem;
    user-select: none; /* supported by Chrome and Opera */
   -webkit-user-select: none; /* Safari */
   -khtml-user-select: none; /* Konqueror HTML */
   -moz-user-select: none; /* Firefox */
   -ms-user-select: none; /* Internet Explorer/Edge */
  }
  .sidebar-grid2 {
    display: grid;
    grid-template-rows: 1fr;
    align-items: end;
    padding-top: 12vh;
    padding-bottom: 1rem;

  }
  .icon {
    margin-right: 0.5rem;
    font-size: 1.5rem;
    width: 1.9rem;
  }
  .text-white{
      color: white!important;
      text-decoration: none !important;
  }
`;

let selection;

class Dashboard2 extends Component {
  constructor(props) {
    super(props);
    this.state = { selection: "" };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    this.props.startAddTests();
  }

  handleClick = option => {
    console.log("ok");
    this.setState({ selection: option });
  };

  render() {
    return (
      <Wrapper>
        <div className="grid-col sidebar">
          <div className="sidebar-grid1">
            <div
              className="sidebar1-item"
              onClick={() => this.handleClick("dashboard")}
            >
              <FontAwesomeIcon icon={faColumns} className="icon" />
              Dashboard
            </div>
          </div>
          <div className="sidebar-grid2">
            {this.props.isAuthenticated && <div className="sidebar2-item">
              <FontAwesomeIcon icon={faSignOutAlt} className="icon" />
              <a href="" onClick={this.props.logout.bind(this)} className="text-white">
                Logout
              </a>
            </div>}

          </div>
        </div>
        <div className="grid-col-2 d-flex justify-content-center mb-4">
          {this.state.selection === "dashboard" ? (
            <TesList tests={this.props.tests}/>
          ) : this.state.selection === "test" ? (
            <TesList tests={this.props.tests}/>
          ) : (
            <TesList tests={this.props.tests}/>
              )}
        </div>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  tests: state.test.tests
});
const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(startLogout()),
  startAddTests: () => dispatch(startAddTests())
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard2)
