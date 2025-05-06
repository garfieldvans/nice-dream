import React from 'react';

export default function HomePage({
    children,
}: Readonly<{
  children: React.ReactNode;
}>)  {
    return (
        <div className="flex flex-col gap-[32px]">
            {children}
        </div>
    );
}
