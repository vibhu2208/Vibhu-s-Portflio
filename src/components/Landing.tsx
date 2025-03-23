import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              VAIBHAV
              <br />
              <span>KAUSHIK</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>A Creative</h3>
            <h2>Developer & Designer</h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
