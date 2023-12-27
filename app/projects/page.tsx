export default function ContentPage() {
    return (
        <div className="flex flex-col items-center gap-10">
            <h1>My Projects</h1>
            <div className="grid gap-10 grid-cols-3 grid-rows-1 justify-center content-center m-auto">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img
                            src="https://images.unsplash.com/photo-1599597435338-adbf0f27b5b0?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Shoes"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Project 1<div className="badge badge-secondary">CRM</div>
                        </h2>
                        <p>Some Information about the project here!</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Java</div>
                            <div className="badge badge-outline">Spring Boot</div>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img
                            src="https://images.unsplash.com/photo-1631776544419-a22760600a39?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Shoes"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Project 2<div className="badge badge-secondary">Webshop</div>
                        </h2>
                        <p>Some Information about the project here!</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">React</div>
                            <div className="badge badge-outline">NodeJS</div>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img
                            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Shoes"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Project 3<div className="badge badge-secondary">Artificial Intelligence</div>
                        </h2>
                        <p>Some Information about the project here!</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Python</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
