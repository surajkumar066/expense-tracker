
import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses, onRemove }) {
  if (expenses.length === 0) {
    return <p className="empty-message">No expenses found</p>;
  }

  return (
    <ul className="expense-list">
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} onRemove={onRemove} />
      ))}
    </ul>
  );
}

export default ExpenseList;