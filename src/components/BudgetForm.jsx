'use client'
import { useState } from 'react';

const categories = ['Food', 'Transport', 'Shopping', 'Bills', 'Health', 'Travel', 'Other'];

export default function BudgetForm({ onAdd }) {
  const [form, setForm] = useState({ category: 'Food', amount: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/budgets', {
      method: 'POST',
      body: JSON.stringify({ ...form, amount: parseFloat(form.amount) }),
    });
    const newBudget = await res.json();
    onAdd(newBudget);
    setForm({ category: 'Food', amount: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded shadow mt-6">
      <select name="category" value={form.category} onChange={handleChange} className="w-full p-2 border rounded">
        {categories.map(c => <option key={c}>{c}</option>)}
      </select>
      <input name="amount" type="number" placeholder="Budget Amount" value={form.amount} onChange={handleChange} className="w-full p-2 border rounded" required />
      <button className="bg-black text-white px-4 py-2 rounded hover:opacity-80">Set Budget</button>
    </form>
  );
}
