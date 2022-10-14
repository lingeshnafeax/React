import { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import "./Expense.css";
import ExpenseChart from "./ExpenseChart";
import ExpenseList from "./ExpenseList";

const Expense = (props) => {
  const expenses = props.items;
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpense = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        ></ExpenseFilter>
        <ExpenseChart expenses={filteredExpense}></ExpenseChart>
        <ExpenseList items={filteredExpense}></ExpenseList>
      </Card>
    </div>
  );
};

export default Expense;
