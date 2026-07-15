const CATEGORIES = ["All", "Food", "Transport", "Shopping", "Bills", "Entertainment", "Other"];

function Filters({ filters, onFilterChange }) {
  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Search expenses..."
        value={filters.search}
        onChange={(e) => onFilterChange({ ...filters, search: e.target.value })}
      />

      <select
        value={filters.category}
        onChange={(e) => onFilterChange({ ...filters, category: e.target.value })}
      >
        {CATEGORIES.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <select
        value={filters.sortBy}
        onChange={(e) => onFilterChange({ ...filters, sortBy: e.target.value })}
      >
        <option value="date-desc">Date (Newest)</option>
        <option value="date-asc">Date (Oldest)</option>
        <option value="amount-desc">Amount (High to Low)</option>
        <option value="amount-asc">Amount (Low to High)</option>
      </select>
    </div>
  );
}

export default Filters;