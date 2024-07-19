// バックエンドのAPIからデータを取得し、
// react-chartjs-2を使用してデータをグラフとして表示

import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const ChartComponent = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    axios.get('http://localhost:3306/api/data')
      .then(response => {
        const data = response.data;
        const chartData = {
          labels: data.map(item => item.date),
          datasets: [
            {
              label: 'My Data',
              data: data.map(item => item.value),
              backgroundColor: 'rgba(75,192,192,0.4)',
              borderColor: 'rgba(75,192,192,1)',
              borderWidth: 1,
            },
          ],
        };
        setChartData(chartData);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  return (
    <div>
      <h2>My Chart</h2>
      <Line data={chartData} />
    </div>
  );
};

export default ChartComponent;
