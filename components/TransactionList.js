"use client";
import { useEffect, useState } from "react";

export default function TransactionList() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("/api/transactions")
      .then((res) => res.json())
      .then(setTransactions);
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold">Transactions</h2>
      <ul className="space-y-2">
        {transactions.map((t) => (
          <li key={t._id} className="border p-2 rounded">
            ₹{t.amount} - {t.description} ({t.category}) on {new Date(t.date).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
}
