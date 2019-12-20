import React from 'react';
import CenterOfOperation from '../components/result/CenterOfOperation';
import Layout from '../components/Layout';
import { connect } from 'react-redux';


const CareerValuesPage = (props) => {
    return (
        <>
            <Layout>
                <CenterOfOperation/>
            </Layout>
        </>
    )
}


export default connect(undefined, undefined)(CareerValuesPage);
