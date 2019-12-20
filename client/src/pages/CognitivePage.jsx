import React from "react";
import ResultList from "../components/result/ResultList";
import ResultChart from "../components/result/ResultChart";
import Layout from "../components/Layout";
import { connect } from "react-redux";
import Link from "react-router-dom/Link";

const CognitivePage = props => {
  return (
    <>
      <Layout>
        <div className="cognitive">
          <div className="cognitive__data">
            <ResultList results={props.results} />
          </div>
          <div className=" cognitive__next">
            <ResultChart />
            <div >
              <h5>Explore Next</h5>
              <Link to="careerValues">
                <img
                  src="https://image.flaticon.com/icons/png/512/2322/2322887.png"
                  alt=""
                />
              </Link>
              <h6>Career Values</h6>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

const mapStateToProps = state => ({
  results: [
    {
      title: "problem solving",
      subtitle:
        "there is this thing called as proper plaanning and yahape yeh nhi hoga",
      score: 90
    },
    {
      title: "problem solving",
      subtitle:
        "there is this thing called as proper plaanning and yahape yeh nhi hoga",
      score: 98
    },
    {
      title: "problem solving",
      subtitle:
        "there is this thing called as proper plaanning and yahape yeh nhi hoga",
      score: 78
    },
    {
      title: "problem solving",
      subtitle:
        "there is this thing called as proper plaanning and yahape yeh nhi hoga",
      score: 60
    },
    {
      title: "problem solving",
      subtitle:
        "there is this thing called as proper plaanning and yahape yeh nhi hoga",
      score: 55
    },
    {
      title: "problem solving",
      subtitle:
        "there is this thing called as proper plaanning and yahape yeh nhi hoga",
      score: 68
    },
    {
      title: "problem solving",
      subtitle:
        "there is this thing called as proper plaanning and yahape yeh nhi hoga",
      score: 20
    },
    {
      title: "problem solving",
      subtitle:
        "there is this thing called as proper plaanning and yahape yeh nhi hoga",
      score: 30
    },
    {
      title: "problem solving",
      subtitle:
        "there is this thing called as proper plaanning and yahape yeh nhi hoga",
      score: 47
    }
  ]
});

export default connect(mapStateToProps, undefined)(CognitivePage);
