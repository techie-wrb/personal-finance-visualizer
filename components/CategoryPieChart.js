k"use client";

import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { useEffect, useState } from "react";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#FF6384", "#36A2EB"];

export default function CategoryPieChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/transactions");
        const transactions = await res.json();

        const categoryMap = {};
        transactions.forEach(({ category, amount }) => {
          categoryMap[category] = (categoryMap[category] || 0) + amount;
        });

        const chartData = Object.entries(categoryMap).map(([name, value]) => ({
          name,
          value,
        }));

        setData(chartData);
      } catch (err) {
        console.error("Failed to load category data:", err);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">📊 Expenses by Category</h2>
      {data.length === 0 ? (
        <p className="text-gray-500">No category data available.</p>
      ) : (
        <PieChart width={350} height={300}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      )}
    </div>
  );
}

