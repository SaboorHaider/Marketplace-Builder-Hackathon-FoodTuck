import React, { ChangeEvent } from 'react';
type SearchBarProps = {
  products: any[]; // Accept products as an array
  handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  searchQuery: string;
};
const SearchableProductList: React.FC<SearchBarProps> = ({ handleSearch, searchQuery }) => {
  return (
    <div>
      <input 
        type="text" 
        placeholder="Search Products..."
        value={searchQuery}
        onChange={handleSearch}
        className="w-full p-2 text-sm border bg-yellow-300 bg-opacity-40" 
      />
      <div>
      
      </div>
    </div>
  );
};

export default SearchableProductList;
