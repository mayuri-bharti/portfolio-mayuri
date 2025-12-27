import "../assets/css/CTASection.css";

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        {/* LEFT CONTENT */}
        <div className="cta-content">
          <h2>Ready to build something amazing?</h2>
          <p>
            From concept to deployment, I handle every aspect of your project
            with precision and creativity. Let’s turn your vision into reality
            with cutting-edge technology and exceptional user experience.
          </p>

          <div className="cta-buttons">
            <a href="/contact" className="cta-btn primary">
              Start a Project
            </a>
            <a href="/projects" className="cta-btn secondary">
              View Portfolio
            </a>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="cta-visual">
          <span className="dot top"></span>
          <span className="dot bottom"></span>
          <div className="rocket">🚀</div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
