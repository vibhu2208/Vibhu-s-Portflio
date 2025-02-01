import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
  <div className="career-container">
    <h2>
      My Career <span>&</span>
      <br /> Experience
    </h2>
    <div className="career-info">
      <div className="career-timeline">
        <div className="career-dot"></div>
      </div>

      <div className="career-info-box">
        <div className="career-info-in">
          <div className="career-role">
            <h4>Technical Trainee</h4>
            <h5>TechThrive System</h5> 
          </div>
          <h3>2025 - Present</h3>
        </div>
        <p>
          Working on cloud-based and AI-driven solutions, contributing to full-stack 
          development and DevOps pipelines. Implementing scalable architectures 
          for high-performance applications.
        </p>
      </div>

      <div className="career-info-box">
        <div className="career-info-in">
          <div className="career-role">
            <h4>Technical Head</h4>
            <h5>Bennett Cloud Computing Club</h5>
          </div>
          <h3>2023 - 2024</h3>
        </div>
        <p>
          Led cloud computing initiatives, conducted workshops on AWS & Google Cloud, 
          and managed the development of the club’s website.
        </p>
      </div>

      <div className="career-info-box">
        <div className="career-info-in">
          <div className="career-role">
            <h4>Technical Head</h4>
            <h5>Bennett Undergraduate Research Society</h5>
          </div>
          <h3>2023 - 2024</h3>
        </div>
        <p>
          Managed research projects, organized tech events, and developed the 
          society’s website, fostering innovation in AI and data science.
        </p>
      </div>
    </div>
  </div>
</div>

  );
};

export default Career;
