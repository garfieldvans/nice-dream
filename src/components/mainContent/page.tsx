import React from 'react';
import HeroComponent from './hero/HeroComponent';
import CategoryComponent from './categories/categoryComponent';
import HighlightSection from './highlight/HighlightSection';
import TrendingSection from './trendings/TrendingSection';
import SeriesSection from './series/SeriesSection';

const MainContent: React.FC = () => {
    return (
        <div className="flex flex-col gap-[32px] max-w-[100%]">
            <h1 className="text-xl font-bold">Welcome to Our Website</h1>
            <HeroComponent />
            <CategoryComponent />
            <HighlightSection />
            <TrendingSection />
            <SeriesSection />
        </div>
    );
};

export default MainContent;