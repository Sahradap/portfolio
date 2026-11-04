import ProjectGallery from "./ProjectGallery";

const projects = [
  {
    title: "CRM — Customer Relationship Management System",
    category: "Full Stack · Team Lead · Team Project",

    description:
      "A CRM application for managing customer relationships and business activities, developed collaboratively as part of my internship.",

    contribution:
      "Served as Team Lead and contributed to application development and team coordination.",

    technologies: [
      "Next.js",
      "TypeScript",
      "Material UI",
      "Django",
      "PostgreSQL",
    ],

    images: [
      "/images/crm-login.png",
      "/images/crm-register.png",
      "/images/crm-fp.png",
      "/images/crm-dashboard.png",
      "/images/crm-lead.png",
      "/images/crm-detail.png",
      "/images/crm-deal.png",
      "/images/crm-tickets.png",
    ],

    githubFrontend: "",
    githubBackend: "",
    demo: "https://crm-frontend-phi-eosin.vercel.app/",
  },

  {
    title: "SHOP.CO — Full Stack Ecommerce Application",
    category: "Full Stack · Individual Project",

    description:
      "An online shopping application with product browsing, search, authentication, cart management, checkout and order history.",

    contribution:
      "Developed the React frontend and Django REST API, integrated PostgreSQL, and deployed the application using Vercel and Render.",

    technologies: [
      "React",
      "Redux Toolkit",
      "Bootstrap",
      "Python",
      "Django REST Framework",
      "PostgreSQL",
    ],

    images: [
      "/images/ecommerce-home.png",
      "/images/ecommerce-products.png",
      "/images/ecommerce-cart.png",
      "/images/ecommerce-orders.png",
    ],

    github:
      "https://github.com/Sahradap/fullstack-ecommerce/tree/feature/ecommerce-project",

    demo: "https://fullstack-ecommerce-client-seven.vercel.app/",
  },

  {
    title: "ECART — Next.js Ecommerce Application",
    category: "Frontend · Individual Mini Project",

    description:
      "A responsive ecommerce frontend built with Next.js, JavaScript and Bootstrap. Features a home page, product listing, product detail pages and add-to-cart functionality, using both App Router and Pages Router.",

    contribution:
      "Designed and developed the responsive pages, implemented navigation using both Next.js routing approaches, and built the shopping cart functionality.",

    technologies: [
      "Next.js",
      "JavaScript",
      "Bootstrap",
      "App Router",
      "Pages Router",
    ],

    images: [
      "/images/frontend-home.png",
      "/images/frontend-products.png",
      "/images/frontend-detail.png",
      "/images/frontend-cart.png",
    ],

    github: "https://github.com/Sahradap/Ecommerce_NextJs",
    demo: "https://ecommerce-next-js-iota-teal.vercel.app",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-5">
      <div className="container">
        <p className="text-primary fw-bold small">SELECTED WORK</p>

        <h2 className="fw-bold text-navy mb-3">My Projects</h2>

        <p className="text-secondary mb-4">
          A selection of applications I have built individually and
          collaboratively.
        </p>

        <div className="row g-4">
          {projects.map((project) => (
            <div className="col-md-6 col-xl-4" key={project.title}>
              <article className="card h-100 bg-white border-0 rounded-4 shadow-sm overflow-hidden">
                <ProjectGallery
                  images={project.images}
                  title={project.title}
                />

                <div className="card-body p-4 d-flex flex-column">
                  <p className="text-primary small fw-bold text-uppercase mb-2">
                    {project.category}
                  </p>

                  <h3 className="h4 fw-bold text-navy mb-3">
                    {project.title}
                  </h3>

                  <p className="text-secondary">
                    {project.description}
                  </p>

                  <p className="text-secondary small">
                    <strong>My contribution:</strong>{" "}
                    {project.contribution}
                  </p>

                  <div className="d-flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="badge bg-light text-navy border rounded-pill px-3 py-2"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="d-flex flex-wrap gap-3 mt-auto">
                    {project.demo && (
                      <a
                        href={project.demo}
                        className="btn btn-primary px-4"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project ↗
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        className="btn btn-outline-primary px-4"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Code ↗
                      </a>
                    )}

                    {project.githubFrontend && (
                      <a
                        href={project.githubFrontend}
                        className="btn btn-outline-primary px-3"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Frontend Code ↗
                      </a>
                    )}

                    {project.githubBackend && (
                      <a
                        href={project.githubBackend}
                        className="btn btn-outline-primary px-3"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Backend Code ↗
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;