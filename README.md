# Personal Expense Tracker (Custom Hooks + LocalStorage)

A React expense tracker built around custom hooks to separate business logic from UI.

## Features

- Add expenses with title, amount, category, and date
- View total spending and this month's spending
- Filter by category, search by title
- Sort by date or amount (ascending/descending)
- Delete expenses
- Data persists across page reloads via localStorage

## Tech Stack

- React (Vite)
- Custom Hooks
- Plain CSS

## Project Structure

```
src/
  hooks/
    useLocalStorage.js   -> Generic hook to sync any state with localStorage
    useForm.js             -> Generic form state + handleChange hook
    useExpenses.js           -> CRUD logic for expenses (uses useLocalStorage internally)
  components/
    ExpenseForm.jsx           -> Form to add a new expense (uses useForm)
    ExpenseList.jsx             -> Renders list of ExpenseItem
    ExpenseItem.jsx               -> Single expense row
    Filters.jsx                     -> Search, category filter, sort dropdown
    Summary.jsx                       -> Total + monthly spending
  App.jsx
  App.css
```

## Custom Hooks Explained

- **useLocalStorage(key, initialValue)** — a generic hook that behaves like `useState`, but automatically reads from and writes to `localStorage`. Reusable for any piece of state that needs to persist.
- **useForm(initialValues)** — manages form field state and a single `handleChange` function shared across all inputs (using the `name` attribute to know which field to update).
- **useExpenses()** — encapsulates all expense CRUD operations (add/update/remove) and uses `useLocalStorage` under the hood, so components never touch localStorage directly.

## How to Run Locally

```bash
npm install
npm run dev
```

## Live Link
[deploy karne ke baad yahan link daalna]