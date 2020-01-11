import React from 'react';
import CareerLibraryList from '../components/careerLibrary/CareerLibraryList';
import Link from "react-router-dom/Link";
import Layout from "../components/Layout";



const CareerLibraryPage = () => {
    return (
        <>
            <Layout>
                <div className="careerLibrary animated fadeIn">
                    <div className="careerLibrary__data">
                        <CareerLibraryList />
                    </div>
                        <div className="careerLibrary__next">
                            <h4>Explore Next</h4>
                            <Link to="careerValues">
                                <img
                                    src="https://image.flaticon.com/icons/png/512/2322/2322887.png"
                                    alt=""
                                />
                            </Link>
                            <h6>Career Values</h6>
                        </div>
=                </div>
            </Layout>
        </>
    )
}

export default CareerLibraryPage;