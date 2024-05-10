import Link from "next/link";
import Image from "next/image";

import CTA from "@/components/cta";
import { projects } from "@/constants";
import { arrow, hyperlink } from "../../../public/assets/icons";

export const metadata = {
  title: "Mohit Raj Panday | Projects",
  description: "List of projects done by Mohit Raj Panday",
};

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My&nbsp;
        <span className="blue-gradient_text drop-shadow font-semibold">
          Projects
        </span>
      </h1>

      <p className="text-slate-500 mt-2 leading-relaxed">
        Welcome to the Projects page! Explore a curated collection of my
        latest creations, showcasing innovative solutions, seamless user
        experiences, and cutting-edge technologies. From full-stack applications
        to mobile apps and web platforms, each project is a testament to my
        passion for problem-solving and dedication to excellence. Dive in,
        explore, and let&apos;s embark on a journey of digital innovation together!
      </p>
      <div className="flex flex-wrap my-20 gap-16 justify-evenly relative">
        {projects.map((project) => (
          <div
            className="lg:w-[400px] w-full bg-slate-200/40 p-8 m-0 cursor-pointer transition ease-in-out delay-150 shadow-xl hover:shadow-2xl rounded-3xl hover:-translate-y-1 hover:scale-110 duration-300"
            key={project.name}
          >
            {/* <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <Image
                  src={project.iconUrl}
                  alt="threads"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div> */}

            <div className="flex flex-col p-0 m-0">
              <h4 className="font-poppins project-heading flex flex-row gap-5 justify-center px-5 py-2.5 rounded-3xl text-center ">
                {/* {project.link ? (
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row justify-center items-center gap-2.5"
                  >
                    {project.name}
                    <Image
                      src={hyperlink}
                      alt="threads"
                      width={16}
                      height={16}
                      className="hover:scale-110 transition ease-in-out delay-50 hover:-translate-y-1 duration-300"
                    />
                  </Link>
                ) : ( */}
                  <span>{project.name} </span>
                {/* )} */}
              </h4>
              <p className="mt-2 text-slate-500">{project.description}</p>
              <p className="flex flex-col gap-3 mt-2 cursor-pointer text-slate-500">
                <span className="font-bold text-black">Tech Stack: </span>
                {project.tech_stack}
              </p>
              {/* <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                >
                  Live Link
                </Link>
                <Image
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain"
                />
              </div> */}
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default Projects;
