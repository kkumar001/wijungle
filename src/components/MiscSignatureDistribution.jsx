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

const MiscSignatureDistribution = () => {

    const cins = Events.filter(event => event.event_type === "alert" && event?.alert?.category === 'Misc Attack' && event?.alert?.signature?.startsWith("ET CINS"));
    const drop = Events.filter(event => event.event_type === "alert" && event?.alert?.category === 'Misc Attack' && event?.alert?.signature?.startsWith("ET DROP"));
    const compromised = Events.filter(event => event.event_type === "alert" && event?.alert?.category === 'Misc Attack' && event?.alert?.signature?.startsWith("ET COMPROMISED"));

    const data = {
        labels: [
            'ET CINS',
            'ET DROP',
            'ET COMPROMISED'
        ],
        datasets: [
            {
                label: 'Number of Signature',
                data: [cins.length, drop.length, compromised.length], // Number of events
                backgroundColor: ['#4DAFDF', '#FDB1FF', '#E72D04'], // Solid color
                barThickness: 50
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
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false
    };

    return (
        <div style={{ height: '100%', fontFamily: 'Montserrat' }}>
            <Bar data={data} options={options} />
        </div>
    );
};

export default MiscSignatureDistribution;
