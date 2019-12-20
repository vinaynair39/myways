import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const RadialChart = () => {
  const [options, setOptions] = useState({})
  const [radialSeries, setRadialSeries] = useState([]);
  const [radialOptions, setRadialOptions] = useState({})
  let radialLabel = [];

  let series = [{
    data: [{
      x: "Medical Science",
      y: 29
    }, {
      x: "Transportation and Logistics",
      y: 29
    }, {
      x: "Design",
      y: 22
    }, {
      x: "Government and Public service",
      y: 24
    }, {
      x: "Agriculture and Food',",
      y: 22
    }, {
      x: "Education and Training",
      y: 36
    }, {
      x: "Allied Health",
      y: 46
    }, {
      x: "Environment",
      y: 22
    }, {
      x: "Social Science",
      y: 43
    }, {
      x: "Law and Public Saftey",
      y: 22
    }, {
      x: "Medical Science",
      y: 29
    }, {
      x: "Transportation and Logistics",
      y: 32
    }, {
      x: "Design",
      y: 49
    }, {
      x: "Government and Public service",
      y: 26
    }, {
      x: "Agriculture and Food',",
      y: 31
    }, {
      x: "Education and Training",
      y: 7
    }, {
      x: "Allied Health",
      y: 46
    }, {
      x: "Environment",
      y: 2
    }, {
      x: "Social Science",
      y: 35
    }, {
      x: "Law and Public Saftey",
      y: 2
    },
    ]
  }]

  series[0].data.sort((a, b) => {
    return (a.y > b.y) ? -1 : 1
  }
  )

  const getTopFive = () => {
    let data = []
    for (let i = 0; i < 5; i++){
      data.push(series[0].data[i].y)
      radialLabel.push(series[0].data[i].x)
    }
    setRadialSeries(data)
  }

  useEffect(() => {
    setRadialOptions({
      options: {
        labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
        radialBar: {
          dataLabels: {
            name: {
              fontSize: '22px',
            },
            value: {
              fontSize: '16px',
            },
            total: {
              show: true,
              label: 'Total',
              formatter: function (w) {
                // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                return 249
              }
            }
          }
        }
      }

    });
    // getTopFive();
    setRadialSeries([44, 55, 67, 83])
  })




  return (
    <>
      <Chart options={radialOptions} series={radialSeries} type="radialBar" height="400" />
    </>
  );
}

export default RadialChart;

