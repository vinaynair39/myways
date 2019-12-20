import React from 'react';
import CareerLibraryItem from './CareerLibararyItem';


const CareerLibraryList = ({ img, title }) => {
    return (
        <>
            <div className="careerLibrary__list row">
                <CareerLibraryItem img={'https://image.flaticon.com/icons/png/512/1512/1512506.png'} title={'Agriculture and Food'} id="c1"/>
               <CareerLibraryItem img={'https://image.flaticon.com/icons/png/512/619/619172.png'} title={'Allied Health'} id="c2"/>
                <CareerLibraryItem img={'https://image.flaticon.com/icons/png/512/167/167707.png'} title={'Architecture and Construction'} id="c3"/>
                 <CareerLibraryItem img={'https://image.flaticon.com/icons/png/512/2393/2393432.png'} title={'Business Management and Administration'} id="c4"/>
                <CareerLibraryItem img={'https://image.flaticon.com/icons/png/512/1728/1728865.png'} title={'Commerce and Accounts'} id="c5"/>
                <CareerLibraryItem img={'https://image.flaticon.com/icons/png/512/1693/1693523.png'} title={'Defense and Paramilitary Forces'} id="c6"/>
                <CareerLibraryItem img={'https://image.flaticon.com/icons/png/512/1077/1077650.png'} title={'Design'} id="c7"/>
                <CareerLibraryItem img={'https://image.flaticon.com/icons/png/512/167/167755.png'} title={'Education and Training`'} id="c8"/>
                <CareerLibraryItem img={'https://image.flaticon.com/icons/png/512/1275/1275570.png'} title={'Engineering and Technology'} id="c9"/>
                <CareerLibraryItem img={'https://image.flaticon.com/icons/png/512/1598/1598431.png'} title={'Environment, Natural Resources and Biological Sciences'} id="c10"/>
                <CareerLibraryItem img={'https://image.flaticon.com/icons/png/512/2393/2393852.png'} title={'Finance'} id="c11"/>
                <CareerLibraryItem img={'https://image.flaticon.com/icons/png/512/1582/1582445.png'} title={'Government and Public Administration'} id="c12"/>

            </div>
        </>
    );
}

export default CareerLibraryList;