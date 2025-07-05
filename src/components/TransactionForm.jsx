'use client'
import { useState } from 'react';

const categories = ['Food', 'Transport', 'Shopping', 'Bills', 'Health', 'Travel', 'Other'];

export default function TransactionForm({ onAdd }) {
  const [form, setForm] = useState({ amount: '', description: '', date: '', category: 'Food' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/transactions', {
      method: 'POST',
      body: JSON.stringify({ ...form, amount: parseFloat(form.amount) }),
    });
    const newTxn = await res.json();
    onAdd(newTxn);
    setForm({ amount: '', description: '', date: '', category: 'Food' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white rounded shadow">
      <input name="amount" type="number" placeholder="Amount" value={form.amount} onChange={handleChange} required className="w-full p-2 border rounded" />
      <input name="description" type="text" placeholder="Description" value={form.description} onChange={handleChange} required className="w-full p-2 border rounded" />
      <input name="date" type="date" value={form.date} onChange={handleChange} required className="w-full p-2 border rounded" />
      
      <select name="category" value={form.category} onChange={handleChange} className="w-full p-2 border rounded">
        {categories.map(c => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>

      <button type="submit" className="bg-black text-white px-4 py-2 rounded hover:opacity-80">Add Transaction</button>
    </form>
  );
}
