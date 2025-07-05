'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";

export default function SummaryCards() {
  const [summary, setSummary] = useState({ total: 0, recent: [] });

  useEffect(() => {
    async function fetchSummary() {
      const res = await fetch("/api/transactions");
      const data = await res.json();

      const total = data.reduce((sum, t) => sum + t.amount, 0);
      const recent = data.slice(0, 3);

      setSummary({ total, recent });
    }

    fetchSummary();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <Card className="shadow-xl border-2 border-green-300">
        <CardHeader>
          <CardTitle>Total Expenses</CardTitle>
        </CardHeader>
        <CardContent className="text-xl font-bold text-green-700">
          ₹{summary.total}
        </CardContent>
      </Card>

      <Card className="shadow-xl border-2 border-blue-300">
        <CardHeader>
          <CardTitle>Recent 3 Transactions</CardTitle>
        </CardHeader>
        <CardContent className="text-sm space-y-2 text-blue-700">
          {summary.recent.map((tx, i) => (
            <div key={i}>
              • ₹{tx.amount} – {tx.description}
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="shadow-xl border-2 border-purple-300">
        <CardHeader>
          <CardTitle>Tip</CardTitle>
        </CardHeader>
        <CardContent className="text-purple-700">
          Stay under budget & track weekly to win! 🚀
        </CardContent>
      </Card>
    </div>
  );
}
