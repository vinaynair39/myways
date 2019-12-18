import React from 'react';
import ResultList from '../components/result/ResultList';
import ResultChart from '../components/result/ResultChart';
import Layout from '../components/Layout';
import { connect } from 'react-redux';


const CareerValuesPage = (props) => {
    return (
        <>
            <Layout>
                <div className="cognitive">
                    <div className="cognitive__data"><ResultList results={props.results} /></div>
                    <div><ResultChart /></div>
                </div>
            </Layout>
        </>
    )
}

const mapStateToProps = state => ({
    results: [
        {
            title: "problem solving",
            subtitle:
                "there is this thing called as proper plaanning and yahape yeh nhi hoga",
            score: 90
        },
        {
            title: "problem solving",
            subtitle:
                "there is this thing called as proper plaanning and yahape yeh nhi hoga",
            score: 98
        },
        {
            title: "problem solving",
            subtitle:
                "there is this thing called as proper plaanning and yahape yeh nhi hoga",
            score: 78
        },
        {
            title: "problem solving",
            subtitle:
                "there is this thing called as proper plaanning and yahape yeh nhi hoga",
            score: 60
        },
        {
            title: "problem solving",
            subtitle:
                "there is this thing called as proper plaanning and yahape yeh nhi hoga",
            score: 55
        },
        {
            title: "problem solving",
            subtitle:
                "there is this thing called as proper plaanning and yahape yeh nhi hoga",
            score: 68
        },
        {
            title: "problem solving",
            subtitle:
                "there is this thing called as proper plaanning and yahape yeh nhi hoga",
            score: 20
        },
        {
            title: "problem solving",
            subtitle:
                "there is this thing called as proper plaanning and yahape yeh nhi hoga",
            score: 30
        },
        {
            title: "problem solving",
            subtitle:
                "there is this thing called as proper plaanning and yahape yeh nhi hoga",
            score: 47
        }
    ]
});

export default connect(mapStateToProps, undefined)(CareerValuesPage);
