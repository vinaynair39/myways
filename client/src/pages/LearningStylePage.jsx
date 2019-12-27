import React from 'react';
import LearningStyle from '../components/learningStyle/LearningStyle';
import Layout from '../components/Layout';
import { connect } from 'react-redux';


const LearningStylePage = (props) => {
    return (
        <>
            <Layout>
                <LearningStyle/>
            </Layout>
        </>
    )
}


export default connect(undefined, undefined)(LearningStylePage);




