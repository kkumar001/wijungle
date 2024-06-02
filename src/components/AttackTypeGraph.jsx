import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Events } from '../utils/Data';

ChartJS.register(ArcElement, Tooltip, Legend);

const AttackTypeGraph = () => {
  const pbt = Events.filter(event => event.event_type === "alert" && event?.alert?.category === "Potentially Bad Traffic");
  const ail = Events.filter(event => event.event_type === "alert" && event?.alert?.category === "Attempted Information Leak");
  const ma = Events.filter(event => event.event_type === "alert" && event?.alert?.category === "Misc Attack");

  const data = {
    labels: ['Potentially Bad Traffic', 'Attempted Information Leak', 'Misc Attack'],
    datasets: [
      {
        label: 'Number of Attack',
        data: [pbt.length, ail.length, ma.length],
        backgroundColor: [
          '#60B7FF',
          '#FF7A7A',
          '#8F42A9',
        ],
        borderWidth: 0, // Set the border width to 0
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          color: '#ffffff', // Change the level text color here
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false
};

  return (
    <div className='h-full'>
      <Pie data={data} options={options} />
    </div>
  )
};

export default AttackTypeGraph;
