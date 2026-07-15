import { useForm } from "../hooks/useForm";

const CATEGORIES = ["Food", "Transport", "Shopping", "Bills", "Entertainment", "Other"];

function ExpenseForm({ onAdd }) {
  const { values, handleChange, resetForm } = useForm({
    title: "",
    amount: "",
    category: CATEGORIES[0],
    date: "",
  });

  const handleSubmit = () => {
    if (values.title.trim() === "" || values.amount === "" || values.date === "") {
      alert("Please fill in title, amount, and date");
      return;
    }

    onAdd({
      title: values.title,
      amount: Number(values.amount),
      category: values.category,
      date: values.date,
    });

    resetForm();
  };

  return (
    <div className="expense-form">
      <input
        type="text"
        name="title"
        placeholder="Expense title"
        value={values.title}
        onChange={handleChange}
      />
      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={values.amount}
        onChange={handleChange}
      />
      <select name="category" value={values.category} onChange={handleChange}>
        {CATEGORIES.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <input type="date" name="date" value={values.date} onChange={handleChange} />
      <button onClick={handleSubmit}>Add Expense</button>
    </div>
  );
}

export default ExpenseForm;