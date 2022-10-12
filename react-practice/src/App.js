import Expense from "./components/Expenses/Expense";
import "./App.css";

const App = () => {
  const expenses = [
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
  return (
    <div>
      <h1>Let's get started!</h1>
      <Expense items={expenses} />
    </div>
  );
};

export default App;
