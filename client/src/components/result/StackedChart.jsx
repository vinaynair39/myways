import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const StackedChart = () => {
    const [options, setOptions] = useState({})
    // const [series, setSeries] = useState([]);
    let series = [{
        data: [{
            x: "Medical Science",
            y: 29
          }, {
            x: "Transportation and Logistics",
            y: 29
          },{
            x: "Design",
            y: 22
          }, {
            x: "Government and Public service",
            y: 24
          },{
            x: "Agriculture and Food',",
            y: 22
          }, {
            x: "Education and Training",
            y: 36
          },{
            x: "Allied Health",
            y: 46
          }, {
            x: "Environment",
            y: 22
          },{
            x: "Social Science",
            y: 43   
          }, {
            x: "Law and Public Saftey",
            y: 22
          },{
            x: "Medical Science",
            y: 29
          }, {
            x: "Transportation and Logistics",
            y: 32
          },{
            x: "Design",
            y: 49
          }, {
            x: "Government and Public service",
            y: 26
          },{
            x: "Agriculture and Food',",
            y: 31
          }, {
            x: "Education and Training",
            y: 7
          },{
            x: "Allied Health",
            y: 46
          }, {
            x: "Environment",
            y: 2
          },{
            x: "Social Science",
            y: 35
          }, {
            x: "Law and Public Saftey",
            y: 2
          },
        ]
    }]
    useEffect(() => {

        setOptions({
            chart: {
                height: 440,
                type: 'bar',
                stacked: true,
                toolbar: false
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                    distributed: true,
                    barHeight: '80%',
                }
            },
            colors: ['#FACC2E', '#F25C5C'],
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: 1,
                colors: ["#fff"]
            },
            grid: {
                xaxis: {
                    lines: {
                        show: true
                    }
                },
                yaxis: {
                    lines: {
                        show: false
                    }
                }
            },
            yaxis: {
                seriesName: "interest",
                min: 0,
                max: 50,
                title: {
                    // text: 'Age',
                },
                labels: {
                    show: true,
                    align: 'right',
                    minWidth: 0,
                    maxWidth: 160,
                    style: {
                        color: undefined,
                        fontSize: '13px',
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        cssClass: 'apexcharts-yaxis-label',
                    },
                    offsetX: 0,
                    offsetY: 0,
                    rotate: 0,
                    formatter: (value) => { return value },
                },
                
            },
            tooltip: {
                shared: false,
                x: {
                    formatter: function (val) {
                        return val
                    }
                },
                y: {
                    formatter: function (val) {
                        return val;
                    }
                }
            },
            xaxis: {
                title: {
                    text: 'Interest',
                    style: {
                        color: undefined,
                        fontSize: '15px',
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        cssClass: 'subjectInterest__x-axis',
                    },
                },
                labels: {
                    formatter: function (val) {
                        return val
                    }
                    
                }
            },

        }
        
        );

    

    }, [])

    series[0].data.sort((a, b) => {
        return (a.y > b.y) ? -1 : 1
     }
         )

    return (
        <>
            <div className="subjectInterest__title">
                <img src="https://image.flaticon.com/icons/png/512/305/305507.png" alt="" />
            <h1>Subject Interest</h1>
            </div>
            <Chart options={options} series={series} type="bar" height="520" />
        </>
    );
}

export default StackedChart;

