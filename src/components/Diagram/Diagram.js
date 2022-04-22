import Chart from 'chart.js/auto';
import Button from 'react-bootstrap/Button';

import './Diagram.css';

const Diagram = () => {

    const countFigures = (figureName) => document.querySelectorAll(`.w${figureName}`).length
        + document.querySelectorAll(`.b${figureName}`).length;

    const drawChart = () => {
        const figuresChart = document.getElementById('figuresChart');

        const pawns = countFigures('p');
        const rooks = countFigures('r');
        const knights = countFigures('n');
        const bishops = countFigures('b');
        const queens = countFigures('q');
        const kings = countFigures('k');

        const context = figuresChart.getContext('2d');

        const myChart = new Chart(context, {
            type: 'bar',
            data: {
                labels: ['Pawn', 'Knight', 'Bishop', 'Rook', 'Queen', 'King'],
                datasets: [{
                    label: 'figures count',
                    data: [pawns, knights, bishops, rooks, queens, kings],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            }
        })
    }

    return (
        <div className={'chart mx-5'}>
            <div><Button onClick={drawChart} className={'mt-3'}>Draw Chart</Button></div>
            <canvas id="figuresChart" width="300px" height="300px"> </canvas>
        </div>
    );
};

export {Diagram};
