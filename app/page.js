'use client';

import TransactionForm from "@/components/TransactionForm";
import TransactionList from "@/components/TransactionList";
import CategoryPieChart from "@/components/CategoryPieChart";
import MonthlyBarChart from "@/components/MonthlyBarChart";
import SummaryCards from "@/components/SummaryCards";

export default function Home() {
  return (
    <main className="p-6 sm:p-10 max-w-6xl mx-auto space-y-10">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-foreground">
        💸 Personal Finance Visualizer
      </h1>

      {/* Transaction Form */}
      <TransactionForm />

      {/* Summary Cards */}
      <SummaryCards />

      {/* Charts */}
      <div className="grid gap-6 sm:grid-cols-2">
        <CategoryPieChart />
        <MonthlyBarChart />
      </div>

      {/* Transaction List */}
      <TransactionList />
    </main>
  );
}
