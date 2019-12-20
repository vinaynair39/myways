import React from 'react';
import TraitList from '../components/personalityTraits/TraitList';
import Layout from '../components/Layout';
import { connect } from 'react-redux';
import Link from 'react-router-dom/Link'


const PersonalityTraitsPage = (props) => {
    return (
        <>
            <Layout>
                <div className="cognitive">
                    <div className="cognitive__data">
                        <TraitList />
                    </div>
                    <div className="personality__next">
                        <h4>Explore Next</h4>
                        <Link to="centerofOperation">
                            <img
                                src="https://image.flaticon.com/icons/png/512/201/201633.png"
                                alt=""
                            />
                        </Link>
                        <h6 className="mt-3">Centre of Operation</h6>
                    </div>
                </div>

            </Layout>
        </>
    )
}


export default connect(undefined, undefined)(PersonalityTraitsPage);
