import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

import './activity.css';

const ActivityCard = () => {

    const [ chartData, setChartData ] = useState({});

    useEffect(() => {
        let ctx = document.querySelector('canvas').getContext("2d");
        let gradient = ctx.createLinearGradient(0, 0, 0, 100);
        gradient.addColorStop(0, 'rgba(59, 75, 214, 0.05)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0.09)');
        const chart = () => {
            setChartData({
                labels: [1, 2, 3, 4, 5, 6, 7],
                datasets: [{
                    // label: 'reviews',
                    data: [2, 4, 15, 18, 10, 13, 2],
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
                    fontSize: 9,

                },
                gridLines: {
                    display: false,
                    drawBorder: false,
                    color: '#F0F0F0',
                    // zeroLineColor: '#F0F0F0',
                }
            }],
            yAxes: [{
                ticks: { 
                    // display: false
                    min: 0,
                    max: 20,
                    stepSize: 5,
                    fontSize: 9,
                    
                },
                gridLines: {
                // display: false,
                    drawBorder: false,
                    color: '#F0F0F0',
                    zeroLineColor: '#F0F0F0',
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
            custom: function(tooltipModel) {
                // Tooltip Element
                var tooltipEl = document.getElementById('chartjs-tooltip');

                // Create element on first render
                if (!tooltipEl) {
                    tooltipEl = document.createElement('div');
                    tooltipEl.id = 'chartjs-tooltip';
                    tooltipEl.innerHTML = '<table></table>';
                    document.body.appendChild(tooltipEl);
                }

                // Hide if no tooltip
                if (tooltipModel.opacity === 0) {
                    tooltipEl.style.opacity = 0;
                    return;
                }

                // Set caret Position
                tooltipEl.classList.remove('above', 'below', 'no-transform');
                if (tooltipModel.yAlign) {
                    tooltipEl.classList.add(tooltipModel.yAlign);
                } else {
                    tooltipEl.classList.add('no-transform');
                }

                function getBody(bodyItem) {
                    // console.log(bodyItem);
                    return bodyItem.lines;
                }

                // Set Text
                if (tooltipModel.body) {
                    var titleLines = tooltipModel.title || [];
                    var bodyLines = tooltipModel.body.map(getBody);

                    var innerHtml = '<thead>';
                    
                    bodyLines.forEach(function(body, i) {
                        // var colors = tooltipModel.labelColors[i];
                        // var style = 'background: ' + colors.backgroundColor;
                        // style += '; border-color:' + colors.borderColor;
                        // style += '; border-width: 2px';
                        // style += '; background-color: red';
                        // var span = '<span style="' + style + '"></span>';
                        // innerHtml += body + ' ' + 'reviews';
                        innerHtml += `<h6 class="text">${body} reviews</h6>`;
                        // console.log(innerHtml)
                        // innerHtml += body + 'reviews';
                    });
                    innerHtml += '</thead><tbody>';

                    titleLines.forEach(function(title) {
                        // innerHtml +=  title + ' ' + 'Sep 20';
                        innerHtml +=  `<p class="title">${title} Sep 20</p>`;
                    });
                    innerHtml += '</tbody>';

                    var tableRoot = tooltipEl.querySelector('table');
                    tableRoot.innerHTML = innerHtml;
                }
                
                
                console.log(tooltipEl);

                // `this` will be the overall tooltip
                var position = this._chart.canvas.getBoundingClientRect();

                // Display, position, and set styles for font
                tooltipEl.style.opacity = 1;
                tooltipEl.style.position = 'absolute';
                tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX - 51 + 'px';
                tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY - 66 + 'px';
                tooltipEl.style.fontFamily = tooltipModel._bodyFontFamily;
                tooltipEl.style.fontSize = tooltipModel.bodyFontSize + 'px';
                tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
                // tooltipEl.style.padding = tooltipModel.yPadding + 'px ' + tooltipModel.xPadding + 'px';
                tooltipEl.style.pointerEvents = 'none';

                console.log(tooltipModel);
            }
        }
    }
        
    return (
        <div className="line-graph">
            <Line  data={chartData} options={options} />
        </div>
    )
}

export default ActivityCard
