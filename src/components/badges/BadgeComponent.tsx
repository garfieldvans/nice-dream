'use client';
import React from 'react';

interface BadgeProps {
    bgColor?: string;
    textColor?: string;
    text: string;
  }

export default function BadgeComponent({
    bgColor = 'teal',
    textColor = '#000',
    text,
  }: BadgeProps) {
  return (
    <div
      className="flex items-center justify-center w-min h-min px-[8px] py-[4px]"
      style={{ backgroundColor: bgColor }}
    >
      <span className='text-nowrap flex w-full'style={{ color: textColor }}>{text}</span>
    </div>
  );
}