const experience = [
  {
    role: "Full-Stack Developer Intern",
    organisation: "Upcode software Labs",
    period: "10/2025-present",
    description:
      "Gained hands-on experience in full stack development through practical assignments and projects. Served as Team Lead on a collaborative CRM project and independently developed and deployed a full stack ecommerce application.\nWorked with React, Next.js, JavaScript, TypeScript, Python, Django, REST APIs and PostgreSQL, using HTML, CSS, Bootstrap, Material UI and Redux Toolkit to build responsive interfaces and manage application state.",
  },
  {
    role: "Software Engineer",
    organisation: "VPRO Technologies & Pvt Ltd",
    period: "09/06/2023-30/05/2024",
    description:
      "Worked on banking software development using Temenos T24, gaining experience with InfoBasic and the Java-based TAFJ environment. Gained familiarity with core areas including Customer, User, Accounts and Funds Transfer, along with Enquiries and Versions.\nContributed in implementing file-upload functionality in the Payment and Order module.",
  },
  {
    role: "Adhoc Assistant Professor",
    organisation: "College of Engineering And Technology Trikaripur",
    period: "27/07/2015-31/03/2016",
    description:
      "Gained teaching experience as an Assistant Professor. Taught Compiler Design and System Programming, and conducted practical sessions in Computer Graphics and System Programming labs. Guided students in understanding theoretical concepts and applying them through programming exercises.",
  },
];

function Experience() {
  return (
    <section id="experience" className="py-5">
      <div className="container">
        <p className="text-primary fw-bold small">MY JOURNEY</p>

        <h2 className="fw-bold text-navy mb-4">Experience</h2>

        <div className="card bg-white border-0 rounded-4 shadow-sm">
          <div className="card-body p-4 p-md-5">
            <ol className="experience-timeline list-unstyled mb-0">
              {experience.map((item) => (
                <li
                  className="timeline-item"
                  key={`${item.role}-${item.organisation}`}
                >
                  <span className="timeline-dot" aria-hidden="true" />

                  <p className="text-primary small fw-semibold mb-2">
                    {item.period}
                  </p>

                  <h3 className="h5 fw-bold text-navy mb-2">
                    {item.role}
                  </h3>

                  <p className="text-secondary mb-3">
                    {item.organisation}
                  </p>

                  <p
                    className="text-secondary lh-lg mb-0"
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {item.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;