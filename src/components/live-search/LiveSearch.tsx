"use client";

import React from "react";
import { useState } from "react";

interface LiveSearchProps {
  items: string[];
  onSearch: (query: string) => void;
}

const LiveSearch: React.FC<LiveSearchProps> = ({ items, onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="flex items-center">
      <label htmlFor="search_box">
        <form action="">
          <input
            id="search_box"
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Search..."
            className="border border-gray-300 rounded p-2"
          />
        </form>
      </label>
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default LiveSearch;
