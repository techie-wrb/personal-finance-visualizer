'use client';

import { useEffect, useState } from 'react';
import TransactionForm from "@/components/TransactionForm";
import TransactionList from "@/components/TransactionList";
import CategoryPieChart from "@/components/CategoryPieChart";
import MonthlyBarChart from "@/components/MonthlyBarChart";
import SummaryCards from "@/components/SummaryCards";

export default function Home() {
  const [transactions, setTransactions] = useState([]);

  // Fetch transactions from API when component mounts
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const res = await fetch('/api/transactions');
        const data = await res.json();
        setTransactions(data);
      } catch (error) {
        console.error("Failed to fetch transactions", error);
      }
    };

    fetchTransactions();
  }, []);

  // Add new transaction to state
  const handleAddTransaction = (newTxn) => {
    setTransactions(prev => [newTxn, ...prev]);
  };

  return (
    <main className="p-6 sm:p-10 max-w-6xl mx-auto space-y-10">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-foreground">
        💸 Personal Finance Visualizer
      </h1>

      {/* Transaction Form */}
      <TransactionForm onAdd={handleAddTransaction} />

      {/* Summary Cards */}
      <SummaryCards transactions={transactions} />

      {/* Charts */}
      <div className="grid gap-6 sm:grid-cols-2">
        <CategoryPieChart transactions={transactions} />
        <MonthlyBarChart transactions={transactions} />
      </div>

      {/* Transaction List */}
      <TransactionList transactions={transactions} />
    </main>
  );
}
