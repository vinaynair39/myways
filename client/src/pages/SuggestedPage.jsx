import React from 'react';
import DevelopmentSuggestion from '../components/DevelopmentSuggestion.jsx';
import Layout from "../components/Layout/Layout";
import { connect } from 'react-redux';


const CareerValuesPage = (props) => {
    return (
        <>
            <Layout>
                <DevelopmentSuggestion/>
            </Layout>
        </>
    )
}


export default connect(undefined, undefined)(CareerValuesPage);
