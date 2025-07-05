"use client";
import { useEffect, useState } from "react";

export default function SummaryCards() {
  const [summary, setSummary] = useState({ total: 0 });

  useEffect(() => {
    fetch("/api/transactions")
      .then((res) => res.json())
      .then((transactions) => {
        const total = transactions.reduce((acc, curr) => acc + curr.amount, 0);
        setSummary({ total });
      });
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div className="p-4 border rounded-md">
        <p className="text-sm text-gray-500">Total Expenses</p>
        <p className="text-xl font-bold">₹{summary.total}</p>
      </div>
    </div>
  );
}

