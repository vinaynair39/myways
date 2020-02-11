import React, { useState, useEffect } from 'react';
import { history } from '../../routers/AppRouter'
import { HorizontalBar } from 'react-chartjs-2';

const StackedChart = () => {

  const data = {
    labels: [
      "Medical Science",
      "Transportation and Logistics",
      "Design",
      "Government and Public service",
      "Agriculture and Food',",
      "Education and Training",
      "Allied Health",
      "Environment",
      "Social Science",
      "Law and Public Saftey",
      "Medical Science",
      "Transportation and Logistics",
      "Design",
      "Government and Public service",
      "Agriculture and Food',",
      "Education and Training",
      "Allied Health",
      "Environment",
      "Social Science",
      "Law and Public Saftey",
    ],
    datasets: [
      {
        label: undefined,
        backgroundColor: [
          '#6decb9',
          '#f8b195',
          '#f67280',
          '#413c69',
          '#c3f0ca',
          '#faeee7',
          '#ffc6c7',
          '#c06c84',
          '#f5f093',
          '#6decb9',
          '#f8b195',
          '#f67280',
          '#413c69',
          '#c3f0ca',
          '#faeee7',
          '#ffc6c7',
          '#c06c84',
          '#f5f093',
          '#f8b195',
          '#f67280'
        ],
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [65, 59, 80, 81, 56, 55, 40, 20, 10, 32, 33, 54, 12, 66, 87, 36, 72, 5, 33, 11]  // here you have to pass  the score comming from the ml model and remove this static content
      }
    ]
  };

  const options = {
    legend: {
      display: false,
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false,
        },
      }],
      yAxes: [{
        gridLines: {
          display: false,
        },
      }],
    }
  };

  return (
    <div >
      <div className="subjectInterest__title">
        <img src="https://image.flaticon.com/icons/png/512/305/305507.png" alt="" />
        <h1>Subject Interest</h1>
      </div>
      <div className="subjectInterest__data">
        <HorizontalBar data={data}
          width={100}
          height={60}
          options={options}
          onElementsClick={elems => {
            // if required to build the URL, you can 
            // get datasetIndex and value index from an `elem`:
            const element = elems[0] && elems[0]._index;
            const route = data.labels[element]
            route && history.push('careerLibrary/' + route.toString().toLowerCase().replace(/\s+/g, '-'));
          }}
        />
      </div>
    </div >
  );

}


export default StackedChart;

