# 💰 Personal Finance Visualizer

A powerful and responsive personal finance tracking app built with **Next.js**, **MongoDB**, **Recharts**, and **shadcn/ui**. Easily track expenses, categorize transactions, visualize data, and manage budgets — all without needing to log in.

---

## 🔗 Live Demo


👉 [https://personal-finance-visualizer-jbvdszul6-aman-bijarnias-projects.vercel.app](https://personal-finance-visualizer-jbvdszul6-aman-bijarnias-projects.vercel.app)

---

## ✨ Features

### 🚀 Stage 1: Basic Transaction Tracker
- Add, edit, and delete transactions
- View transactions in a clean table
- Monthly expenses bar chart
- Basic form validation for amount/date/description

### 🎯 Stage 2: Categories & Dashboard
- Predefined categories (e.g., Food, Travel, Shopping, Bills)
- Category-wise pie chart
- Summary dashboard with:
  - 💸 Total Expenses
  - 📊 Category Breakdown
  - 🕒 Most Recent Transactions

### 💡 Stage 3: Budgeting & Insights
- Set monthly budget per category
- Budget vs Actual Spending comparison (bar chart)
- Simple insights like over/under budget indicators

---

## 📦 Tech Stack

| Layer         | Tech                                   |
|---------------|----------------------------------------|
| Frontend      | Next.js (App Router), React            |
| Styling       | Tailwind CSS, [shadcn/ui](https://ui.shadcn.com) |
| Charts        | [Recharts](https://recharts.org/)      |
| Backend       | Next.js API routes                     |
| Database      | MongoDB Atlas                          |
| Deployment    | Vercel                                  |

---

## 🧠 Folder Structure

```
├── app/                         # App Router pages & API routes
│   ├── page.jsx                 # Main UI
│   └── api/transactions/        # Backend API routes (GET, POST)
│       └── route.js
│       └── [id]/route.js        # PUT, DELETE
├── components/                 # Reusable UI components
├── lib/mongoose.js             # MongoDB connection
├── models/Transaction.js       # Mongoose schema
├── public/                     # Static files
├── styles/                     # Tailwind setup
└── README.md                   # This file
```

---

## ⚙️ Environment Variables

Create a `.env.local` file in root and add:

```env
MONGODB_URI=your_mongodb_atlas_connection_string
```

---

## 🖥️ Local Setup

```bash
git clone git@github.com:techie-wrb/personal-finance-visualizer.git
cd personal-finance-visualizer
npm install
npm run dev
```

Visit: `http://localhost:3000`

---

## 🌍 Live Demo

🔗 [https://your-vercel-url.vercel.app](https://your-vercel-url.vercel.app)

_(replace with your actual Vercel link)_

---

## 🚫 No Login Required

This is a **single-user app**. No login or authentication is implemented .

---


## 👨‍💻 Author

**Aman Bijarnia**  
[GitHub – techie-wrb](https://github.com/techie-wrb)  

---

## 📄 License

MIT

---
