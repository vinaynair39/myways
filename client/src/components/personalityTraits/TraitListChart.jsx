import React, { useState, useEffect } from 'react';
import TraitListItem from './TraitListItem';
import { Doughnut } from 'react-chartjs-2';

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
    }]
};

const options = {
    legend: {
        display: false,
    },
};


const TraitListChart = () => {
    return (
        <>
            <div>
                <Doughnut data={data}  width={500} height={200} />
            </div>
        </>
    )

}

export default TraitListChart;