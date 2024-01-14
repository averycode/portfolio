import React from "react";

export default function Listitem({ data, color }) {
    return (
        <li className={`mb-10 ms-4 text-${color}`}>
            <div className={`absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border + bg-${color}`}></div>
            <time className="mb-1 text-sm font-normal leading-none">{data.time}</time>
            <h3 className="text-lg font-semibold">{data.title}</h3>
            <p className="mb-4 text-base font-light ">{data.description}</p>
        </li>
    );
}
