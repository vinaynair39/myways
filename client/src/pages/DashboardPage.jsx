import React, { Component } from "react";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";
import Layout from "../components/Layout/Layout";
import { startAddTests } from "../actions/test";
import TesList from "../components/TestList/TestList";


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
        <div className="dashboard  animated fadeIn">
            <TesList tests={this.props.tests} />
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
