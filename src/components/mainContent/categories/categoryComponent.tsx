"use client";

import React from "react";
import { categoryData } from "@/utils/data";

export default function CategoryComponent() {
  return (
    <div className="max-w-[100%]">
      <div className="flex flex-row justify-between items-center mb-[30px]">
        <h2>Categories</h2>
        <div className="flex gap-[10px] w-fit">
          <a href="/categories" className="flex w-full justify-center items-center bg-slate-300 rounded px-[10px] py-[5px] font-bold hover:bg-slate-500 hover:text-white">
            <span>See All</span>
          </a>
        </div>
      </div>
      <div className="flex gap-[30px] justify-between items-center">
        {categoryData.slice(0, 6).map((category) => {
          return (
              <a href={category.url} key={category.label} className="flex justify-center items-center flex-wrap bg-slate-300 rounded px-[10px] py-[5px] font-bold hover:bg-slate-500 hover:text-white max-w-[1/6] w-full h-full">
                <h3>{category.label}</h3>
              </a>
          );
        })}
      </div>
    </div>
  );
}
