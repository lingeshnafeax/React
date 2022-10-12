import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = () => {
   const [newTitle, setNewTitle] = useState("")
   const [newAmount, setNewAmount] = useState("")
   const [newDate,setNewDate]=useState("")
  //const [userInput, setUserInput] = useState({
  //  newTitle: "",
  //  newAmount: "",
  //  newDate: "",
  //});
  const titleChangeHandler = (event) => {
    //setUserInput((userInput) => {
    //  return { ...userInput, newTitle: event.target.value };
    //});
    setNewTitle(event.target.value)
    console.log(newTitle);
  };
  const amountChangeHandler = (event) => {
    //setUserInput((userInput) => {
    //  return { ...userInput, newAmount: event.target.value };
    //});
    setNewAmount(event.target.value)
    console.log(newAmount);
  };
  const dateChangeHandler = (event) => {
    //setUserInput((userInput) => {
    //  return { ...userInput, newDate: event.target.value };
    //});
    setNewDate(event.target.value)
    console.log(newDate);
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
