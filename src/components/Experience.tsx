"use client";

import { motion } from "framer-motion";
import { FiBriefcase, FiCalendar } from "react-icons/fi";

const experiences = [
  {
    company: "SkillersZone LLC",
    role: "Full-Time Senior Software Developer",
    period: "2024 — Present",
    location: "Remote",
    highlights: [
      "Architected scalable Next.js and Node.js microservices serving 50k+ monthly active users.",
      "Engineered responsive UI design systems reducing component library build sizes by 35%.",
      "Collaborated with product teams to integrate real-time web socket feeds and automated CI/CD pipelines.",
    ],
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
  },
  {
    company: "Google",
    role: "Cyber Security & Data Analyst (Contract)",
    period: "2023 — 2024",
    location: "Remote",
    highlights: [
      "Analyzed threat intelligence metrics and developed automated python data processing scripts.",
      "Constructed interactive telemetry dashboards for real-time log monitoring and anomaly alerts.",
    ],
    skills: ["Python", "SQL", "Cybersecurity Telemetry", "Data Visualization"],
  },
  {
    company: "Tech Edge Solutions",
    role: "Frontend Developer",
    period: "2022 — 2023",
    location: "On-Site",
    highlights: [
      "Built cross-platform responsive web portals using React, Redux Toolkit, and RESTful APIs.",
      "Optimized Core Web Vitals to achieve 98+ Google Lighthouse performance scores across client web products.",
    ],
    skills: ["React", "JavaScript (ES6+)", "REST APIs", "CSS Modules"],
  },
];

const Experience = () => {
  return (
    <section className="py-12 space-y-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-teal-600 font-semibold">
            CAREER TRAJECTORY
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight mt-1">
            Work Experience
          </h2>
        </div>
        <p className="text-stone-600 text-sm max-w-md">
          A summary of my professional software engineering journey and key impact metrics.
        </p>
      </div>

      <div className="relative border-l-2 border-stone-200 ml-4 sm:ml-6 space-y-8 pl-6 sm:pl-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative bg-white p-6 sm:p-8 rounded-2xl border border-stone-200/80 shadow-sm hover:shadow-md transition-all duration-300 space-y-4"
          >
            {/* Timeline Dot Icon */}
            <div className="absolute -left-[35px] sm:-left-[43px] top-6 p-2 bg-stone-900 text-teal-400 rounded-full border-4 border-[#fcfbf9] shadow-sm">
              <FiBriefcase className="w-4 h-4" />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-100 pb-4">
              <div>
                <h3 className="text-xl font-bold text-stone-900">{exp.role}</h3>
                <span className="text-sm font-semibold text-teal-600">
                  {exp.company}
                </span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-stone-100 text-stone-700 rounded-full text-xs font-mono">
                <FiCalendar className="w-3.5 h-3.5 text-stone-500" />
                <span>{exp.period}</span>
              </div>
            </div>

            <ul className="space-y-2 text-stone-600 text-sm leading-relaxed list-disc list-inside">
              {exp.highlights.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 pt-2">
              {exp.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 bg-teal-50 text-teal-800 text-xs font-mono rounded-md border border-teal-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
