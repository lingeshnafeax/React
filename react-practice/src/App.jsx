import { useState } from "react";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";
import "./App.css";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 790,
    date: new Date(2022, 1, 23),
  },
  {
    id: "e2",
    title: "Movies",
    amount: 500,
    date: new Date(2022, 4, 28),
  },
  {
    id: "e3",
    title: "WiFi",
    amount: 750,
    date: new Date(2022, 1, 12),
  },
  {
    id: "e4",
    title: "Pocket Money",
    amount: 1000,
    date: new Date(2022, 3, 16),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const expenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense,...prevExpense];
    });
  };

  return (
    <div>
      <NewExpense addExpense={expenseHandler} />
      <Expense items={expenses} />
    </div>
  );
};

export default App;
