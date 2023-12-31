import "./globals.css";

export default function HomePage() {
    return (
        <div className="flex min-h-screen">
            <div className="mx-auto">
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
                <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
                <p className="mx-auto max-w-xs sm:max-w-4xl mt-[40px] mb-[54px] text-[18px] font-light text-center">
                    Hello, I'm Daniel Renz, a master's student in Business Informatics. The fascination for programming
                    drives me every day – the opportunity to create innovation through code deeply inspires me.
                    <br />
                    <br />
                    Health is a crucial pillar of my life. That's why sports like football, boxing, and weightlifting
                    are integral to my routine. A balanced diet is as important to me as physical activity.
                    <br />
                    <br />
                    I spend my leisure time engaged in various creative activities. Digital art allows me to express my
                    artistic side, while I also dabble in music production – a world full of new sounds and melodies
                    that captivates me.
                    <br />
                    <br />
                    Chess is more than just a game for me. It's a passion that combines my love for strategy and
                    tactics. And then there's my great passion for traveling. Discovering new places, getting to know
                    different cultures, and expanding my horizons are incredibly enriching for me.
                    <br />
                    <br />I embody various interests and passions – from the logic of programming to the creative
                    freedom of art, from the mental challenge of chess to physical engagement in sports. And let's not
                    forget my love for exploring new places, which underscores my curiosity and openness to the world
                    around me.
                </p>
                <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
                <h1 className="mx-auto max-w-screen-sm text-center text-[55px] font-extrabold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#FF8660] to-[#8000FF]">
                        CV
                    </span>
                </h1>
                <ol className="mx-auto max-w-xs sm:max-w-4xl relative border-s border-gray-200 dark:border-gray-700">
                    <h2 className="mx-auto text-2xl font-bold ms-4 my-2">Education</h2>
                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none">Since October 2022</time>
                        <h3 className="text-lg font-semibold">Tecnical University of Darmstadt M.Sc.</h3>
                        <p className="mb-4 text-base font-light ">
                            I am pursuing a Master's degree in Business Informatics with a current GPA of 2.1.
                        </p>
                    </li>
                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none">2019 - 2022</time>
                        <h3 className="text-lg font-semibold">University of Siegen B.Sc.</h3>
                        <p className="mb-4 text-base font-light ">
                            I studied Business Informatics in my Bachelor's degree program and graduated with a final
                            grade of 2.1. My Bachelor's thesis was titled 'Conceptualization and Prototypical
                            Implementation of Integrating Public Transit Services into a Digital Mobility Assistant,'
                            earning a grade of 1.7.
                        </p>
                    </li>
                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none">2009 - 2018</time>
                        <h3 className="text-lg font-semibold">Comprehensive school Bertha-von-Suttner in Siegen</h3>
                        <p className="mb-4 text-base font-light ">
                            I graduated from there with a high school diploma (Abitur) and a final grade of 2.8. My
                            advanced courses (Leistungskurse) were Art and Mathematics.
                        </p>
                    </li>
                </ol>
                <ol className="mx-auto max-w-xs sm:max-w-4xl relative border-s border-gray-200 dark:border-gray-700">
                    <h2 className="mx-auto text-2xl font-bold ms-4 my-2 mt-14">Work Experience</h2>
                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none">Since March 2023</time>
                        <h3 className="text-lg font-semibold">Omnicom Media Group Germany in Hamburg</h3>
                        <p className="mb-4 text-base font-light ">
                            I am a working student in the field of process management, working on process modeling,
                            process optimization, and taking on Product Owner roles in low-code projects.
                        </p>
                    </li>
                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none">July 2021 - December 2021</time>
                        <h3 className="text-lg font-semibold">Vodafone GmbH in Düsseldorf</h3>
                        <p className="mb-4 text-base font-light ">
                            During an internship in the field of Business Transformation, I took over project management
                            activities. Furthermore, I contributed to designing a product portfolio and assisting in the
                            strategic planning of Product Lifecycle Management.
                        </p>
                    </li>
                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none">2018 - 2021</time>
                        <h3 className="text-lg font-semibold">CineStar in Siegen</h3>
                        <p className="mb-4 text-base font-light ">
                            I worked as a marginal employee in cashier, counter, and entrance roles. During this time, I
                            learned customer interaction skills and was able to demonstrate my reliability, flexibility,
                            and teamwork abilities.
                        </p>
                    </li>
                </ol>
                <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
                <h1 className="mx-auto max-w-screen-sm text-center text-[55px] font-extrabold" id="projects">
                    <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#FF8660] to-[#8000FF]">
                        Projects
                    </span>
                </h1>
                <div className="flex flex-col items-center">
                    <div className="grid gap-10 grid-cols-1 md:grid-cols-3 m-auto my-10">
                        <div className="card card-compact w-80 shadow-xl">
                            <figure>
                                <img src="https://images.unsplash.com/photo-1599597435338-adbf0f27b5b0?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    CMS for a town<div className="badge badge-secondary">CMS</div>
                                </h2>
                                <p>
                                    A Content Management Systems including admin dashboard to manage content visualised
                                    on terminals in town.
                                </p>
                                <div className="card-actions justify-end">
                                    <div className="badge badge-outline">Java</div>
                                    <div className="badge badge-outline">Spring Boot</div>
                                </div>
                            </div>
                        </div>
                        <div className="card card-compact w-80 shadow-xl">
                            <figure>
                                <img src="https://images.unsplash.com/photo-1631776544419-a22760600a39?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    MobilityBox Demo<div className="badge badge-secondary">MaaS</div>
                                </h2>
                                <p>
                                    A Demo where you can buy public transport tickets across multiple regions all in one
                                    App.
                                </p>
                                <div className="card-actions justify-end">
                                    <div className="badge badge-outline">JavaScript</div>
                                    <div className="badge badge-outline">Vesputi API</div>
                                </div>
                            </div>
                        </div>
                        <div className="card card-compact w-80 shadow-xl">
                            <figure>
                                <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                            </figure>
                            <div className="card-body">
                                <div className="flex items-center gap-1">
                                    <h2 className="card-title">Chrome Extension</h2>
                                    <div className="badge badge-secondary">Fraud Detection</div>
                                </div>
                                <p>Chrome Extension for Kleinanzeigen which hepls you detect fraud.</p>
                                <div className="card-actions justify-end">
                                    <div className="badge badge-outline">JavaScript</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
