"use client";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { useEffect, useState } from "react";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#FF6384", "#36A2EB"];

export default function CategoryPieChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/transactions")
      .then((res) => res.json())
      .then((transactions) => {
        const categoryMap = {};
        transactions.forEach(({ category, amount }) => {
          categoryMap[category] = (categoryMap[category] || 0) + amount;
        });
        const chartData = Object.entries(categoryMap).map(([name, value]) => ({ name, value }));
        setData(chartData);
      });
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold">Expenses by Category</h2>
      <PieChart width={300} height={300}>
        <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
}
