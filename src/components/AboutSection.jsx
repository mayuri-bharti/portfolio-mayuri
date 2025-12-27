import "../assets/css/AboutSection.css";

const AboutSection = () => {
  return (
    <section className="about-section">
      <h2 className="about-title">
        About <span>Me</span>
      </h2>

      <p className="about-desc">
        I'm a passionate fullstack developer who transforms complex ideas
        into elegant, high-performance digital solutions. With a focus on
        modern technologies and user-centric design, I build applications
        that make a difference.
      </p>

      <div className="about-cards">
        <div className="about-card">
          <div className="icon blue">{"</>"}</div>
          <h3>Frontend Development</h3>
          <p>React, Next.js, Tailwind CSS, Redux, Bootstrap</p>
        </div>

        <div className="about-card">
          <div className="icon purple">⚡</div>
          <h3>Backend Development</h3>
          <p>Node.js, Express.js, REST APIs, Middleware</p>
        </div>

        <div className="about-card">
          <div className="icon orange">🗄</div>
          <h3>Database Management</h3>
          <p>MongoDB, MySQL, SQL, Cloudinary</p>
        </div>

        <div className="about-card">
          <div className="icon green">🚀</div>
          <h3>Project Leadership</h3>
          <p>Team Management, Architecture Planning</p>
        </div>

        <div className="about-card">
          <div className="icon cyan">💳</div>
          <h3>Payment Integration</h3>
          <p>Razorpay, Secure Transactions</p>
        </div>

        <div className="about-card">
          <div className="icon pink">🎨</div>
          <h3>UI/UX & Animations</h3>
          <p>Framer Motion, Responsive Design</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
