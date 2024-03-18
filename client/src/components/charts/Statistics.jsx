import React from "react";
import { Line } from "react-chartjs-2";
import moment from "moment";

import {
  ArcElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";
ChartJS.register(
  Tooltip,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Filler,
  ArcElement,
  Legend,
);

const Statistics = ({ data }) => {
  // Extracting labels and values from the provided data
  const labels = data.map((item) =>
    moment(item.published).format("MMMM, DD YYYY"),
  );
  const values = data.map((item) => item.intensity);

  // Chart data
  const chartData = {
    labels: labels,
    datasets: [
      {
        data: values,
        label: "Intensity",
        fill: false,
        backgroundColor: "rgba(0, 123, 255, 0.2)",
        borderColor: "rgba(0, 123, 255, 1)",
        borderWidth: 2,
      },
    ],
  };

  // Chart options
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "black",
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: {
          color: "black",
        },
      },
    },
  };

  return <Line data={chartData} options={chartOptions} />;
};

export default Statistics;
