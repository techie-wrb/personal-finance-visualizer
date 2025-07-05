import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema({
  amount: Number,
  description: String,
  category: String,
  date: Date,
});

export default mongoose.models.Transaction || mongoose.model("Transaction", TransactionSchema);
