import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero">
      {/* ===== BACKGROUND BALLOONS ===== */}
      <div className="hero-right">
        <div className="bubble html">Html</div>
        <div className="bubble react">React</div>
        <div className="bubble node">Node.js</div>
        <div className="bubble mongo">MongoDB</div>
        <div className="bubble python">JavaScript</div>
      </div>

      {/* ===== FOREGROUND TEXT ===== */}
      <motion.div
        className="hero-left"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="hero-line"></span>

        <h1>
          Hello, I’m <span>Mayuri Bharti</span><br />
          MERN Full-Stack Developer
        </h1>

        <div className="hero-links">
          EXPLORE • EXPERIENCE • LEARN
        </div>
      </motion.div>
    </section>
  );
};

export default Hero; 