"use client";

import TransactionForm from "@/components/TransactionForm";
import TransactionList from "@/components/TransactionList";
import CategoryPieChart from "@/components/CategoryPieChart";
import MonthlyBarChart from "@/components/MonthlyBarChart";
import SummaryCards from "@/components/SummaryCards";

export default function Home() {
  return (
    <main className="p-4 sm:p-8 max-w-5xl mx-auto space-y-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-center">💸 Personal Finance Visualizer</h1>

      {/* Form to add transaction */}
      <TransactionForm />

      {/* Summary Cards */}
      <SummaryCards />

      {/* Category-wise Pie Chart */}
      <CategoryPieChart />

      {/* Monthly Expenses Chart */}
      <MonthlyBarChart />

      {/* List of all transactions */}
      <TransactionList />
    </main>
  );
}
