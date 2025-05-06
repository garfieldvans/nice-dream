"use client";

import React from "react";
import {navList} from "../../utils/data"
import LiveSearch from "../live-search/LiveSearch";

const NavigationMenu: React.FC = () => {
  return (
    <nav className="w-full flex max-w-[1240px] mx-auto justify-between items-center px-[40px] py-[16px] ">
      <label htmlFor="logo" className="flex items-center gap-[8px]">
        <a href="/" id="logo">
        <h1 className="text-2xl font-bold">Logo</h1>
        </a>
      </label>
      <div className="flex items-center gap-[44px]">
        <div className="filters">
          <LiveSearch
            items={[]}
            onSearch={(query) => console.log("Search query:", query)}
          />
        </div>
        <ul className="flex gap-[24px]">
          {navList.map((item) => (
            <li key={item.name} className="text-lg font-medium">
                <a href={item.path} className="hover:underline hover:underline-offset-4">
                    {item.name}
                </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavigationMenu;
