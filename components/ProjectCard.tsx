import React from "react";

export default function ProjectCard({ data }) {
    return (
        <a
            href="/"
            className="card card-compact w-80 bg-light text-text shadow-xl hover:scale-105 transform transition duration-500"
        >
            <figure>
                <img src={data.image_src} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{data.title}</h2>
                <p>{data.description}</p>
                <div className="card-actions justify-start py-2">
                    {data.technology.map((item) => {
                        return <div className="badge badge-outline">{item}</div>;
                    })}
                </div>
            </div>
        </a>
    );
}
