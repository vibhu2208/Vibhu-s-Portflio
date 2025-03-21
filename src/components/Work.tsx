import "./styles/Work.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

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
    image: "/images/techthrive.png",
    link: "https://techthrivesystem.com/"
  },
  {
    id: 2,
    title: "IT-Solutions webpage",
    category: "Web Development",
    tools: "HTML, CSS, JavaScript, tailwindcss",
    image: "/images/it-solutions.png",
    link: "https://it-solutions-chi.vercel.app/"
  },
  {
    id: 3,
    title: "WavyHomePage",
    category: "Creative Design",
    tools: "HTML, CSS, JavaScript, GSAP",
    image: "/images/wavyhomepage.png",
    link: "https://wavyhomepage.vercel.app/"
  },
];

const Work = () => {
  const workSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!workSectionRef.current) return;

    // Ensure section is visible immediately
    workSectionRef.current.style.opacity = "1";
    workSectionRef.current.style.visibility = "visible";
    workSectionRef.current.style.display = "flex";

    // Initial animation
    gsap.from(".work-box", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: workSectionRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });

    // Force a reflow to ensure visibility
    workSectionRef.current.offsetHeight;
  }, []);

  return (
    <section 
      className="work-section" 
      id="work" 
      ref={workSectionRef}
      style={{
        opacity: 1,
        visibility: 'visible',
        display: 'flex'
      }}
    >
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {workData.map((work) => (
            <a 
              href={work.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="work-box" 
              key={work.id}
              style={{
                opacity: 1,
                visibility: 'visible'
              }}
            >
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
              <div className="work-image">
                <img 
                  src={work.image} 
                  alt={work.title} 
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/placeholder.webp';
                  }}
                  style={{ 
                    width: '100%', 
                    height: 'auto',
                    display: 'block',
                    backgroundColor: '#1a1a1a',
                    opacity: 1,
                    visibility: 'visible'
                  }}
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;