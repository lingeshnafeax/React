import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";
const ExpenseList = (props) => {
  let listLenght = props.items.length;
  if (listLenght === 0) {
    return <h2 className="expenses-list__fallback">No Expense Found</h2>;
  } else {
    return (
      <ul className="expenses-list">
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          ></ExpenseItem>
        ))}
      </ul>
    );
  }
};

export default ExpenseList;
