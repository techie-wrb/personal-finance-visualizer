'use client';

import { useEffect, useState } from "react";

export default function TransactionList() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all transactions on mount
  useEffect(() => {
    async function fetchTransactions() {
      try {
        const res = await fetch('/api/transactions');
        const data = await res.json();
        setTransactions(data);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchTransactions();
  }, []);

  if (loading) {
    return <p>Loading transactions...</p>;
  }

  if (transactions.length === 0) {
    return <p className="text-gray-500 text-sm">No transactions found.</p>;
  }

  return (
    <div>
      <h2 className="text-xl font-bold mt-10 mb-4">📄 Transactions</h2>
      <ul className="space-y-4">
        {transactions.map((txn) => (
          <li key={txn._id} className="p-4 border rounded shadow-sm bg-white dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-between">
              <span className="font-medium">{txn.description}</span>
              <span className="font-semibold text-red-500">₹{txn.amount}</span>
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {new Date(txn.date).toLocaleDateString()} | {txn.category}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
