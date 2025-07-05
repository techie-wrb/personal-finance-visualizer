'use client'

export default function DashboardCards({ transactions }) {
  const total = transactions.reduce((sum, t) => sum + t.amount, 0);
  const recent = transactions.slice(0, 3);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
      <div className="bg-white p-4 shadow rounded">
        <h3 className="text-sm text-gray-500">Total Spent</h3>
        <p className="text-xl font-bold">₹{total.toFixed(2)}</p>
      </div>
      <div className="bg-white p-4 shadow rounded">
        <h3 className="text-sm text-gray-500">Most Recent</h3>
        <ul className="text-sm">
          {recent.map(t => (
            <li key={t._id}>{t.description} — ₹{t.amount}</li>
          ))}
        </ul>
      </div>
      <div className="bg-white p-4 shadow rounded">
        <h3 className="text-sm text-gray-500">Categories</h3>
        <p>{[...new Set(transactions.map(t => t.category))].join(', ')}</p>
      </div>
    </div>
  );
}
