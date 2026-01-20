import "../assets/css/ContactSection.css";

const ContactSection = () => {
  return (
    <section className="contact-section">
      <h2 className="contact-title">
        Let's <span>Connect</span>
      </h2>

      <p className="contact-subtitle">
        Ready to turn your ideas into reality? Let’s discuss your next project
      </p>

      <div className="contact-grid">
        {/* LEFT INFO */}
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>
            I'm always excited to work on new projects and collaborate with
            amazing people. Whether you need a complete web application or just
            want to discuss an idea, I'm here to help.
          </p>

          <div className="info-item">
            <span className="info-icon email">✉</span>
            <div>
              <strong>Email</strong>
              <p>dev.mayuribharti@gmail.com</p>
            </div>
          </div>

          <div className="info-item">
            <span className="info-icon phone">📞</span>
            <div>
              <strong>Phone</strong>
              <p>+91 9022896203</p>
            </div>
          </div>

          <div className="info-item">
            <span className="info-icon location">📍</span>
            <div>
              <strong>Location</strong>
              <p>Nanded, Maharashtra, India</p>
            </div>
          </div>

          {/* UNIQUE PROFESSIONAL TOUCH */}
          <div className="quick-box">
            <strong>⚡ Quick Response</strong>
            <p>I usually reply within 24 hours. For urgent work, feel free to call.</p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form className="contact-form">
          <div className="row">
            <input type="text" placeholder="Your name" required />
            <input type="email" placeholder="your@email.com" required />
          </div>

          <input type="text" placeholder="Project inquiry" />

          <textarea
            rows="5"
            placeholder="Tell me about your project..."
          ></textarea>

          <button type="submit">🚀 Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
