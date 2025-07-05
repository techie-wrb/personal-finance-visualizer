'use client'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function BudgetComparisonChart({ transactions, budgets }) {
  const actualMap = {};
  transactions.forEach(t => {
    actualMap[t.category] = (actualMap[t.category] || 0) + t.amount;
  });

  const data = budgets.map(b => ({
    category: b.category,
    budget: b.amount,
    spent: actualMap[b.category] || 0,
  }));

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-2">Budget vs Actual</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="budget" fill="#36A2EB" />
          <Bar dataKey="spent" fill="#FF6384" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
