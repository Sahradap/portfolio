function Education() {
  return (
    <section id="education" className="py-2">
      <div className="container">
        <p className="text-primary fw-bold small">EDUCATION</p>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="card sub-card rounded-4 h-100 bg-white border-0 shadow-sm">
              <div className="card-body p-4">
                <h5 className="fw-bold text-primary">
                  M.Tech in Software Engineering
                </h5>

                <p className="mb-1 fw-bold">
                  Cochin University of Science and Technology
                </p>

                <p className="text-secondary mb-1">
                  Kalamassery,Kochi,Kerala
                </p>

                <small className="text-secondary">2013-2015</small>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card sub-card rounded-4 h-100 bg-white border-0 shadow-sm">
              <div className="card-body p-4">
                <h5 className="fw-bold text-primary">
                  B.Tech in Computer Science
                </h5>

                <p className="mb-1 fw-bold">
                  College Of Engineering Trikaripur
                </p>

                <p className="text-secondary mb-1">
                  Cheemeni,Kasargod,Kerala
                </p>

                <small className="text-secondary">2008-2012</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;