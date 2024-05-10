"use client";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CTA from "@/components/cta";
import { experiences, skills } from "@/constants";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const About = () => {
  const [text] = useTypewriter({
    words: [
      "Mohit Raj Panday",
      "Software Engineer",
      "Tech Innovator",
      "Tech Enthusiast",
      "Problem Solver",
      "Team Player",
      "Passionate Coder",
      "Innovation Catalyst",
    ],
    loop: true,
    typeSpeed: 100,
    delaySpeed: 1000,
    deleteSpeed: 100,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const getView = () => {};

  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I&apos;m&nbsp;
        <span className="blue-gradient_text font-semibold drop-shadow">
          {text}
        </span>
        <Cursor
          cursorStyle={
            <span className="blue-gradient_text drop-shadow"> | </span>
          }
        />
        👋
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Welcome to my portfolio! As a passionate Full Stack Developer, I
          specialize in JavaScript, Node.js, React.js, PHP, and the wizardry of
          databases like MongoDB and MySQL. With over 6 years of experience,
          I&apos;ve honed my skills in crafting seamless applications and
          pushing tech limits. I&apos;m a proactive problem-solver committed to
          delivering innovative solutions that exceed expectations. Explore my
          portfolio to see my contributions to various projects! I&apos;m
          passionate about leveraging cutting-edge technologies to drive digital
          innovation and elevate user experiences. As a strong communicator and
          team player, I thrive in collaborative environments. Let&apos;s
          connect and bring your ideas to life!
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div
              className="block-container w-12 h-12 md:w-20 md:h-20 cursor-pointer"
              key={skill.name}
              title={skill.name}
            >
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <Image
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Work Experience.</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            I&apos;ve worked with different companies, leveling up my skills and
            teaming up with smart people. Here&apos;s the rundown:
          </p>
        </div>

        <div className="mt-12 flex" ref={ref}>
          <VerticalTimeline animate={true} lineColor="">
            {experiences.map((experience, index) => {
              const { ref, inView } = useInView({
                triggerOnce: true,
              });
              return (
                <div
                  key={index}
                  ref={ref}
                  className="vertical-timeline-element"
                >
                  <VerticalTimelineElement
                    key={experience.company_name}
                    date={experience.date}
                    iconStyle={{ background: experience.iconBg }}
                    icon={
                      <div className="flex justify-center items-center w-full h-full">
                        <Image
                          src={experience.icon}
                          alt={experience.company_name}
                          className="w-[60%] h-[60%] object-contain"
                        />
                      </div>
                    }
                    visible={inView}
                    contentStyle={{
                      borderBottom: "8px",
                      borderStyle: "solid",
                      borderBottomColor: experience.iconBg,
                      boxShadow: `0px 0px 30px 5px #cdcdcd`,
                    }}
                  >
                    <div>
                      <h3 className="text-black subhead-text">
                        {experience.title}
                      </h3>
                      <p
                        className="text-black-500 font-medium text-base"
                        style={{ margin: 0 }}
                      >
                        {experience.company_name}
                      </p>
                    </div>

                    <ul className="my-5 list-disc ml-5 space-y-2">
                      {experience.points.map((point, index) => (
                        <li
                          key={`experience-point-${index}`}
                          className="text-gray-600 font-normal pl-1 text-sm text-pretty"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </VerticalTimelineElement>
                </div>
              );
            })}
          </VerticalTimeline>
        </div>
      </div>
      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default About;
