// components/MyComponent.js
import React from "react";
import Link from "next/link";

function Navbar() {
    return (
        <div className="navbar">
            <div className="flex-1">
                <Link href="/" className="btn btn-ghost text-xl">
                    Home
                </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link href="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
