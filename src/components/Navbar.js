"use client";
import React, { useState } from 'react';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="  text-teal-700 w-full z-10">
            <div className="container mx-auto flex items-center justify-between px-4 py-3 md:py-5 relative">
                <a href="/" className="flex fixed left-4 top-0 z-20 items-center flex-col rounded-b-xl border shadow-lg bg-slate-100 py-2 px-4">
                    <span className="font-bold text-teal-700">WMN</span>
                    <span className="font-mono text-xs">{"(Watch my news)"}</span>
                </a>
                <div className="md:hidden flex-grow flex justify-end">
                    <button onClick={toggleMenu} className="mobile-menu-button focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <title>bars-3-bottom-left</title>
                            <g fill="none">
                                <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </g>
                        </svg>
                    </button>
                </div>
                <div className={`md:flex items-center justify-end w-full gap-6 ${menuOpen ? 'block pt-12' : 'hidden'}`}>
                    <a href="/" className="py-2 px-3 block">Home</a>
                    <a href="/" className="py-2 px-3 block">News</a>
                    <a href="/" className="py-2 px-3 block">Contact</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
