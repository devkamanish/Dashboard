import React from "react";
import { Bubble } from "react-chartjs-2";

const BubbleChart = ({ data }) => {
  // Map the data array to extract x, y, and likelihood values
  const bubbleData = {
    datasets: [
      {
        label: "Bubble Chart",
        data: data.map((item) => ({
          x: item.likelihood,
          y: item.likelihood,
          r: 10,
          likelihood: item.likelihood,
        })),
        backgroundColor: data.map(
          (item) => `rgba(255, 99, 132, ${item.likelihood / 5})`,
        ),
        borderColor: "rgba(255, 99, 132, 1)",
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: "X Axis Title",
        },
      },
      y: {
        title: {
          display: true,
          text: "Y Axis Title",
        },
      },
    },
  };

  return <Bubble data={bubbleData} options={options} />;
};

export default BubbleChart;
