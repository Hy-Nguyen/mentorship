'use client';
import { useState } from 'react';


export default function SearchInput({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className='px-2 w-1/3'>
      <input
        className='text-black w-full'
        type="text"
        placeholder="Enter name to search ...."
        value={searchQuery}
        onChange={handleSearch}
      />
    </div>
  );
}