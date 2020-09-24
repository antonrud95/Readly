import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

import './activity.css';

const ActivityCard = () => {

    const [ chartData, setChartData ] = useState({});

    useEffect(() => {
        let ctx = document.querySelector('canvas').getContext("2d");
        let gradient = ctx.createLinearGradient(0, 0, 0, 450);
        gradient.addColorStop(0, 'rgba(59, 75, 214, 0.05)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0.05)');
        const chart = () => {
            setChartData({
                labels: [1, 2, 3, 4, 5, 6, 7],
                datasets: [{
                    label: 'reviews',
                    data: [1, 2, 3, 5, 6, 7],
                    backgroundColor: gradient,
                    borderWidth: 2,
                    borderColor: '#B4BDE9',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverRadius: 5,
                    pointHoverBorderWidth: 2
                }],
            })
        }
        chart();
    }, [])
    
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
                ticks: { 
                    // display: false,
                    min: 0,
                    max: 31,
                    stepSize: 1,
                    fontSize: 9
                },
                gridLines: {
                    display: false,
                    drawBorder: false
                }
            }],
            yAxes: [{
                ticks: { 
                    // display: false
                    min: 0,
                    max: 20,
                    stepSize: 5,
                    fontSize: 9
                },
                gridLines: {
                //display: false,
                    drawBorder: false
                }
            }]
        },
        elements: { 
            point: { 
                radius: 0, 
                hitRadius: 5, 
                hoverRadius: 5 
            }
        },
        legend: {
            display: false,
        },
        tooltips: {
            enabled: false,
        } 
    }
        
    return (
        <div className="line-graph">
            <Line  data={chartData} options={options} />
        </div>
    )
}

export default ActivityCard
