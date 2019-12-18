import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";
import {
  faDirections,
  faColumns,
  faCaretDown,
  faSignOutAlt,
  faSearch,
  faLevelUpAlt,
  faExclamationCircle,
  faComments,
  faStar
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { startAddTests } from "../actions/test";
import TesList from "./TestList";
import ResultPage from "../pages/ResultPage";
import PublicRoute from "../routers/PublicRoute";
import Login from "./Login";
import Register from "./Register";
import { Router, Route, Switch } from "react-router-dom";
import { Link, withRouter } from "react-router-dom";
import TestPage from "../pages/DashboardPage";

const Wrapper = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr 3.1fr 0.9fr;
  .grid-col-1 {
  }
  .grid-col-2 {
    height: 100%;
    overflow-y: scroll;

  }
  .sidebar {
    display: grid;
    grid-template-rows: auto auto;
    color: #173b0b;
    font-weight: bold;
    background: #f8d637;
    padding: 1rem 0;
    overflow-y: scroll;
  }
  .sidebar-grid1 {
    display: grid;
    grid-template-rows: auto;
    align-content: flex-start;
    height: fit-content;

  }
  .sidebar1-item {
    padding-left: 1rem;
    font-size: 1rem;
    margin-bottom: 1rem;
    cursor: pointer;
    user-select: none; /* supported by Chrome and Opera */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
  }
  .sidebar2-item {
    padding-left: 1rem;
    font-size: 1rem;
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
    margin-right: 0.3rem;
    font-size: 1.3rem;
    width: 1.9rem;
  }
  .sub-icon{
    margin-right: 0.2rem;
    font-size: 1rem;
    width: 1.9rem;
  }
  .text-white {
    text-decoration: none !important;
  color: #173b0b  !important;
  }
  .sub-item {
    margin-left: 1rem;
    margin-bottom:0.7rem;
    font-weight: 540;
    font-size: 0.95rem;
  }
`;

let selection;

class Dashboard2 extends Component {
  constructor(props) {
    super(props);
    this.state = { selection: "" };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
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
              Overview
            </div>
            <div
              className="sidebar1-item"
              onClick={() => this.handleClick("dashboard")}
            >
              <FontAwesomeIcon icon={faDirections} className="icon" />
              Suggested Careers
            </div>
            <div
              href="#pageSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              class="dropdown-toggle"
              className="sidebar1-item"
            >
              <FontAwesomeIcon icon={faSearch} className="icon" />
              Discover Yourself
              <FontAwesomeIcon icon={faCaretDown} className="icon mr-0 ml-0" />
            </div>
            <div class="collapse list-unstyled" id="pageSubmenu">
              <div className="sidebar1-item sub-item"
              onClick={() => this.handleClick("cognitive")}>
                <FontAwesomeIcon icon={faStar} className="sub-icon" /> Cognitive
                Intelligence
              </div>
              <div className="sidebar1-item sub-item">
                <FontAwesomeIcon icon={faStar} className="sub-icon" /> Career
                Values
              </div>
              <div className="sidebar1-item sub-item">
                <FontAwesomeIcon icon={faStar} className="sub-icon" /> Work Orientation
              </div>
              <div className="sidebar1-item sub-item">
                <FontAwesomeIcon icon={faStar} className="sub-icon" /> Personality Traits
              </div>
              <div className="sidebar1-item sub-item">
                <FontAwesomeIcon icon={faStar} className="sub-icon" /> Center of Operation
              </div>
              <div className="sidebar1-item sub-item">
                <FontAwesomeIcon icon={faStar} className="sub-icon" /> Learning Style
              </div>
              <div className="sidebar1-item sub-item mb-3">
                <FontAwesomeIcon icon={faStar} className="sub-icon" /> Subject Interest
              </div>
            </div>
            <div
              className="sidebar1-item"
            >
              <FontAwesomeIcon icon={faLevelUpAlt} className="icon" />
              Grow with MyWays
            </div>
            <div
              className="sidebar1-item"
            >
              <FontAwesomeIcon icon={faExclamationCircle} className="icon" />
              Career Library
            </div>
            <div
              className="sidebar1-item"
            >
              <FontAwesomeIcon icon={faComments} className="icon" />
              MyBuddy Chatbot
            </div>
            <div>
            {this.props.isAuthenticated && (
              <div className="sidebar2-item">
              <FontAwesomeIcon icon={faSignOutAlt} className="icon" />
              <a
                href=""
                onClick={this.props.logout.bind(this)}
                className="text-white"
              >
                Logout
              </a>
            </div>
            )}
            </div>
          </div>
          <div className="sidebar-grid2">
            {/* {this.props.isAuthenticated && (
              <div className="sidebar2-item">
              <FontAwesomeIcon icon={faSignOutAlt} className="icon" />
              <a
                href=""
                onClick={this.props.logout.bind(this)}
                className="text-white"
              >
                Logout
              </a>
            </div>
            )} */}
          </div>
        </div>
        <div className="grid-col-2 d-flex justify-content-center mb-4">
          {this.state.selection === "dashboard" ? (
            <TesList tests={this.props.tests} />
          ) : this.state.selection === "cognitive" ? (
            <ResultPage />
          ) : (
            <TesList tests={this.props.tests} />
          )}
        </div>
        <div>
          Work in Progress
        </div>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  tests: state.test.tests
});
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(startLogout()),
  startAddTests: () => dispatch(startAddTests())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard2);
