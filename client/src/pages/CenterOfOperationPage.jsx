import React, { useEffect } from 'react';
import CenterOfOperation from '../components/CenterOfOperation/CenterOfOperation';
import Layout from "../components/Layout/Layout";
import {useDispatch } from 'react-redux';
import { setCurrentItem } from '../actions/test';


const CenterOfOperationPage = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setCurrentItem(''))
    },[])
    return (
        <>
            <Layout>
                <CenterOfOperation/>
            </Layout>
        </>
    )
}


export default CenterOfOperationPage;
