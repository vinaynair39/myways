import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { physical, informative, creative, interactive, persuasive, administrative } from '../workOrientation/WorkOrientationData'
import { useDispatch } from 'react-redux';
import { setCurrentItem } from '../../actions/test';


const TraitListChart = () => {
    const dispatch = useDispatch();
    const currentItem = (text) => {
        switch (text) {
            case 'Agreeableness':
                dispatch(setCurrentItem(physical));
                break;
            case 'Power':
                dispatch(setCurrentItem(informative));
                break;
            case 'Commitment':
                dispatch(setCurrentItem(creative));
                break;
            case 'Curosity':
                dispatch(setCurrentItem(interactive));
                break;
            case 'Individuality':
                dispatch(setCurrentItem(persuasive));
                break;
            case 'Care':
                dispatch(setCurrentItem(administrative));
                break;
            case 'Perfectionism':
                dispatch(setCurrentItem(administrative));
                break;
            default:
                break;

        }
    }

    const data = {
        labels: [
            'Agreeableness',
            'Power',
            'Enthusiasm',
            'Commitment',
            'Curosity',
            'Individuality',
            'Ambition',
            'Care',
            'Perfectionism'
        ],
        datasets: [{
            data: [10, 20, 30, 40, 50, 60, 70, 80, 90],
            backgroundColor: [
                '#6decb9',
                '#f8b195',
                '#f67280',
                '#413c69',
                '#c3f0ca',
                '#faeee7',
                '#ffc6c7',
                '#c06c84',
                '#f5f093'
            ],
            onHover: (e, item) => currentItem(item.text)
        },
        
    ],
    
    };
    
    const options = {
        legend: {
            onHover: (e, item) => currentItem(item.text)
        },

    };
    

    return (
        <>
            <div>
                <Doughnut data={data} width={500} height={200} options={options} />
            </div>
        </>
    )

}

export default TraitListChart;