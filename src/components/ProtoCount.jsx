import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Events } from '../utils/Data';

ChartJS.register(ArcElement, Tooltip, Legend);

const ProtoCount = () => {

  const tcp = Events.filter(event => event.proto === "TCP");
  const udp = Events.filter(event => event.proto === "UDP");

  const data = {
    labels: ['TCP', 'UDP'],
    datasets: [
      {
        label: 'Number of Protocols',
        data: [tcp.length, udp.length],
        backgroundColor: [
          '#F5AC6E',
          '#00B929',
        ],
        borderWidth: 0,
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
        <Doughnut data={data} options={options} />
    </div>
  );
};

export default ProtoCount;
