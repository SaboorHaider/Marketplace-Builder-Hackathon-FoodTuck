import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>('');

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query); // Passing query to parent component if needed
    }
  };

  return (
    <div className="w-full p-1">
      <div className="flex items-start border rounded-md p-2 w-full max-w-full">
        <input
          type="text"
          className="flex-grow p-2"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="p-2 bg-orange-600 text-white rounded-r-md"
          onClick={handleSearch}
          disabled={!query.trim()}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
