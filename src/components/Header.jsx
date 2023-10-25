import React, { useState } from "react";

export default function Header({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };
    return (
        <>
        <header>
        <nav>
        <ul>
        <li><a href="">Home</a></li>
        <li><a href="https://codefellows.github.io/code-301-guide/curriculum/class-02/lab/assets/data.json" target="_blank">Json</a></li>
        <li><a href="https://github.com/aaron1986/Lab-Class-02-Week-Five" target="_blank">GitHub</a></li>

        <li>
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </li>
          <li>
            <button className="btn" onClick={handleSearch}>Search</button>
          </li>
        </ul>
        </nav>
        </header>
        </>
    );
}