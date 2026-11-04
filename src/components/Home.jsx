function Home() {
  return (
    <section id="home" className="py-5">
      <div className="container">
        <p className="text-primary fw-semibold mb-3">
          Hi,I'm Sahrada Purushothaman
        </p>

        <h1 className="display-5 text-navy fw-bold mb-4">
          Full stack Developer
        </h1>

        <p className="text-dark mb-4">
          I turn ideas into responsive, user-friendly web applications using{" "}
          <strong className="text-navy">React</strong> and{" "}
          <strong className="text-navy">Next.js</strong>, powered by{" "}
          <strong className="text-navy">Python</strong>,{" "}
          <strong className="text-navy">Django</strong> and{" "}
          <strong className="text-navy">REST APIs</strong>.
          <br />
          I bring clean design and practical functionality together to
          create seamless digital experiences.
        </p>

        <div className="d-flex flex-wrap gap-3">
          <a href="#projects" className="btn btn-primary px-4 py-2">
            View My Projects
          </a>

          <a
            href="/resume.pdf"
            download
            className="btn btn-outline-primary rounded-3 px-3 d-inline-flex align-items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 3v12" />
              <path d="m7 10 5 5 5-5" />
              <path d="M5 16v5h14v-5" />
            </svg>

            Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;