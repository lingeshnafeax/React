import "./ExpenseItem.css";
function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>January 07th 2004</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">$89.76</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
