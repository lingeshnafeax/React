import ExpenseItem from "./components/ExpenseItem";
import "./App.css";

function App() {
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
    <div className="App">
      <h1>Let's get started!</h1>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
