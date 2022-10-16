import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [newTitle, setNewTitle] = useState(""); //setting state variable for three values
  const [newAmount, setNewAmount] = useState("");
  const [newDate, setNewDate] = useState("");
  //const [userInput, setUserInput] = useState({
  //  newTitle: "",
  //  newAmount: "",
  //  newDate: "",
  //});
  const titleChangeHandler = (event) => {
    //setUserInput((userInput) => {
    //  return { ...userInput, newTitle: event.target.value };
    //});
    setNewTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    //setUserInput((userInput) => {
    //  return { ...userInput, newAmount: event.target.value };
    //});
    setNewAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    //setUserInput((userInput) => {
    //  return { ...userInput, newDate: event.target.value };
    //});
    setNewDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    //console.log(event);
    const expenseData = {
      title: newTitle,
      amount: newAmount,
      date: new Date(newDate),
    };
    props.SaveExpenseData(expenseData);
    //console.log(expenseData);
    setNewTitle("");
    setNewAmount("");
    setNewDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={newTitle}
            onChange={titleChangeHandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={newAmount} //two way binding
            onChange={amountChangeHandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={newDate}
            onChange={dateChangeHandler}
            required
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
