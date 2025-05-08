"use client";
import BadgeComponent from "@/components/badges/BadgeComponent";
import React from "react";

interface CardSmallProps {
  title: string;
  author?: string;
  image: string;
  href: string;
  badge?: string;
  rating?: string;
}

export default function CardSmallComponent({
  title,
  author,
  image,
  href,
  badge,
  rating,
}: CardSmallProps) {
  return (
    <a
      href={href}
      className="card-small flex flex-col gap-[8px] w-[100%] h-[100%] px-[5px] py-[6px] bg-orange-400 rounded-md overflow-hidden"
    >
      <div className="flex flex-col gap-[8px] w-[100%] h-[100%] relative">
        <div className="flex absolute right-0 bottom-0 z-[1] w-min">
          {rating}
        </div>
        {badge && (
          <div className="flex absolute left-0 top-0 z-[1]">
            <BadgeComponent text={badge} bgColor={badge === 'New Release' ? 'orange' : undefined} />
          </div>
        )}
        <figure className="flex justify-center items-center w-full h-full m-0 aspect-square rounded-md ">
          <img
            src={image}
            alt={title}
            className="flex justify-center items-center w-[100%] h-[100%] object-cover aspect-square"
          />
        </figure>
      </div>
      <div className="flex flex-col gap-[8px] w-[100%] h-[100%]">
        <h3 className="font-bold text-[16px] text-indigo-800">{title}</h3>
        <p className="text-[12px] text-gray-300">by: {author}</p>
      </div>
    </a>
  );
}
