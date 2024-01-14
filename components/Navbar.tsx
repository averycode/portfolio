// components/MyComponent.js
import React from "react";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="navbar bg-background text-text">
            <div className="flex-1">
                <Link href="/" className="btn btn-ghost text-xl">
                    Home
                </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link href="">Projects</Link>
                    </li>
                    <li>
                        <Link href="">Music</Link>
                    </li>
                    <li>
                        <Link href="">Art</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
