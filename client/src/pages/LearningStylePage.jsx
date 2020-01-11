import React, {useEffect} from 'react';
import LearningStyle from '../components/learningStyle/LearningStyle';
import Layout from '../components/Layout';
import {useDispatch } from 'react-redux';
import { setCurrentItem } from '../actions/test';

const LearningStylePage = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setCurrentItem(''))
    },[])
    
    return (
        <>
            <Layout>
                <LearningStyle/>
            </Layout>
        </>
    )
}


export default LearningStylePage;




