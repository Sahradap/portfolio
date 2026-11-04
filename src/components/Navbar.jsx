import { useEffect, useState } from "react";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "services", label: "What I Do" },
  { id: "contact", label: "Contact" },
];

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("main section[id]");

    function updateActiveSection() {
      const position = window.scrollY + 170;
      let currentSection = "home";

      sections.forEach((section) => {
        if (section.offsetTop <= position) {
          currentSection = section.id;
        }
      });

      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 5
      ) {
        currentSection = "contact";
      }

      setActiveSection(currentSection);
    }

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });

    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <header className="px-3 pt-3 pb-3 sticky-top portfolio-header">
      <div className="container">
        <nav
          aria-label="Main navigation"
          className="portfolio-navbar rounded-4 border shadow-sm px-3 px-lg-4 py-3 d-flex flex-wrap align-items-center justify-content-between gap-3"
        >
          <a
            href="#home"
            className="d-flex align-items-center gap-2 text-decoration-none"
          >
            <span className="bg-primary text-white rounded-3 p-2 fw-bold">
              SP
            </span>

            <span className="h5 fw-bold text-white mb-0">
              Sahrada | Full Stack Developer
            </span>
          </a>

          <div className="d-flex flex-wrap justify-content-center gap-3 gap-lg-4 order-3 order-xl-0 w-100 w-xl-auto portfolio-links">
            {navLinks.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setActiveSection(item.id)}
                className={activeSection === item.id ? "active" : ""}
                aria-current={
                  activeSection === item.id ? "location" : undefined
                }
              >
                {item.label}
              </a>
            ))}

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume ↗
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;