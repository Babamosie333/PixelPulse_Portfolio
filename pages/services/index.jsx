import { motion } from "framer-motion";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import ServiceSlider from "../../components/ServiceSlider";
import { fadeIn } from "../../variants";

export const serviceData = [
  {
    title: "Web Development",
    description:
      "I build responsive and modern websites using React, Next.js, Tailwind CSS, and JavaScript with clean UI and smooth user experience.",
  },
  {
    title: "Frontend Development",
    description:
      "I create interactive user interfaces, reusable components, and mobile-friendly layouts that focus on performance and usability.",
  },
  {
    title: "Backend Integration",
    description:
      "I work with Node.js and MongoDB to connect frontend apps with databases, APIs, authentication, and dynamic features.",
  },
  {
    title: "Portfolio & Landing Pages",
    description:
      "I design and develop personal portfolios, student websites, and landing pages that present projects clearly and professionally.",
  },
  {
    title: "Real-Time Applications",
    description:
      "I build chat apps and dynamic web experiences with real-time features, responsive layouts, and better user interaction.",
  },
  {
    title: "UI Design to Code",
    description:
      "I convert ideas and designs into functional web pages with modern styling, animations, and structured code.",
  },
];

const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8"
            >
              My services <span className="text-accent">.</span>
            </motion.h2>

            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              I help turn ideas into modern digital products through responsive
              frontend development, full-stack web applications, and clean UI
              implementation for portfolios, student projects, and creative web
              experiences.
            </motion.p>
          </div>

          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
