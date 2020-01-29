import React from "react";
import ResultList from "../components/result/ResultList";
import ResultChart from "../components/result/ResultChart";
import Layout from "../components/Layout/Layout";
import { connect } from "react-redux";
import Link from "react-router-dom/Link";

const CognitivePage = props => {
  return (
    <>
      <Layout>
        <div className="cognitive">
          <div className="cognitive__data animated fadeIn">
            <ResultList results={props.results} />
          </div>
          <div className="cognitive__next">
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
      name: "Problem solving",
      description:
        "The ability to apply general rules to specific problems to produce answers that make sense.",
      score: 90
    },
    {
      name: "Sequential Detection",
      description:
        "The ability to identify or detect a known pattern (a figure, object, word, or sound) that is hidden in other distracting material.",
      score: 98,
      importance: 'average'
    },
    {
      name: "Interpretation",
      description:
        "The ability to combine pieces of information to form general rules or conclusions (includes finding a relationship among seemingly unrelated events).",
      score: 78,
      importance: 'high'

    },
    {
      name: "Arrangement",
      description:
        "The ability to arrange things or actions in a certain order or pattern according to a specific rule or set of rules (e.g., patterns of numbers, letters, words, pictures, mathematical operations).",
      score: 60,
      importance: 'low'

    },
    {
      name: "Memory",
      description:
        "The ability to remember information such as words, numbers, pictures, and procedures.",
      score: 55,
      importance: 'low'
    },
    {
      name: "Categorization",
      description:
        "The ability to generate or use different sets of rules for combining or grouping things in different ways.",
      score: 68,
      importance: 'high'

    },
    {
      name: "Language Usage",
      description:
        "The ability to read and understand information and ideas presented in writing.",
      score: 20
    },
    {
      name: "Speed And Accuracy",
      description:
        "The ability to quickly and accurately compare similarities and differences among sets of letters, numbers, objects, pictures, or patterns. The things to be compared may be presented at the same time or one after the other. This ability also includes comparing a presented object with a remembered object.",
      score: 30
    },
    {
      name: "Science",
      description:
        "The ability to imagine how something will look after it is moved around or when its parts are moved or rearranged.",
      score: 47
    }
  ]
});

export default connect(mapStateToProps, undefined)(CognitivePage);
