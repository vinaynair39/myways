import React from 'react';
import StackedChart from '../components/SubjectInterest/StackedChart';
import RadialChart from '../components/SubjectInterest/RadialChart';
import Layout from "../components/Layout/Layout";
import { connect } from 'react-redux';
import Link from 'react-router-dom/Link'



const SubjectInterestPage = (props) => {
    return (
        <>
            <Layout>
                <div className="subjectInterest">
                    <div className="">
                        <StackedChart />
                    </div>
                    <div className="cognitive__data-chart">
                        <div style={{marginTop: "15vh"}}>
                            <RadialChart />
                        </div>
                        <div className="cognitive__next">
                            <h5>Explore Next</h5>
                            <Link to="careerLibrary">
                                <img
                                    src="https://image.flaticon.com/icons/png/512/2063/premium/2063465.png"
                                    alt=""
                                />
                            </Link>
                            <h6 className="mt-3">Career Library</h6>
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )
}


export default connect(undefined, undefined)(SubjectInterestPage);
