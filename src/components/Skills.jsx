import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaPython,
  FaGitAlt,
  FaCode,
  FaUsers,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiMui,
  SiDjango,
  SiPostgresql,
  SiPostman,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

const skills = [
  {
    title: "Frontend",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "TypeScript",
      "Bootstrap",
      "Material UI",
    ],
  },
  {
    title: "Backend & Database",
    items: ["Python", "Django", "PostgreSQL"],
  },
  {
    title: "Tools & Collaboration",
    items: ["Git", "Postman", "VS Code", "Team Collaboration"],
  },
];

const skillIcons = {
  HTML: <FaHtml5 color="#e34f26" />,
  CSS: <FaCss3Alt color="#1572b6" />,
  JavaScript: <FaJs color="#b88600" />,
  React: <FaReact color="#087ea4" />,
  "Next.js": <SiNextdotjs color="#111111" />,
  TypeScript: <SiTypescript color="#3178c6" />,
  Bootstrap: <FaBootstrap color="#7952b3" />,
  "Material UI": <SiMui color="#007fff" />,
  Python: <FaPython color="#3776ab" />,
  Django: <SiDjango color="#092e20" />,
  PostgreSQL: <SiPostgresql color="#4169a1" />,
  Git: <FaGitAlt color="#f05032" />,
  Postman: <SiPostman color="#ff6c37" />,
  "VS Code": <VscVscode color="#007acc" />,
  "Team Collaboration": <FaUsers color="#6366f1" />,
};

function Skills() {
  return (
    <section id="skills" className="py-5">
      <div className="container">
        <p className="text-primary fw-bold small">MY TOOLKIT</p>

        <h2 className="fw-bold text-navy mb-3">
          Skills & Technologies
        </h2>

        <p className="text-secondary mb-4">
          Technologies I use to build responsive interfaces, backend
          services and practical web applications.
        </p>

        <div className="row g-4">
          {skills.map((group) => (
            <div className="col-md-4" key={group.title}>
              <div className="card sub-card h-100 rounded-4 bg-white border-0 shadow-sm">
                <div className="card-body p-4">
                  <h3 className="h5 fw-bold text-navy border-bottom pb-3 mb-4">
                    {group.title}
                  </h3>

                  <div className="d-flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="d-inline-flex align-items-center gap-2 bg-light border rounded-3 px-3 py-2"
                      >
                        <span
                          className="fs-5 d-inline-flex"
                          aria-hidden="true"
                        >
                          {skillIcons[skill] || <FaCode />}
                        </span>

                        <span className="small fw-semibold text-dark">
                          {skill}
                        </span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;