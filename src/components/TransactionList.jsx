'use client'
export default function TransactionList({ transactions, onDelete }) {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-2">All Transactions</h2>
      <ul className="space-y-2">
        {transactions.map(txn => (
          <li key={txn._id} className="flex justify-between items-center p-2 bg-gray-100 rounded">
            <span>{txn.date?.slice(0, 10)} — ₹{txn.amount} — {txn.description}</span>
            <button onClick={() => onDelete(txn._id)} className="text-red-500 hover:underline">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
