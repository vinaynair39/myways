import React from 'react';
import CareerLibraryList from './CareerLibraryList'


const CareerLibrary = ({ img, title }) => {
    return (
        <>
            <div className="careerLibrary">
                <CareerLibraryList/>
            </div>
        </>
    );
}

export default CareerLibrary;