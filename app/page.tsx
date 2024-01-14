import "./globals.css";
import PersonalDescriptionComponent from "../components/PersonalDescriptionComponent";
import jsonData from "../data.json";
import CVItem from "../components/CVItem";
import ProjectCard from "../components/ProjectCard";

export default function HomePage() {
    const { education, work_experience, project_cards } = jsonData;

    return (
        <div className="flex min-h-screen flex-col">
            <section className="relative pb-64">
                <div className="avatar flex p-10">
                    <div className="mx-auto w-48 rounded-full shadow-xl">
                        <img src="pb.jpg" />
                    </div>
                </div>
                <h1 className="mx-auto max-w-screen-sm text-center text-[55px] font-extrabold text-text2">
                    Hello, I am Daniel Renz
                </h1>
                <div className="-z-50 absolute w-full h-full top-0 blur-sm bg-[url('https://images.unsplash.com/photo-1682695795255-b236b1f1267d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"></div>
            </section>

            <section className="bg-background text-text">
                <PersonalDescriptionComponent />
            </section>

            <section className="bg-sec flex flex-col">
                <h2 className="mx-auto max-w-screen-sm text-center text-[55px] font-extrabold text-text2">Education</h2>
                <ol className="mx-auto max-w-xs sm:max-w-4xl relative border-s border-text2 pt-14">
                    {education.map((item) => {
                        return <CVItem data={item} color={"text2"} />;
                    })}
                </ol>
            </section>

            <section className="bg-background flex flex-col">
                <h2 className="mx-auto max-w-screen-sm text-center text-[55px] font-extrabold text-text">
                    Work Experience
                </h2>
                <ol className="mx-auto max-w-xs sm:max-w-4xl relative border-s border-text pt-14">
                    {work_experience.map((item) => {
                        return <CVItem data={item} color={"text"} />;
                    })}
                </ol>
            </section>

            <section className="bg-acc"></section>

            <section className="bg-background text-text">
                <h1 className="mx-auto max-w-screen-sm text-center text-[55px] font-extrabold text-text">Projects</h1>
                <div className="flex flex-col items-center pt-14">
                    <div className="grid gap-10 grid-cols-1 md:grid-cols-3 m-auto my-10">
                        {project_cards.map((item) => {
                            return <ProjectCard data={item} />;
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}
