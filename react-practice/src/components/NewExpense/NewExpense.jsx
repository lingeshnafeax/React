import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const saveExpenseDataHandler = (newExpenseData) => {
    const expenseData = {
      id: Math.ceil(Math.random() * 5).toString(),
      ...newExpenseData,
    };
    props.addExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm SaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
    </div>
  );
};
export default NewExpense;
