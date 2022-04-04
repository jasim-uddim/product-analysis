import React from "react";
import "./MyCharts.css";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const MyCharts = () => {
  const data = [
    {
      month: "Mar",
      investment: 100000,
      sell: 241,
      revenue: 10401,
    },
    {
      month: "Apr",
      investment: 200000,
      sell: 423,
      revenue: 24500,
    },
    {
      month: "May",
      investment: 500000,
      sell: 726,
      revenue: 67010,
    },
    {
      month: "Jun",
      investment: 500000,
      sell: 529,
      revenue: 40405,
    },
    {
      month: "Jul",
      investment: 600000,
      sell: 601,
      revenue: 50900,
    },
    {
      month: "Aug",
      investment: 700000,
      sell: 670,
      revenue: 61000,
    },
  ];

  return (
    <div className="main-container">
      <h1>Revenue Chart</h1>
      <div className="chart-container">
        <LineChart width={600} height={400} data={data}>
          <Line type="monotone" dataKey="sell" stroke="#8884d8"></Line>
          <CartesianGrid stroke="#ccc"></CartesianGrid>
          <XAxis dataKey="month"></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
        </LineChart>

        <AreaChart width={600} height={400} data={data}>
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#8884d8"
            fill="#8884d8"
          />
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="investment" />
          <YAxis />
          <Tooltip />
        </AreaChart>
      </div>
    </div>
  );
};

export default MyCharts;
