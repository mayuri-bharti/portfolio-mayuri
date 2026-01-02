import "../assets/css/ProjectsSection.css";
import img1 from '../assets/images/image1.png'
import img2 from '../assets/images/clg.png'
import img3 from '../assets/images/image3.png'

const ProjectsSection = () => {
  return (
    <section className="projects-section">
      <h2 className="projects-title">
        Featured <span>Projects</span>
      </h2>

      <p className="projects-subtitle">
        A showcase of real-world, production-ready web applications built using
        modern MERN stack technologies
      </p>

      <div className="projects-grid">
        {/* PROJECT 1 */}
        <div className="project-card">
          <img src={img1} alt="Tekisky Mart" />
          <div className="project-content">
            <h3>Tekisky Mart – E-Commerce Platform</h3>
            <p>
              Scalable e-commerce platform with responsive React UI, role-based
              admin access, and automated order workflows.
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

            <a
              href="https://tekiskymart.com/"
              target="_blank"
              rel="noreferrer"
            >
              🔗 Live Demo
            </a>
          </div>
        </div>

        {/* PROJECT 2 */}
        <div className="project-card">
          <img src={img2} alt="MPGI Website" />
          <div className="project-content">
            <h3>
              Matoshri Pratishthan Group of Institutions (MPGI) – MERN Stack
            </h3>
            <p>
              Fully dynamic multi-institute institutional web application with
              separate admin panels, real-time data management, and cloud-based
              media handling.
            </p>

            <div className="project-tags">
              <span>React</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MongoDB</span>
              <span>AWS S3</span>
              <span>REST APIs</span>
              <span>Admin Panel</span>
            </div>

            <a
              href="https://mpgi.ac.in"
              target="_blank"
              rel="noreferrer"
            >
              🔗 Live Demo
            </a>
          </div>
        </div>

        {/* PROJECT 3 */}
        <div className="project-card">
          <img src={img3} alt="Asmak Muscat International" />
          <div className="project-content">
            <h3>Asmak Muscat International – Corporate Website</h3>
            <p>
              Corporate website built using React.js with reusable components,
              clean UI, and optimized deployment on Vercel.
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
