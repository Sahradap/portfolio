import { useEffect, useState } from "react";

function ProjectGallery({ images, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((index) => (index + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [paused, images.length]);

  function previousImage() {
    setCurrentIndex(
      (index) => (index - 1 + images.length) % images.length
    );
  }

  function nextImage() {
    setCurrentIndex((index) => (index + 1) % images.length);
  }

  if (!images.length) return null;

  return (
    <div
      className="project-gallery"
      role="group"
      aria-label={`${title} screenshots`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setPaused(false);
        }
      }}
    >
      <div className="project-preview">
        <img
          src={images[currentIndex]}
          alt={`${title} — screenshot ${currentIndex + 1}`}
          className="project-screenshot"
          loading="lazy"
        />

        {images.length > 1 && (
          <>
            <button
              type="button"
              className="project-arrow project-arrow-left"
              onClick={previousImage}
              aria-label={`Previous screenshot of ${title}`}
            >
              ‹
            </button>

            <button
              type="button"
              className="project-arrow project-arrow-right"
              onClick={nextImage}
              aria-label={`Next screenshot of ${title}`}
            >
              ›
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="project-gallery-controls">
          <div className="project-dots">
            {images.map((image, index) => (
              <button
                key={`${image}-${index}`}
                type="button"
                className={`project-dot ${
                  currentIndex === index ? "active" : ""
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Show screenshot ${index + 1} of ${title}`}
                aria-current={
                  currentIndex === index ? "true" : undefined
                }
              />
            ))}
          </div>

          <div className="text-center mt-2">
            <span className="project-image-count">
              {currentIndex + 1} / {images.length}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectGallery;