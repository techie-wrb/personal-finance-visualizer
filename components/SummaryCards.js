'use client';
import { useEffect, useState } from 'react';

export default function SummaryCards() {
  const [summary, setSummary] = useState({ total: 0, recent: [] });

  useEffect(() => {
    async function fetchSummary() {
      const res = await fetch('/api/transactions');
      const data = await res.json();
      const total = data.reduce((sum, t) => sum + t.amount, 0);
      const recent = data.slice(0, 3);
      setSummary({ total, recent });
    }
    fetchSummary();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
      <div className="bg-white p-4 rounded-lg shadow">
        <p className="text-sm text-gray-500">Total Expenses</p>
        <p className="mt-2 text-2xl font-bold">₹{summary.total}</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <p className="text-sm text-gray-500">Recent 3 Transactions</p>
        <ul className="mt-2 text-sm space-y-1">
          {summary.recent.map((tx, i) => (
            <li key={i}>• ₹{tx.amount} — {tx.description}</li>
          ))}
        </ul>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <p className="text-sm text-gray-500">Tip</p>
        <p className="mt-2 text-sm">Stay under budget & track weekly to win! 🚀</p>
      </div>
    </div>
  );
}

