import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';


const WorkOrientationChart = () => {
    const [options, setOptions] = useState({})
    const [series, setSeries] = useState([]);

    useEffect(() => {
        setOptions({
            chart: {
                height: 350,
                type: 'bar',
                toolbar: false
            },
            labels: ['Physical', 'Informative', 'Creative', 'Interactive', 'Persuasive', 'Administrate'],
            yaxis: {
                labels: {
                    style: {
                        fontSize: '12px'
                    }
                }
            },
            dataLabels: {
                enabled: true,
                enabledOnSeries: undefined,
                formatter: function (val, opts) {
                    return val
                },
                textAnchor: 'middle',
                offsetX: 0,
                offsetY: 0,
                style: {
                    fontSize: '20px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    colors: undefined
                },
                dropShadow: {
                    enabled: false,
                    top: 1,
                    left: 1,
                    blur: 1,
                    opacity: 0.45
                }
            }
        }
        );
        setSeries([{
            data: [10, 20, 15, 13, 11]
        }])
    }, [])

    return (
        <Chart options={options} series={series} type="radar" height="500" />
    );
}

export default WorkOrientationChart;

