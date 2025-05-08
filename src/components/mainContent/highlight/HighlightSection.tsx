"use strict";
import CardSmallComponent from "@/components/cards/cardSmall/CardSmallComponent";
import { heroData } from "@/utils/data";
import React from "react";

export default function HighlightSection() {
  return (
    <div className="flex flex-col gap-[32px] w-full">
      <h1>HighlightSection</h1>
      <div className="grid grid-cols-6 gap-[30px] justify-between items-center w-full">
        {heroData.map((item, index) => {
          return (
            <CardSmallComponent
              key={index}
              title={item.title}
              image={item.image}
              href={item.url}
              author={item.author}
              badge={item.badge}
              rating={item.rating.toString()}
            />
          );
        })}
      </div>
      {/* Add more content or components as needed */}
    </div>
  );
}
