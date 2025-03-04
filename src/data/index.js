import {
  algorithms,
  devnotes,
  oscs,
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Hero",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "Software Engineering Intern",
    company_name: "Mendix",
    date: "01/2023 - 07/2023",
    details: [
      "Developed <span style='color: white;'>React UI-UX widgets</span> integrating TypeScript, Redux, and Tailwind, optimizing API calls with Node.js and GraphQL, cutting response times by 40%.",
      "Collaborated with <span style='color: white;'>5-member</span> team deploying AWS microservices using Lambda, S3, and Docker, streamlining CI/CD workflows.",
      "Enhanced security with <span style='color: white;'>JWT and OAuth</span>, optimized Redis caching, and improved query performance by 30%.",
    ],
  },
  {
    title: "Teaching Assistant-Service Oriented Design",
    company_name: "Vrije Universiteit Amsterdam",
    date: "09/2022 - 12/2022",
    details: [
      "Mentored <span style='color: white;'>50+ students</span> in SDLC, Agile, UML, and SoaML, boosting project grades by 45% through structured guidance.",
      "Led workshops on <span style='color: white;'>database design</span>, query optimization, and ORM best practices for efficient backends and seamless frontend integration.",
      "Built <span style='color: white;'>Jest-based automation</span> tests targeting critical code areas, reducing debugging time by 25 hours per month.",
    ],
  },
  {
    title: "Teaching Assistant-Service Oriented Design",
    company_name: "Vrije Universiteit Amsterdam",
    date: "09/2022 - 12/2022",
    details: [
      "Mentored <span style='color: white;'>50+ students</span> in SDLC, Agile, UML, and SoaML, boosting project grades by 45% through structured guidance.",
      "Led workshops on <span style='color: white;'>database design</span>, query optimization, and ORM best practices for efficient backends and seamless frontend integration.",
      "Built <span style='color: white;'>Jest-based automation</span> tests targeting critical code areas, reducing debugging time by 25 hours per month.",
    ],
  },
  {
    title: "Web Developer Volunteer",
    company_name: "UDAAN Society Organisation",
    date: "03/2020 - 12/2020",
    details: [
      "Developed a <span style='color: white;'>COVID-19 resource hub</span> with real-time REST API updates via Firebase, ensuring 24/7 access to health information.",
      "Led a team to build a <span style='color: white;'>real-time COVID-19 dashboard</span> using React and Chart.js, reducing manual reporting time by 50%.",
      "Optimized a <span style='color: white;'>volunteer management</span> system with Node.js and PostgreSQL, cutting coordination efforts by 40%.",
    ],
  },
];

const portfolio = [
  {
    name: "Deluxe Notes",
    description:
      "A privacy-focused journal app built with Next.js, Clerk, and EdgeStore, featuring end-to-end encryption and real-time sync, reducing load times by 25%.",
    image: oscs,
    githubLink: "https://github.com/yourgithub/DeluxeNotes",  // Example GitHub link
    liveLink: "https://yourwebsite.com/deluxe-notes",  // Example live site link
  },
  {
    name: "AI Travel Assistant",
    description:
      "An AI-driven platform delivering adaptive itineraries, cutting setup time by 30%, enabling seamless, personalized trips without agency reliance.",
    image: devnotes,
    githubLink: "https://github.com/yourgithub/AITravelAssistant",  // Example GitHub link
    liveLink: "https://yourwebsite.com/ai-travel-assistant",  // Example live site link
  },
  {
    name: "AceAI Coach",
    description:
      "A platform offering AI-based mock interviews with real-time assessments, enhancing prep for 200+ users weekly using Next.js, React, and Drizzle ORM.",
    image: algorithms,
    githubLink: "https://github.com/yourgithub/AceAI",  // Example GitHub link
    liveLink: "https://yourwebsite.com/aceai-coach",  // Example live site link
  },
  {
    name: "AceAI Coach",
    description:
      "A platform offering AI-based mock interviews with real-time assessments, enhancing prep for 200+ users weekly using Next.js, React, and Drizzle ORM.",
    image: algorithms,
    githubLink: "https://github.com/yourgithub/AceAI",  // Example GitHub link
    liveLink: "https://yourwebsite.com/aceai-coach",  // Example live site link
  },
];


export { experiences, portfolio };
