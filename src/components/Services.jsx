import {
  FaLaptopCode,
  FaServer,
  FaExchangeAlt,
  FaDatabase,
} from "react-icons/fa";

const services = [
  {
    title: "Frontend Development",
    icon: FaLaptopCode,
    description:
      "Building responsive, user-friendly interfaces using React, Next.js, JavaScript, TypeScript, Bootstrap and Material UI.",
  },
  {
    title: "Backend Development",
    icon: FaServer,
    description:
      "Developing application logic and backend functionality using Python and Django, including authentication, validation and data handling.",
  },
  {
    title: "REST API Development",
    icon: FaExchangeAlt,
    description:
      "Creating and integrating REST APIs using Django REST Framework, with JWT authentication, CRUD operations and frontend-backend communication.",
  },
  {
    title: "Database Development",
    icon: FaDatabase,
    description:
      "Working with PostgreSQL and SQL Server to design relational schemas, manage application data, and write queries.",
  },
];

function Services() {
  return (
    <section id="services" className="py-5">
      <div className="container">
        <p className="text-primary fw-bold small">WHAT I DO</p>

        <h2 className="fw-bold text-navy mb-3">
          Building practical web applications
        </h2>

        <p className="text-secondary mb-4 services-intro">
          I work across frontend, backend, APIs and databases to build
          responsive interfaces and complete web applications.
        </p>

        <div className="row g-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div className="col-md-6" key={service.title}>
                <article className="service-card h-100 p-4 p-lg-5 rounded-4">
                  <div className="service-icon mb-4">
                    <Icon aria-hidden="true" />
                  </div>

                  <h3 className="h5 fw-bold text-navy mb-3">
                    {service.title}
                  </h3>

                  <p className="text-secondary lh-lg mb-0">
                    {service.description}
                  </p>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;