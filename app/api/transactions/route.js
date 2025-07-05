import { connectDB } from "@/lib/mongodb";
import Transaction from "@/models/Transaction";

export async function POST(req) {
  try {
    const body = await req.json();
    await connectDB();
    const txn = await Transaction.create(body);
    return Response.json(txn, { status: 201 });
  } catch (err) {
    console.error(err);
    return Response.json({ message: "Failed to add transaction." }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectDB();
    const transactions = await Transaction.find().sort({ date: -1 });
    return Response.json(transactions);
  } catch (err) {
    return Response.json({ message: "Failed to fetch transactions." }, { status: 500 });
  }
}
