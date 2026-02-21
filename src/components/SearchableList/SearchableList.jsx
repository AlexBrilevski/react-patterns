import { useState } from "react";

export default function SearchableList({ items, itemKeyFn, children }) {
  const [searchTerm, setSearchTerm] = useState('');

  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  const searchResults = items.filter(item =>
    JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="searchable-list">
      <input onChange={handleChange} type="search" placeholder="Search" />
      <ul>
        {searchResults.map((item) => (
          <li key={itemKeyFn(item)}>
            {children(item)}
          </li>
        ))}
      </ul>
    </div>
  );
}
