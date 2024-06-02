import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Events } from '../utils/Data';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const EventTypesGraph = () => {

    const alertArray = Events.filter(event => event.event_type === "alert");
    const dnsArray = Events.filter(event => event.event_type === "dns");
    const httpArray = Events.filter(event => event.event_type === "http");
    const fileinfoArray = Events.filter(event => event.event_type === "fileinfo");
    const sshArray = Events.filter(event => event.event_type === "ssh");

    const data = {
        labels: ['Alert', 'DNS', 'HTTP', 'Fileinfo', 'SSH'], // Names of events
        datasets: [
            {
                label: 'Number of Events',
                data: [alertArray.length, dnsArray.length, httpArray.length, fileinfoArray.length, sshArray.length], // Number of events
                backgroundColor: ['#E323FF', '#8A19F9', '#7517F8', '#4DFFDF', '#4DA1FF'], // Solid color
                barThickness: 30
            }
        ]
    };

    const options = {
        scales: {
            x: {
                grid: {
                    display: false, // No squares on background
                },
                ticks: {
                    color: '#ffffff' // White text for dark theme
                }
            },
            y: {
                grid: {
                    display: false, // No squares on background
                },
                ticks: {
                    color: '#868B93' // White text for dark theme
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: '#ffffff' // White text for dark theme
                }
            }
        },
        responsive: true,
        maintainAspectRatio: false
    };

    return (
        <div style={{ height: '100%', fontFamily: 'Montserrat' }}>
            <Bar data={data} options={options} />
        </div>
    );
};

export default EventTypesGraph;
