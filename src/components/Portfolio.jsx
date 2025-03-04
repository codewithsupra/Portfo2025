import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaLink } from "react-icons/fa";  // Import the GitHub and Live Link icons

import { portfolio } from "../data";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  image,
  githubLink,  // Added prop for GitHub link
  liveLink,    // Added prop for live link
}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeIn("up", "spring", 0, 0.75)}
      className={`w-full mt-[-2px] flex flex-col md:flex-row ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-5`}
    >
      <div className='relative w-full md:w-3/5'>
        <img
          src={image}
          alt='project_image'
          className='w-full h-auto object-cover md:rounded-3xl'
        />
      </div>

      <div className={`w-full md:w-2/5 px-6 md:p-16 flex flex-col justify-center ${isEven ? "text-left md:text-left" : "text-left md:text-right"}`}>
        <h3 className='text-white font-medium text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:text-5xl leading-tight'>{name}</h3>
        <p className='mt-4 text-secondary text-sm sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl'>{description}</p>

        {/* Below the text and in line with the image */}
        <div className="flex justify-start gap-4 mt-4">
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white text-lg hover:text-blue-500 transition duration-300">
            <FaGithub className="text-2xl" />
            <span>GitHub</span>
          </a>
          <a href={liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white text-lg hover:text-blue-500 transition duration-300">
            <FaLink className="text-2xl" />
            <span>Live Link</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 3; // Set how many projects per page

  // Get the current set of projects to display based on the page
  const currentProjects = portfolio.slice(currentPage * projectsPerPage, (currentPage + 1) * projectsPerPage);

  // Handle page change when a dot is clicked
  const handleDotClick = (page, event) => {
    event.preventDefault(); // Prevent default scroll behavior
    setCurrentPage(page);

    // Scroll to the top of the project section
    const projectSection = document.getElementById("portfolio-section");
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className='text-center md:text-left md:px-20 lg:px-40'>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionText}`} id="portfolio-section">Portfolio</h2>
      </motion.div>

      <div className='mt-10 md:mt-20 flex flex-col gap-10 md:gap-20'>
        {currentProjects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`} 
            index={index} 
            {...project} 
            githubLink={project.githubLink}  // Pass the GitHub link
            liveLink={project.liveLink}      // Pass the live link
          />
        ))}
      </div>

      {/* Dot Navigation */}
      <div className="flex justify-center mt-8">
        {Array(Math.ceil(portfolio.length / projectsPerPage)).fill(null).map((_, index) => (
          <span
            key={index}
            onClick={(event) => handleDotClick(index, event)}
            className={`cursor-pointer mx-2 w-3 h-3 rounded-full ${currentPage === index ? 'bg-blue-500' : 'bg-gray-300'} transition-all duration-300`}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Portfolio, "portfolio");
