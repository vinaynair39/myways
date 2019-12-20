import React from 'react';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'react-router-dom/Link'


const CareerLibraryItem = ({ img, title, subtitles = ['Dairy', 'Agricultural Biotechnology', 'Plant Science', 'Food Science'] }) => {
    return (
        <>
            <div className="careerLibrary__item">
                <div><img src={img} alt="" /></div>
                <div><h3>{title}</h3></div>
            </div>
        </>
    );
}

export default CareerLibraryItem;