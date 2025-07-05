import { connectDB } from '@/lib/mongoose';
import Budget from '@/models/Budget';

export async function GET() {
  await connectDB();
  const budgets = await Budget.find();
  return Response.json(budgets);
}

export async function POST(req) {
  await connectDB();
  const data = await req.json();
  const created = await Budget.create(data);
  return Response.json(created);
}
