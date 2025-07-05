'use client'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const COLORS = ['#FF6384', '#36A2EB', '#FFCE56', '#8e44ad', '#2ecc71', '#e67e22', '#95a5a6'];

function groupByCategory(transactions) {
  const map = {};
  transactions.forEach(t => {
    map[t.category] = (map[t.category] || 0) + t.amount;
  });
  return Object.entries(map).map(([name, value]) => ({ name, value }));
}

export default function CategoryPieChart({ transactions }) {
  const data = groupByCategory(transactions);

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-2">Category Breakdown</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" outerRadius={100}>
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
