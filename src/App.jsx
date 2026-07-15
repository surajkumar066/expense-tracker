import { useState, useMemo } from "react";
import { useExpenses } from "./hooks/useExpenses";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Filters from "./components/Filters";
import Summary from "./components/Summary";
import "./App.css";

function App() {
  const { expenses, addExpense, removeExpense } = useExpenses();

  const [filters, setFilters] = useState({
    search: "",
    category: "All",
    sortBy: "date-desc",
  });

  const filteredExpenses = useMemo(() => {
    let result = [...expenses];

    if (filters.category !== "All") {
      result = result.filter((exp) => exp.category === filters.category);
    }

    if (filters.search.trim() !== "") {
      result = result.filter((exp) =>
        exp.title.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    switch (filters.sortBy) {
      case "date-asc":
        result.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      case "date-desc":
        result.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case "amount-asc":
        result.sort((a, b) => a.amount - b.amount);
        break;
      case "amount-desc":
        result.sort((a, b) => b.amount - a.amount);
        break;
      default:
        break;
    }

    return result;
  }, [expenses, filters]);

  return (
    <div className="app">
      <h1>Expense Tracker</h1>
      <ExpenseForm onAdd={addExpense} />
      <Summary expenses={expenses} />
      <Filters filters={filters} onFilterChange={setFilters} />
      <ExpenseList expenses={filteredExpenses} onRemove={removeExpense} />
    </div>
  );
}

export default App;