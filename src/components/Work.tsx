import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

// Define an interface for work items
interface WorkItem {
  id: number;
  title: string;
  category: string;
  tools: string;
  image: string;
  link: string;
}

const workData: WorkItem[] = [
  {
    id: 1,
    title: "TechThrive System",
    category: "Web Development",
    tools: "JavaScript, TypeScript, React, Next.js",
    image: "/public/images/techthrive.png",
    link: "https://techthrivesystem.com/" // Add your project link here
  },
  {
    id: 2,
    title: "IT-Solutions webpage",
    category: "Web Development",
    tools: "HTML, CSS, JavaScript, tailwindcss",
    image: "/images/it-solutions.png",
    link: "https://it-solutions-chi.vercel.app/" // Add your project link here
  },
  {
    id: 3,
    title: "WavyHomePage",
    category: "Creative Design",
    tools: "HTML, CSS, JavaScript, GSAP",
    image: "/images/wavyhomepage.png",
    link: "https://wavyhomepage.vercel.app/" // Add your project link here
  },
];

const Work = () => {
  useEffect(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number = parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      duration: 40,
      delay: 0.2,
    });
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {workData.map((work) => (
            <a href={work.link} target="_blank" rel="noopener noreferrer" className="work-box" key={work.id}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{work.id.toString().padStart(2, '0')}</h3>
                  <div>
                    <h4>{work.title}</h4>
                    <p>{work.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{work.tools}</p>
              </div>
              <WorkImage image={work.image} alt={work.title} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;