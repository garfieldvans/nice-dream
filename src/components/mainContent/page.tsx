import React from 'react';
import HeroComponent from './heroComponent/HeroComponent';
import CategoryComponent from './categoryComponent/categoryComponent';

const MainContent: React.FC = () => {
    return (
        <div className="flex flex-col gap-[32px] max-w-[100%]">
            <h1 className="text-xl font-bold">Welcome to Our Website</h1>
            <HeroComponent />
            <CategoryComponent />
        </div>
    );
};

export default MainContent;