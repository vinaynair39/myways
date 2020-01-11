import React, {useEffect} from 'react';
import TraitList from '../components/personalityTraits/TraitList';
import Layout from '../components/Layout';
import { connect } from 'react-redux';
import Link from 'react-router-dom/Link'
import TraitBox from '../components/personalityTraits/TraitBox';
import {useDispatch } from 'react-redux';
import { setCurrentItem } from '../actions/test';


const PersonalityTraitsPage = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setCurrentItem(''))
    },[])
    return (
        <>
            <Layout>
                <div className="cognitive">
                    <div className="cognitive__data">
                        <TraitList />
                    </div>
                    <div className="traits__next">
                        <TraitBox />
                        <div>
                            <h5>Explore Next</h5>
                            <Link to="centerofOperation">
                                <img
                                    src="https://image.flaticon.com/icons/png/512/201/201633.png"
                                    alt=""
                                />
                            </Link>
                            <h6 className="mt-3">Centre of Operation</h6></div>
                    </div>
                </div>

            </Layout>
        </>
    )
}


export default connect(undefined, undefined)(PersonalityTraitsPage);
