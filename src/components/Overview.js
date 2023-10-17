import React from 'react';
import {
    Chart,
    BarElement,
    CategoryScale,
    LinearScale,
    Legend
} from 'chart.js';
import {Bar} from 'react-chartjs-2';

Chart.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Legend
)

const Overview = () => {
    const data = {
        labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        datasets: [
            {
                data: [6,4,8,6,7,3,7,8,7.5,7,6.5,7],
                backgroundColor: [
                    '#f2efff',
                    '#f2efff',
                    '#f2efff',
                    '#f2efff',
                    '#f2efff',
                    '#f2efff',
                    '#f2efff',
                    '#5a32ea'
                ],
                borderColor: 'black',
                borderRadius: 13,
                borderSkipped: false
            }
        ]
    }
    const options = {
        scales: {
            x: {
              ticks: {
                display: true,
              },
              border:{
                display:false
              },
              grid: {
                drawBorder: false,
                display: false,
              },
            },
            y: {
              ticks: {
                display: false,
              },
              grid: {
                drawBorder: false,
                display: false,
              },
              border:{
                display:false
              }
    }},
    plugins:{
        legend: {
         display: false
        }
       },
}

  return (
    <div>       
        <div className='overview-box'>
            <h3>Overview</h3>
            <div>Quarterly<span className='bi bi-chevron-down'/></div>
        </div>
        <span>Monthly Earning</span>     
        <div className='bar-graph'>
            <Bar data = {data} options = {options} width={"500px"}/>          
        </div>
    </div>
  )
}

export default Overview
