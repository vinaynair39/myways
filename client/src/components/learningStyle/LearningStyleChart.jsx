import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';


const LearningStyleChart = () => {
    const [options, setOptions] = useState({})
    const [series, setSeries] = useState([]);

    useEffect(() => {
        setOptions({
            chart: {
                height: 350,
                type: 'bar',
                toolbar: false
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        position: 'top', // top, center, bottom
                    },
                    distributed: true,
                }
            },
            colors: ['#6decb9',
            '#f8b195',
            '#f67280',
            '#413c69',],
            dataLabels: {
                enabled: true,
                formatter: function (val) {
                    return val + "%";
                },
                offsetY: -20,
                style: {
                    fontSize: '12px',
                    colors: ["#304758"]
                }
            },
            xaxis: {
                categories: ["Visual", "Audio", "Read/Write", "Kinesthetic/Touch"],
                position: 'top',
                labels: {
                    offsetY: -18,
                    style: {
                        fontSize: '20px',
                        colors: ["#304758"]
                    }

                },
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                },
                crosshairs: {
                    fill: {
                        type: 'gradient',
                        gradient: {
                            colorFrom: '#D8E3F0',
                            colorTo: '#BED1E6',
                            stops: [0, 100],
                            opacityFrom: 0.4,
                            opacityTo: 0.5,
                        }
                    }
                },
                tooltip: {
                    enabled: true,
                    offsetY: -35,

                }
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
            fill: {
                gradient: {
                    shade: 'light',
                    type: "horizontal",
                    shadeIntensity: 0.25,
                    gradientToColors: undefined,
                    inverseColors: true,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [50, 0, 100, 100]
                },
            },
            yaxis: {
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false,
                },
                labels: {
                    show: false,
                    formatter: function (val) {
                        return val + "%";
                    }
                }

            },
        }
);
        setSeries([{
            name: 'Capacity',
            data: [70, 10, 7, 13] // here you have to pass  the score comming from the ml model and remove this static content
        }])
    }, [])

    return (
        <Chart options={options} series={series} type="bar" height="300" />
    );
}

export default LearningStyleChart;

