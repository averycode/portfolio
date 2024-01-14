import React from "react";

export default function ProjectCard({ data }) {
    return (
        <div className="card card-compact w-80 shadow-xl">
            <figure>
                <img src={data.image_src} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {data.title}
                    <div className="badge badge-secondary">{data.type}</div>
                </h2>
                <p>{data.description}</p>
                <div className="card-actions justify-end">
                    {data.technology.map((item) => {
                        return <div className="badge badge-outline">{item}</div>;
                    })}
                </div>
            </div>
        </div>
    );
}
