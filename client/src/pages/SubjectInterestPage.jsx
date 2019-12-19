import React from 'react';
import StackedChart from '../components/result/StackedChart';
import Layout from '../components/Layout';
import { connect } from 'react-redux';
import Link from "react-router-dom/Link";



const CareerValuesPage = (props) => {
    return (
        <>
            <Layout>
                <div className="cognitive">
                    <div className="cognitive__data">
                        <StackedChart />
                    </div>
                    <div className="cognitive__next">
                        <h4>Explore Next</h4>
                        <Link to="careerValues">
                            <img
                                src="https://image.flaticon.com/icons/png/512/2063/premium/2063465.png"
                                alt=""
                            />
                        </Link>
                        <h6 className="mt-3">Career Library</h6>
                    </div>
                </div>

            </Layout>
        </>
    )
}


export default connect(undefined, undefined)(CareerValuesPage);
