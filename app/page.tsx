import "./globals.css";
import PersonalDescriptionComponent from "../components/PersonalDescriptionComponent";
import jsonData from "../data.json";
import CVItem from "../components/CVItem";
import ProjectCard from "../components/ProjectCard";

export default function HomePage() {
    const { education, work_experience, project_cards } = jsonData;

    return (
        <div className="flex min-h-screen flex-col">
            <section>
                <div className="avatar flex p-10">
                    <div className="mx-auto w-48 rounded-full shadow-xl">
                        <img src="pb.jpg" />
                    </div>
                </div>
                <h1 className="mx-auto max-w-screen-sm text-center text-[55px] font-extrabold">
                    Hello, I am <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#FF8660] to-[#8000FF]">
                        Daniel Renz
                    </span>
                </h1>
            </section>

            <section className="bg-background text-text">
                <PersonalDescriptionComponent />
            </section>

            <section>
                <h1 className="mx-auto max-w-screen-sm text-center text-[55px] font-extrabold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#FF8660] to-[#8000FF]">
                        CV
                    </span>
                </h1>
                <ol className="mx-auto max-w-xs sm:max-w-4xl relative border-s border-gray-200 dark:border-gray-700">
                    <h2 className="mx-auto text-2xl font-bold ms-4 my-2">Education</h2>
                    {education.map((item) => {
                        return <CVItem data={item} />;
                    })}
                </ol>
                <ol className="mx-auto max-w-xs sm:max-w-4xl relative border-s border-gray-200 dark:border-gray-700">
                    <h2 className="mx-auto text-2xl font-bold ms-4 my-2 mt-14">Work Experience</h2>
                    {work_experience.map((item) => {
                        return <CVItem data={item} />;
                    })}
                </ol>
            </section>

            <section className="bg-background text-text">
                <h1 className="mx-auto max-w-screen-sm text-center text-[55px] font-extrabold" id="projects">
                    <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#FF8660] to-[#8000FF]">
                        Projects
                    </span>
                </h1>
                <div className="flex flex-col items-center">
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
