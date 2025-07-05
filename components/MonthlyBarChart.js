"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { useEffect, useState } from "react";

export default function MonthlyBarChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/transactions");
        const transactions = await res.json();

        const monthlyTotals = {};
        transactions.forEach(({ date, amount }) => {
          const parsedDate = new Date(date);
          const key = parsedDate.toLocaleString("default", {
            month: "short",
            year: "numeric",
          });

          monthlyTotals[key] = (monthlyTotals[key] || 0) + amount;
        });

        // Sort months in order
        const sortedData = Object.entries(monthlyTotals)
          .map(([month, total]) => ({ month, total }))
          .sort((a, b) => new Date(`1 ${a.month}`) - new Date(`1 ${b.month}`));

        setData(sortedData);
      } catch (error) {
        console.error("Failed to fetch monthly data", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">📊 Monthly Expenses</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="total" fill="#6366f1" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
