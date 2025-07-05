"use client";
import { useState } from "react";

export default function TransactionForm({ onAdd }) {
  const [form, setForm] = useState({
    amount: "",
    description: "",
    date: "",
    category: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      const newTxn = await res.json();
      onAdd(newTxn); // Notify parent to update list
      setForm({ amount: "", description: "", date: "", category: "" }); // Clear form
    } else {
      alert("Failed to add transaction.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 border p-4 rounded-md shadow-sm bg-white">
      <input
        placeholder="Amount"
        type="number"
        className="w-full p-2 border rounded"
        value={form.amount}
        onChange={(e) => setForm({ ...form, amount: e.target.value })}
      />
      <input
        placeholder="Description"
        type="text"
        className="w-full p-2 border rounded"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />
      <input
        type="date"
        className="w-full p-2 border rounded"
        value={form.date}
        onChange={(e) => setForm({ ...form, date: e.target.value })}
      />
      <input
        placeholder="Category"
        type="text"
        className="w-full p-2 border rounded"
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
      />
      <button
        type="submit"
        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
      >
        Add Transaction
      </button>
    </form>
  );
}
