import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";

const contact = {
  email: "sahradap30@gmail.com",
  linkedin: "https://www.linkedin.com/in/sahrada-p/",
  github: "https://github.com/Sahradap",
};

function Contact() {
  return (
    <section id="contact" className="py-5">
      <div className="container">
        <p className="text-primary fw-bold small">LET'S CONNECT</p>

        <h2 className="fw-bold text-navy mb-4">Get in Touch</h2>

        <div className="card bg-white border-0 rounded-4 shadow-sm">
          <div className="card-body p-4 p-md-5">
            <p className="text-secondary mb-4">
              Interested in working together? Get in touch to discuss
              development opportunities or projects.
            </p>

            <div className="row g-4">
              <div className="col-md-6">
                <div className="d-flex align-items-start gap-3">
                  <span className="contact-icon">
                    <FaMapMarkerAlt aria-hidden="true" />
                  </span>

                  <div>
                    <h3 className="h6 fw-bold text-navy mb-1">Location</h3>

                    <p className="text-secondary mb-0">Dubai, UAE</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="d-flex align-items-start gap-3">
                  <span className="contact-icon">
                    <FaEnvelope aria-hidden="true" />
                  </span>

                  <div className="contact-details">
                    <h3 className="h6 fw-bold text-navy mb-1">Email</h3>

                    <a
                      href={`mailto:${contact.email}`}
                      className="text-secondary text-decoration-none"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>
              </div>

              {contact.linkedin && (
                <div className="col-md-6">
                  <div className="d-flex align-items-start gap-3">
                    <span className="contact-icon">
                      <FaLinkedin aria-hidden="true" />
                    </span>

                    <div className="contact-details">
                      <h3 className="h6 fw-bold text-navy mb-1">LinkedIn</h3>

                      <a
                        href={contact.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary text-decoration-none"
                      >
                        {contact.linkedin.replace(/^https?:\/\/(www\.)?/, "")}
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {contact.github && (
                <div className="col-md-6">
                  <div className="d-flex align-items-start gap-3">
                    <span className="contact-icon">
                      <FaGithub aria-hidden="true" />
                    </span>

                    <div className="contact-details">
                      <h3 className="h6 fw-bold text-navy mb-1">GitHub</h3>

                      <a
                        href={contact.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary text-decoration-none"
                      >
                        {contact.github.replace(/^https?:\/\/(www\.)?/, "")}
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
