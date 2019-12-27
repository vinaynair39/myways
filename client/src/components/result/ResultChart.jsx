import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";  


const ResultChart = () => {
    const [options, setOptions] = useState({})
    const [series, setSeries] = useState([]);

    useEffect(() => {
        setOptions({
            chart: {
                toolbar: false
            },
            plotOptions: {
                bar: {
                    barHeight: '100%',
                    distributed: true,
                    horizontal: true,
                    dataLabels: {
                        position: 'bottom'
                    },
                }
            },
            colors: [
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
            dataLabels: {
                enabled: true,
                textAnchor: 'start',
                style: {
                    colors: ['#fff']
                },
                formatter: function(val, opt) {
                    return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
                },
                offsetX: 0,
                dropShadow: {
                  enabled: true
                }
            },
            stroke: {
                width: 1,
              colors: ['#fff']
            },
            xaxis: {
                categories: ["problem solving", "problem solving", "problem solving", "problem solving", "problem solving", "problem solving", "problem solving", "problem solving", "problem solving"],
            },
            yaxis: {
                labels: {
                    show: false
                }
            },
            title: {
                text: 'Aptitude at a glance',
                align: 'center',
                floating: true
            },
            tooltip: {
                theme: 'dark',
                x: {
                    show: false
                },
                y: {
                    title: {
                        formatter: function() {
                            return ''
                        }
                    }
                }
            }
        });
        setSeries([{
            name: "Cognitive Intelligence",
            data: [90, 98, 78, 66,55,68, 20,30,47]
          }])
    }, [])

    return (
        <div id="chart">
            <Chart options={options} series={series} type="bar" height="400"  />
        </div>
    );
}

export default ResultChart;

