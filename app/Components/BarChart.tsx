"use client"
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { ChartData }  from '../Data/ChartData'
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
      text: 'Total leaves of a month',
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

export const data = {
  labels: [
    "May,23",
    "Jun,23",
    "Jul,23",
    "Aug,23",
    "Sep,23",
    "Oct,23",
    "Nov,23",
    "Dec,23",
    "Jan,24",
    "Mar,24"
  ],
  datasets: [
    {
      label: 'Monthly Data',
      data: [
        "2000",
        "10000",
        "12000",
        "5000",
        "3400",
        "2000",
        "5000",
        "3000",
        "13000",
        "26045"
      ],
      backgroundColor: 'rgb(255, 99, 132)',
    }
  ],
};
export default  function BarChart() {
  return <Bar options={options} data={ChartData} />;
}

