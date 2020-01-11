import React, {useEffect} from 'react';
import TraitList from '../components/personalityTraits/TraitList';
import Layout from '../components/Layout';
import { connect } from 'react-redux';
import {useDispatch } from 'react-redux';
import { setCurrentItem } from '../actions/test';
import Link from 'react-router-dom/Link'
import WorkOrientation from '../components/workOrientation/WorkOrientation';
import WorkOrientationBox from '../components/workOrientation/WorkOrientationBox';


const WorkOrientationPage = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setCurrentItem(''))
    },[])
    return (
        <>
            <Layout>
                <div className="workOrientation__page">
                    <div className="workOrientation__data">
                        <WorkOrientation />
                    </div>
                    <div className="workOrientation__next">
                        <WorkOrientationBox/>
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


export default WorkOrientationPage;
