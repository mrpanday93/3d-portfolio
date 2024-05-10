import { kraftshala, cslogo } from "../../public/assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
  loopback,
  codeigniter,
  php,
  angular,
  mysql,
} from "../../public/assets/icons";

export const skills = [
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: loopback,
    name: "Loopback",
    type: "Backend",
  },
  {
    imageUrl: php,
    name: "PHP",
    type: "Backend",
  },
  {
    imageUrl: codeigniter,
    name: "Codeigniter",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: angular,
    name: "Angular",
    type: "Frontend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: mysql,
    name: "MySQL",
    type: "Database",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Senior Software Developer",
    company_name: "Kraftshala",
    icon: kraftshala,
    iconBg: "#fbc177b5",
    date: "December 2021 - Current",
    points: [
      "Enhanced database performance by 500% through the implementation of advanced optimization techniques, including indexing and query optimization.",
      "Developed and maintained RESTful APIs using Node.js and Express.js to support diverse applications and services.",
      "Ensured high availability and reliability of APIs by monitoring performance using AWS CloudWatch and promptly resolving any issues.",
      "Conducted comprehensive code reviews to improve API functionality and maintainability.",
      "Created seamless front-end UIs using React.js and seamlessly integrated them with back-end APIs.",
      "Collaborated with cross-functional teams to identify and resolve application-related issues, leveraging tools like New Relic for monitoring and debugging, resulting in a 400% improvement in user experience.",
      "Integrated third-party APIs such as Google Analytics, Zoom, and CashFree to enhance platform functionality and user experience.",
      "Mentored junior developers by conducting regular code reviews and providing guidance on best practices and emerging technologies.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Clerisy Solutions Pvt Ltd",
    icon: cslogo,
    iconBg: "#68a6276b",
    date: "April 2019 - November 2021",
    points: [
      "Collaborated with cross-functional teams to develop and maintain APIs for diverse applications, including lodging systems and online booking engines.",
      "Provided training sessions for 20 junior developers, focusing on design patterns, best coding practices, and project overview.",
      "Led the design and implementation of a Property Management System (PMS) for hotels and resorts, integrating features for room bookings, customer profiles, payments, and reporting.",
      "Created a custom Content Management System (CMS) to enable dynamic content delivery across various platforms.",
      "Spearheaded the upgrade of legacy systems and booking management modules.",
    ],
  },
];

export const socialLinks = [
  // {
  //   name: "Contact",
  //   iconUrl: contact,
  //   link: "/contact",
  // },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/mrpanday93/",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/mrpanday/",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Personal Portfolio",
    description:
      "Crafted a dynamic portfolio leveraging the power of Next.js, Three.js, and Tailwind CSS, seamlessly blending cutting-edge web development technologies for an immersive user experience. This portfolio not only showcases my skills and projects but also integrates a send mail functionality, enabling seamless communication with visitors.",
    link: "https://github.com/adrianhajdin/pricewise",
    tech_stack: "Next.js, Tailwind CSS, Three.js"
  },
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Company Portfolio",
    description:
      "Developed a sleek and modern company website utilizing the robust features of Next.js and the flexible styling of Tailwind CSS. This website combines the power of Next.js for dynamic content rendering with the utility-first approach of Tailwind CSS for efficient styling. The result is a visually appealing and responsive website that effectively communicates the company's message and offerings to its audience.",
    link: "https://company-portfolio-nextjs.vercel.app/",
    tech_stack: "Next.js, Tailwind CSS"
  },
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Student Learn Platform",
    description:
      "Upgraded the existing learning platform to prioritize user-centric design and enhance usability. Implemented features for placements, akin to job portals, to automate the hiring and job application processes efficiently. Additionally, integrated a payment gateway using Cashfree and Zoho to facilitate seamless and secure transactions within the platform.",
    link: "https://github.com/adrianhajdin/pricewise",
    tech_stack: "React.js, Material UI, Redux, Node.js"
  },
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Ed-Tech Dashboard",
    description:
      "Executed the implementation of a diverse range of features, encompassing learning content management, placements, Zoom meetings, lead management, student management, expert management, and comprehensive user and role management capabilities.",
    link: "https://github.com/adrianhajdin/pricewise",
    tech_stack: "React.js, Material UI, Redux, Node.js"
  },
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Lodging System",
    description:
      "Contributed to the development of a comprehensive hotel management solution, leveraging PHP, Codeigniter, and Angular.js/ts. This involved integrating various third-party APIs such as Siteminder, Google Analytics, and Authorize.net to ensure smooth operation and enhance the platform's functionality. Additionally, implemented automated processes for tasks including invoicing, payments, and reservation management, optimizing efficiency and improving overall system performance.",
    link: "https://github.com/adrianhajdin/pricewise",
    tech_stack: "PHP, Angular.js, Material UI, Fuse theme, Codeigniter, MySQL"
  },
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Lodging System OTA",
    description:
      "Designed and constructed an Online Travel Agency (OTA) platform entirely from the ground up, utilizing Angular.js/ts, PHP, and MySQL. Integrated the platform with third-party services like PCIBooking and Google Tag Manager to augment its functionality and provide additional features. Additionally, developed a bespoke booking engine that enabled real-time synchronization of inventory across multiple channels, ensuring accurate and up-to-date information for users across various platforms.",
    link: "https://github.com/adrianhajdin/pricewise",
    tech_stack: "PHP, Angular.ts, Material UI, Codeigniter, PostgreSQL"
  },
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Beach Rental PWA",
    description:
      "Engineered a beach rental management system utilizing Angular.js/ts, PHP, and MySQL. Crafted intuitive user interfaces for both customers and administrators, simplifying rental and purchase transactions. Integrated secure payment gateways like CashFree and Authorize.net to enable seamless online transactions, ensuring a safe and convenient experience for users.",
    link: "https://github.com/adrianhajdin/pricewise",
    tech_stack: "PHP, Angular.ts, Material UI, Codeigniter, MySQL"
  },
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Internet Boking Engine(IBE)",
    description:
      "Led the development efforts for an Internet Booking Engine (IBE) tailored for hotel owners, utilizing Vue.js, Node.js, and PostgreSQL. Integrated the IBE with external services including SNT, PCIBooking, and Google Tag Manager to provide comprehensive functionality and enhance user experience. Additionally, designed RESTful APIs to facilitate seamless communication between the front-end and back-end systems, ensuring efficient data exchange and optimal performance.",
    link: "https://github.com/adrianhajdin/pricewise",
    tech_stack: "Node.js, Angular.ts, Material UI, Vue.js, Loopback, PostgreSQL"
  },
  // {
  //   iconUrl: threads,
  //   theme: "btn-back-green",
  //   name: "Full Stack Threads Clone",
  //   description:
  //     'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
  //   link: "https://github.com/adrianhajdin/threads",
  // },
  // {
  //   iconUrl: car,
  //   theme: "btn-back-blue",
  //   name: "Car Finding App",
  //   description:
  //     "Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.",
  //   link: "https://github.com/adrianhajdin/project_next13_car_showcase",
  // },
  // {
  //   iconUrl: snapgram,
  //   theme: "btn-back-pink",
  //   name: "Full Stack Instagram Clone",
  //   description:
  //     "Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.",
  //   link: "https://github.com/adrianhajdin/social_media_app",
  // },
  // {
  //   iconUrl: estate,
  //   theme: "btn-back-black",
  //   name: "Real-Estate Application",
  //   description:
  //     "Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.",
  //   link: "https://github.com/adrianhajdin/projects_realestate",
  // },
  // {
  //   iconUrl: summiz,
  //   theme: "btn-back-yellow",
  //   name: "AI Summarizer Application",
  //   description:
  //     "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
  //   link: "https://github.com/adrianhajdin/project_ai_summarizer",
  // },
];
