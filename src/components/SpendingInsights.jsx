'use client'

export default function SpendingInsights({ transactions, budgets }) {
  const actualMap = {};
  transactions.forEach(t => {
    actualMap[t.category] = (actualMap[t.category] || 0) + t.amount;
  });

  const overspending = budgets.filter(b => actualMap[b.category] > b.amount);

  return (
    <div className="mt-6 bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-2">Insights</h2>
      {overspending.length === 0 ? (
        <p className="text-green-600">You're within budget for all categories 🎉</p>
      ) : (
        <ul className="text-red-600 list-disc pl-4">
          {overspending.map(o => (
            <li key={o._id}>
              Overspent on <strong>{o.category}</strong> by ₹{(actualMap[o.category] - o.amount).toFixed(2)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
