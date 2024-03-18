import React from "react";
import { Line } from "react-chartjs-2";

const AreaChart = ({ data }) => {
  // Extract country names from the dataset
  const countries = data.map((entry) => entry.country);

  // Extract values from the dataset
  const values = data.map((entry) => entry.value);

  // Construct chart data
  const chartData = {
    labels: countries,
    datasets: [
      {
        label: "Area Chart",
        data: values,
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 2,
      },
    ],
  };

  // Chart options
  const options = {
    scales: {
      x: {
        title: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
      y: {
        title: {
          display: true,
          text: "Value",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default AreaChart;
