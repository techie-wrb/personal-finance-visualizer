'use client'
import { useEffect, useState } from 'react';
import TransactionForm from '@/components/TransactionForm';
import TransactionList from '@/components/TransactionList';
import MonthlyBarChart from '@/components/MonthlyBarChart';
import CategoryPieChart from '@/components/CategoryPieChart';
import DashboardCards from '@/components/DashboardCards';
import BudgetForm from '@/components/BudgetForm';
import BudgetComparisonChart from '@/components/BudgetComparisonChart';
import SpendingInsights from '@/components/SpendingInsights';

export default function Home() {
  const [transactions, setTransactions] = useState([]);
  const [budgets, setBudgets] = useState([]);

  const fetchTxns = async () => {
    const res = await fetch('/api/transactions');
    const data = await res.json();
    setTransactions(data);
  };

  const fetchBudgets = async () => {
    const res = await fetch('/api/budgets');
    const data = await res.json();
    setBudgets(data);
  };

  useEffect(() => {
    fetchTxns();
    fetchBudgets();
  }, []);

  const handleAddTxn = (txn) => {
    setTransactions([txn, ...transactions]);
  };

  const handleAddBudget = (b) => {
    setBudgets([b, ...budgets]);
  };

  const handleDelete = async (id) => {
    await fetch(`/api/transactions/${id}`, { method: 'DELETE' });
    setTransactions(transactions.filter(t => t._id !== id));
  };

  return (
    <main className="max-w-4xl mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold mb-6">💸 Personal Finance Visualizer</h1>
      <DashboardCards transactions={transactions} />
      <TransactionForm onAdd={handleAddTxn} />
      <TransactionList transactions={transactions} onDelete={handleDelete} />
      <BudgetForm onAdd={handleAddBudget} />
      <BudgetComparisonChart transactions={transactions} budgets={budgets} />
      <SpendingInsights transactions={transactions} budgets={budgets} />
      <MonthlyBarChart transactions={transactions} />
      <CategoryPieChart transactions={transactions} />
    </main>
  );
}
