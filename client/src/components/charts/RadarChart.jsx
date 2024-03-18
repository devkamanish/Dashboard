import React from "react";
import { Radar } from "react-chartjs-2";

const RadarChart = () => {
  const radarData = {
    labels: ["A", "B", "C", "D", "E"],
    datasets: [
      {
        label: "Radar Chart",
        data: [20, 40, 60, 80, 100],
        fill: true,
        backgroundColor: "rgba(255, 99, 132, 0.2)", // Adjust the background color
        borderColor: "rgba(255, 99, 132, 1)", // Adjust the border color
        pointBackgroundColor: "rgba(255, 99, 132, 1)", // Adjust the point background color
        pointBorderColor: "#fff", // Adjust the point border color
        pointHoverBackgroundColor: "#fff", // Adjust the point hover background color
        pointHoverBorderColor: "rgba(255, 99, 132, 1)", // Adjust the point hover border color
      },
    ],
  };

  const options = {
    scales: {
      r: {
        angleLines: {
          display: true,
        },
        suggestedMin: 0,
        suggestedMax: 100,
        title: {
          display: true,
          text: "Axis Title",
        },
      },
    },
  };

  return <Radar data={radarData} options={options} />;
};

export default RadarChart;
