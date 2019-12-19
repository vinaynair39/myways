import React from 'react';
import StackedChart from '../components/result/StackedChart';
import Layout from '../components/Layout';
import { connect } from 'react-redux';


const CareerValuesPage = (props) => {
    return (
        <>
            <Layout>
                <StackedChart/>
            </Layout>
        </>
    )
}


export default connect(undefined, undefined)(CareerValuesPage);
