function ExpenseItem({ expense, onRemove }) {
  return (
    <li className="expense-item">
      <div className="expense-info">
        <span className="expense-title">{expense.title}</span>
        <span className="expense-meta">
          {expense.category} • {expense.date}
        </span>
      </div>
      <span className="expense-amount">₹{expense.amount.toFixed(2)}</span>
      <button className="remove-btn" onClick={() => onRemove(expense.id)}>
        Delete
      </button>
    </li>
  );
}

export default ExpenseItem;