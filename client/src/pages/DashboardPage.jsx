import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";
import Layout from '../components/Layout'
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
import TesList from "../components/TestList";
import ResultPage from "./ResultPage";


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
      <Layout>
        <div className="dashboard">
          <div className="dashboard__grid-col-2 d-flex justify-content-center mb-4">
            <TesList tests={this.props.tests} />
          </div>
        </div>
      </Layout>
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
