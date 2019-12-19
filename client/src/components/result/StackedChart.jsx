import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const StackedChart = () => {
    const [options, setOptions] = useState({})
    const [series, setSeries] = useState([]);

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
                min: -5,
                max: 5,
                title: {
                   // text: 'Age',
                },
            },
            tooltip: {
                shared: false,
                x: {
                    formatter: function(val) {
                        return val
                    }
                },
                y: {
                    formatter: function(val) {
                        return Math.abs(val) + "%"
                    }
                }
            },title: {
                text: 'Subject Interest'
            },
            xaxis: {
              categories: ['Medical Science', 'Transportation and Logistics', 'Applied arts', 'Design', 'Government and Public service', 'Agriculture and Food', 'Education and Training', 'Allied Health', 'Environment, Natural', 'Law and Public Saftey', 'Social Science', 'Physical Science', 'Performing Arts', 'Media and Communication', 'IT and software', 'Defence and paramilitary forces', 'Finance', 'Engineering and Technology', 'Business Management',' Mathematics and Data Science', 'Commerece and Accounts', 'Architecture and Construction', 'Sales and marketing', 'Travel, Tourism and Hospitality', 'Human Services', 'Manufacturing'],
              title: {
                  text: 'Percent'
              },
              labels: {
                formatter: function(val) {
                  return Math.abs(Math.round(val)) + "%"
                }
              }
            },

        });
        setSeries([{
            data: [-0.8, -1.05, -1.06, -1.18, -1.4, -2.2, -2.85, -3.7, -3.96, -4.22, -4.3, -4.4, -4.1, -4, -4.1, -3.4, -3.1, -2.8]
        }])
    }, [])

    return (
        <Chart options={options} series={series} type="bar" height="600" />
    );
}

export default StackedChart;

