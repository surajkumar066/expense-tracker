import { useLocalStorage } from "./useLocalStorage";

export function useExpenses() {
  const [expenses, setExpenses] = useLocalStorage("expenses", []);

  const addExpense = (expense) => {
    const newExpense = {
      id: Date.now(),
      ...expense,
    };
    setExpenses((prev) => [...prev, newExpense]);
  };

  const updateExpense = (id, updatedFields) => {
    setExpenses((prev) =>
      prev.map((exp) => (exp.id === id ? { ...exp, ...updatedFields } : exp))
    );
  };

  const removeExpense = (id) => {
    setExpenses((prev) => prev.filter((exp) => exp.id !== id));
  };

  return { expenses, addExpense, updateExpense, removeExpense };
}