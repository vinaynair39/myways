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
                  horizontal: true,
                  distributed: true,
                }
              },
              grid: {
                xaxis: {
                    lines: {
                        show: false
                    }
                },
                yaxis: {
                    lines: {
                        show: false
                    }
                }
            },
              dataLabels: {
                enabled: false
              },
              xaxis: {
                categories: [],
              },
        });
        setSeries([{
            name: "Cognitive Intelligence",
            data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
          }])
    }, [])

    return (
        <div id="chart">
            <Chart options={options} series={series} type="bar" height="350"  />
        </div>
    );
}

export default ResultChart;

