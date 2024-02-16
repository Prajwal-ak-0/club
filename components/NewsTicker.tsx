// components/NewsTicker.tsx
import React from 'react';

const NewsTicker = () => {
    return (
        <div className="w-full  bg-white/95 text-black h-12 flex items-center overflow-hidden">
            <div className="whitespace-nowrap tracking-wide px-4 py-2 animate-marquee text-xl">
            ** New article alert! **  &gt;&gt;&gt;  ** New article alert! **  &gt;&gt;&gt;  ** New article alert! **  &gt;&gt;&gt;  ** New article alert! **  &gt;&gt;&gt;  ** New article alert! **  &gt;&gt;&gt;  ** New article alert! **  &gt;&gt;&gt;
            </div>
        </div>
    );
};

export default NewsTicker;