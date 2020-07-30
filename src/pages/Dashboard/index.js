import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import chartConfig from '../../helpers/chartConfig';
// import { useData } from '../../hooks';

const Dashboard = () => {
  const data = chartConfig(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'ehllo'],
    [65, 59, 80, 81, 56, 55, 40],
    'Requests');
  // const { resState, domState } = useData();

  // console.log('RES => ', resState);
  // console.log('DOM => ', domState);
  return (
    <div>
      <Line data={data} />
      <Bar
        data={data}
        width={100}
        height={50}
        options={{ maintainAspectRatio: true }}
      />
    </div>
  );
};

export default Dashboard;
