import "../assets/css/ProjectsSection.css";
import img1 from '../assets/images/image1.png'
import img2 from '../assets/images/image.png'
import img3 from '../assets/images/image3.png'

const ProjectsSection = () => {
  return (
    <section className="projects-section">
      <h2 className="projects-title">
        Featured <span>Projects</span>
      </h2>

      <p className="projects-subtitle">
        A showcase of innovative solutions that push the boundaries of web
        development
      </p>

      <div className="projects-grid">
        {/* PROJECT 1 */}
        <div className="project-card">
          <img
            src={img1}
            alt="Tekisky Mart"
          />
          <div className="project-content">
            <h3>Tekisky Mart – E-Commerce Platform</h3>
            <p>
              React-based responsive UI with role-based admin access,
              automated order alerts, and production-ready design.
            </p>

            <div className="project-tags">
              <span>React</span>
              <span>Bootstrap</span>
              <span>CSS</span>
                 <span>Node.js</span>
                 <span>Express.js</span>
              <span>MongoDB</span>
              <span>Admin Panel</span>
            </div>

            <a href="https://tekiskymart.com/" target="_blank" rel="noreferrer">
              🔗 Live Demo
            </a>
          </div>
        </div>

        {/* PROJECT 2 */}
        <div className="project-card">
          <img
            src={img2}
            alt="Jewellery Website"
          />
          <div className="project-content">
            <h3>Jewellery E-Commerce (MERN Stack)</h3>
            <p>
              Full MERN e-commerce platform with secure authentication,
              Twilio notifications, WebRTC, and rich UI animations.
            </p>

            <div className="project-tags">
              <span>React</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MongoDB</span>
              <span>Twilio</span>
              <span>WebRtc</span>
            </div>

            <a
              href="https://jewellwry.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              🔗 Live Demo
            </a>
          </div>
        </div>

        {/* PROJECT 3 */}
        <div className="project-card">
          <img
            src={img3}
            alt="Asmak Muscat"
          />
          <div className="project-content">
            <h3>Asmak Muscat International</h3>
            <p>
              Corporate website built using React.js, Hooks, Bootstrap,
              and deployed on Vercel with GitHub version control.
            </p>

            <div className="project-tags">
              <span>React</span>
              <span>Bootstrap</span>
              <span>GitHub</span>
              <span>Vercel</span>
            </div>

            <a
              href="https://www.asmakmct.com/"
              target="_blank"
              rel="noreferrer"
            >
              🔗 Live Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
