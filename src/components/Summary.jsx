function Summary({ expenses }) {
  const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  const now = new Date();
  const thisMonthTotal = expenses
    .filter((exp) => {
      const expDate = new Date(exp.date);
      return (
        expDate.getMonth() === now.getMonth() &&
        expDate.getFullYear() === now.getFullYear()
      );
    })
    .reduce((sum, exp) => sum + exp.amount, 0);

  return (
    <div className="summary">
      <div>
        <span className="summary-label">Total Spent</span>
        <span className="summary-value">₹{total.toFixed(2)}</span>
      </div>
      <div>
        <span className="summary-label">This Month</span>
        <span className="summary-value">₹{thisMonthTotal.toFixed(2)}</span>
      </div>
    </div>
  );
}

export default Summary;