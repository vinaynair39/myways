import React from 'react';
import CareerLibraryItem from './CareerLibararyItem';


const CareerLibraryList = ({ img, title }) => {
    return (
        <>
            <div className="careerLibrary__list">
                <CareerLibraryItem img={'https://image.flaticon.com/icons/png/512/757/premium/757008.png'} title={'Agriculture and Food'} />
                <CareerLibraryItem img={'https://image.flaticon.com/icons/png/512/757/premium/757008.png'} title={'Allied Health'}/>
                <CareerLibraryItem img={'https://image.flaticon.com/icons/png/512/757/premium/757008.png'} title={'Architecture and Construction'}/>
                <CareerLibraryItem img={'https://image.flaticon.com/icons/png/512/757/premium/757008.png'} title={'Business Management and Administration'}/>
                <CareerLibraryItem img={'https://image.flaticon.com/icons/png/512/757/premium/757008.png'} title={'Commerce and Accounts'}/>
                <CareerLibraryItem img={'https://image.flaticon.com/icons/png/512/757/premium/757008.png'} title={'Defense and Paramilitary forces'}/>
                <CareerLibraryItem img={'https://image.flaticon.com/icons/png/512/757/premium/757008.png'} title={'Design'}/>
                <CareerLibraryItem img={'https://image.flaticon.com/icons/png/512/757/premium/757008.png'} title={'Education and Training`'}/>
                <CareerLibraryItem img={'https://image.flaticon.com/icons/png/512/757/premium/757008.png'} title={'Engineering and Technology'}/>
                <CareerLibraryItem img={'https://image.flaticon.com/icons/png/512/757/premium/757008.png'} title={'Environment, Natural Resources and Biological Sciences'}/>
                <CareerLibraryItem img={'https://image.flaticon.com/icons/png/512/757/premium/757008.png'} title={'Finance'}/>
                <CareerLibraryItem img={'https://image.flaticon.com/icons/png/512/757/premium/757008.png'} title={'Government and Public Administration'}/>

            </div>
        </>
    );
}

export default CareerLibraryList;