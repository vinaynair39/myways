import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { PERFECTIONISM, CARE, AMBITION, COMMITMENT, CURIOSITY, INDIVIDUALITY, ENTHUSIASM, POWER , AGREEABLENESS} from './data'
import { useDispatch } from 'react-redux';
import { setCurrentItem } from '../../actions/test';


const TraitListChart = () => {
    const dispatch = useDispatch();
    const currentItem = (text) => {
        switch (text) {
            case 'Perfectionism':
                dispatch(setCurrentItem(PERFECTIONISM));
                break;
            case 'Care':
                dispatch(setCurrentItem(CARE));
                break;
            case 'Ambition':
                dispatch(setCurrentItem(AMBITION));
                break;
            case 'Individuality':
                dispatch(setCurrentItem(INDIVIDUALITY));
                break;
            case 'Curosity':
                dispatch(setCurrentItem(CURIOSITY));
                break;
            case 'Commitment':
                dispatch(setCurrentItem(COMMITMENT));
                break;
            case 'Enthusiasm':
                dispatch(setCurrentItem(ENTHUSIASM));
                break;
            case 'Power':
                dispatch(setCurrentItem(POWER));
                break;
            case 'Agreeableness':
                dispatch(setCurrentItem(AGREEABLENESS));
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
            data: [10, 20, 30, 40, 50, 60, 70, 80, 90],  //this data (score) will come from the ml model
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