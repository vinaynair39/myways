import React from 'react';
import TraitList from '../components/personalityTraits/TraitList';
import Layout from '../components/Layout';
import { connect } from 'react-redux';
import Link from 'react-router-dom/Link'
import WorkOrientation from '../components/workOrientation/WorkOrientation';


const WorkOrientationPage = (props) => {
    return (
        <>
            <Layout>
                <div className="workOrientation__page">
                    <div className="workOrientation__data">
                        <WorkOrientation />
                    </div>
                    <div className="workOrientation__next">
                        <div>
                            <h5>Explore Next</h5>
                            <Link to="personalityTraits">
                                <img
                                    src="https://image.flaticon.com/icons/png/512/1465/1465419.png"
                                    alt=""
                                />
                            </Link>
                            <h5>Personality Traits</h5>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}


export default connect(undefined, undefined)(WorkOrientationPage);
