'use client'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

function groupByMonth(transactions) {
  const map = {};
  transactions.forEach(t => {
    const month = new Date(t.date).toLocaleString('default', { month: 'short', year: 'numeric' });
    map[month] = (map[month] || 0) + t.amount;
  });
  return Object.entries(map).map(([month, total]) => ({ month, total }));
}

export default function MonthlyBarChart({ transactions }) {
  const data = groupByMonth(transactions);
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-2">Monthly Expenses</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="total" fill="#000000" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
