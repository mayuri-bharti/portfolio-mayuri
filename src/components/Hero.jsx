// const Hero = () => {
//   return (
//     <section className="hero">
//       {/* background blur shapes */}
//       <div className="blur blur-one"></div>
//       <div className="blur blur-two"></div>

//       <div className="hero-content">
//         <span className="hero-badge">🚀 Available for MERN Roles</span>

//         <h1>
//           MERN <span>Full Stack</span> <br /> Developer
//         </h1>

//         <p>
//           I design and build scalable, high-performance web applications
//           using <strong>React</strong>, <strong>Node.js</strong>,
//           <strong> Express</strong>, and <strong>MongoDB</strong>.
//         </p>

//         {/* tech stack pills */}
//         <div className="hero-tech">
//           <span>React</span>
//           <span>Node.js</span>
//           <span>Express</span>
//           <span>MongoDB</span>
//         </div>

//         {/* actions */}
//         <div className="hero-actions">
//           <a href="/projects" className="btn primary">
//             View My Work
//           </a>
//           <a href="/contact" className="btn secondary">
//             Hire Me
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;



const Hero = () => {
  return (
    <section className="hero">
      <div className="blur blur-one"></div>
      <div className="blur blur-two"></div>

      <div className="hero-content">
        <span className="hero-badge">🚀 Available for MERN Roles</span>

        <h1>
          MERN <span>Full Stack</span> <br /> Developer
        </h1>

        <p>
          I design and build scalable, high-performance web applications
          using <strong>React</strong>, <strong>Node.js</strong>,
          <strong> Express</strong>, and <strong>MongoDB</strong>.
        </p>

        <div className="hero-tech">
          <span>React</span>
          <span>Node.js</span>
          <span>Express</span>
          <span>MongoDB</span>
        </div>

        <div className="hero-actions">
          <a href="/projects" className="btn primary">
            View My Work
          </a>

          <a href="/Neha_Sontakke_Resume.pdf" download className="btn resume">
            📄 Download Resume
          </a>

          <a href="/contact" className="btn secondary">
            Hire Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
