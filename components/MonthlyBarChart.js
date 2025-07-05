"use client";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { useEffect, useState } from "react";

export default function MonthlyBarChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/transactions")
      .then((res) => res.json())
      .then((transactions) => {
        const monthly = {};
        transactions.forEach(({ date, amount }) => {
          const month = new Date(date).toLocaleString("default", { month: "short", year: "numeric" });
          monthly[month] = (monthly[month] || 0) + amount;
        });
        setData(Object.entries(monthly).map(([month, total]) => ({ month, total })));
      });
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold">Monthly Expenses</h2>
      <BarChart width={500} height={300} data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="total" fill="#8884d8" />
      </BarChart>
    </div>
  );
}


