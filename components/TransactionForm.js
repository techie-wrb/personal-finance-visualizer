"use client";
import { useState } from "react";

export default function TransactionForm() {
  const [form, setForm] = useState({ amount: "", description: "", date: "", category: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("/api/transactions", {
      method: "POST",
      body: JSON.stringify(form),
    });
    setForm({ amount: "", description: "", date: "", category: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 border p-4 rounded-md">
      <input placeholder="Amount" type="number" value={form.amount} onChange={(e) => setForm({ ...form, amount: e.target.value })} />
      <input placeholder="Description" type="text" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
      <input placeholder="Date" type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
      <input placeholder="Category" type="text" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} />
      <button type="submit">Add Transaction</button>
    </form>
  );
}
