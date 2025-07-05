import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Transaction from '@/models/Transaction';

export async function GET() {
  try {
    await connectDB();
    const transactions = await Transaction.find().sort({ date: -1 });
    return NextResponse.json(transactions);
  } catch (error) {
    console.error('GET Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    await connectDB();
    const transaction = new Transaction(body);
    await transaction.save();
    return NextResponse.json(transaction);
  } catch (error) {
    console.error('POST Error:', error);
    return NextResponse.json({ error: 'Failed to add transaction' }, { status: 500 });
  }
}

