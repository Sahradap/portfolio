const trainingTechnologies = [
  "HTML",
  "CSS",
  "Bootstrap",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Redux Toolkit",
  "Material UI",
  "Python",
  "Django",
  "REST APIs",
  "PostgreSQL",
  "Git",
];

function Training() {
  return (
    <section id="certifications" className="py-5">
      <div className="container">
        <p className="text-primary fw-bold small">
          CONTINUED LEARNING
        </p>

        <h2 className="fw-bold text-navy mb-4">
          Training, Certifications & Achievements
        </h2>

        <div className="card bg-white border-0 rounded-4 shadow-sm">
          <div className="card-body p-4">
            <h3 className="h5 fw-bold text-navy">
              Full Stack Development Course
            </h3>

            <p className="text-primary fw-semibold mb-3">
              Upcode Software Labs
            </p>

            <p className="text-secondary lh-lg">
              Completed a full stack development course focused on
              building modern web applications using React and Python.
              The training covered frontend and backend development,
              REST APIs, databases, authentication and full stack project
              development through hands-on assignments and projects.
            </p>

            <div className="d-flex flex-wrap gap-2">
              {trainingTechnologies.map((technology) => (
                <span
                  key={technology}
                  className="badge bg-light text-navy border rounded-pill px-3 py-2"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="row g-4 mt-1">
          <div className="col-md-6">
            <div className="card bg-white border-0 rounded-4 shadow-sm h-100">
              <div className="card-body p-4">
                <p className="text-primary small fw-bold mb-2">
                  ACHIEVEMENT · 2013
                </p>

                <h3 className="h5 fw-bold text-navy">
                  GATE Qualified
                </h3>

                <p className="text-secondary mb-0">
                  Qualified the Graduate Aptitude Test in Engineering
                  (GATE) in 2013.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card bg-white border-0 rounded-4 shadow-sm h-100">
              <div className="card-body p-4">
                <p className="text-primary small fw-bold mb-2">
                  CERTIFICATION
                </p>

                <h3 className="h5 fw-bold text-navy">
                  Faculty Development Programme
                </h3>

                <p className="text-secondary mb-0">
                  Earned a certificate in a Faculty Development
                  Programme conducted by ICT Academy of Kerala.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Training;