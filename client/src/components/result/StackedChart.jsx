import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import { history } from '../../routers/AppRouter'
import { HorizontalBar } from 'react-chartjs-2';
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const StackedChart = () => {
  //   let series = [{
  //     data: [{
  //       x: "Medical Science",
  //       y: 29
  //     }, {
  //       x: "Transportation and Logistics",
  //       y: 29
  //     }, {
  //       x: "Design",
  //       y: 22
  //     }, {
  //       x: "Government and Public service",
  //       y: 24
  //     }, {
  //       x: "Agriculture and Food',",
  //       y: 22
  //     }, {
  //       x: "Education and Training",
  //       y: 36
  //     }, {
  //       x: "Allied Health",
  //       y: 46
  //     }, {
  //       x: "Environment",
  //       y: 22
  //     }, {
  //       x: "Social Science",
  //       y: 43
  //     }, {
  //       x: "Law and Public Saftey",
  //       y: 22
  //     }, {
  //       x: "Medical Science",
  //       y: 29
  //     }, {
  //       x: "Transportation and Logistics",
  //       y: 32
  //     }, {
  //       x: "Design",
  //       y: 49
  //     }, {
  //       x: "Government and Public service",
  //       y: 26
  //     }, {
  //       x: "Agriculture and Food',",
  //       y: 31
  //     }, {
  //       x: "Education and Training",
  //       y: 7
  //     }, {
  //       x: "Allied Health",
  //       y: 46
  //     }, {
  //       x: "Environment",
  //       y: 2
  //     }, {
  //       x: "Social Science",
  //       y: 35
  //     }, {
  //       x: "Law and Public Saftey",
  //       y: 2
  //     },
  //     ]
  //   }]


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
        data: [65, 59, 80, 81, 56, 55, 40, 20, 10, 32, 33, 54, 12, 66, 87, 36, 72, 5, 33, 11]
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
  //   useEffect(() => {

  //     setOptions({
  //       chart: {
  //         height: 440,
  //         type: 'bar',
  //         stacked: true,
  //         toolbar: false
  //       },
  //       plotOptions: {
  //         bar: {
  //           horizontal: true,
  //           distributed: true,
  //           barHeight: '80%',
  //         }
  //       },
  //       colors: ['#FACC2E', '#F25C5C'],
  //       dataLabels: {
  //         enabled: false
  //       },
  //       stroke: {
  //         width: 1,
  //         colors: ["#fff"]
  //       },
  //       grid: {
  //         xaxis: {
  //           lines: {
  //             show: true
  //           }
  //         },
  //         yaxis: {
  //           lines: {
  //             show: false
  //           }
  //         }
  //       },
  //       yaxis: {
  //         seriesName: "interest",
  //         min: 0,
  //         max: 50,
  //         title: {
  //           // text: 'Age',
  //         },
  //         labels: {
  //           show: true,
  //           align: 'right',
  //           minWidth: 0,
  //           maxWidth: 160,
  //           style: {
  //             color: undefined,
  //             fontSize: '13px',
  //             fontFamily: 'Helvetica, Arial, sans-serif',
  //             cssClass: 'apexcharts-yaxis-label',
  //           },
  //           offsetX: 0,
  //           offsetY: 0,
  //           rotate: 0,
  //           formatter: (value) => { return value },
  //         },

  //       },
  //       tooltip: {
  //         shared: false,
  //         x: {
  //           formatter: function (val) {
  //             return val
  //           }
  //         },
  //         y: {
  //           formatter: function (val) {
  //             return val;
  //           }
  //         }
  //       },
  //       xaxis: {
  //         title: {
  //           text: 'Interest',
  //           style: {
  //             color: undefined,
  //             fontSize: '15px',
  //             fontFamily: 'Helvetica, Arial, sans-serif',
  //             cssClass: 'subjectInterest__x-axis',
  //           },
  //         },
  //         labels: {
  //           formatter: function (val) {
  //             return val
  //           }

  //         }
  //       },

  //     }

  //     );

  //   }, [])

  //   series[0].data.sort((a, b) => {
  //     return (a.y > b.y) ? -1 : 1
  //   }
  //   )


  //   return (
  //     <>
  //       <div className="subjectInterest__title">
  //         <img src="https://image.flaticon.com/icons/png/512/305/305507.png" alt="" />
  //         <h1>Subject Interest</h1>
  //       </div>
  //       <Chart options={options} series={series} type="bar" height="600" />
  //     </>
  //   );
  // }

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

