import gsap from "gsap";
import { splitText } from "./splitText";

export function initialFX() {
  document.body.style.overflowY = "auto";
  document.getElementsByTagName("main")[0].classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 1,
  });

  const landingElements = [
    ".landing-info h3",
    ".landing-intro h2",
    ".landing-intro h1"
  ];

  landingElements.forEach(selector => {
    const element = document.querySelector(selector) as HTMLElement;
    if (element) {
      const split = splitText(element, {
        type: "chars,lines",
        linesClass: "split-line",
      });

      gsap.fromTo(
        split.words,
        { opacity: 0, y: 80, filter: "blur(5px)" },
        {
          opacity: 1,
          duration: 1.2,
          filter: "blur(0px)",
          ease: "power3.inOut",
          y: 0,
          stagger: 0.025,
          delay: 0.3,
        }
      );
    }
  });

  const landingH2Info = document.querySelector(".landing-h2-info") as HTMLElement;
  if (landingH2Info) {
    const split = splitText(landingH2Info, {
      type: "chars,lines",
      linesClass: "split-h2",
    });

    gsap.fromTo(
      split.words,
      { opacity: 0, y: 80, filter: "blur(5px)" },
      {
        opacity: 1,
        duration: 1.2,
        filter: "blur(0px)",
        ease: "power3.inOut",
        y: 0,
        stagger: 0.025,
        delay: 0.3,
      }
    );
  }

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      y: 0,
      delay: 0.8,
    }
  );

  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  const textElements = [
    ".landing-h2-info-1",
    ".landing-h2-1",
    ".landing-h2-2"
  ];

  textElements.forEach(selector => {
    const element = document.querySelector(selector) as HTMLElement;
    if (element) {
      splitText(element, {
        type: "chars,lines",
        linesClass: "split-h2",
      });
    }
  });

  // Loop text animations
  const landingH2Info1 = document.querySelector(".landing-h2-info-1") as HTMLElement;
  const landingH2Info2 = document.querySelector(".landing-h2-info") as HTMLElement;
  if (landingH2Info1 && landingH2Info2) {
    LoopText(landingH2Info2, landingH2Info1);
  }

  const landingH21 = document.querySelector(".landing-h2-1") as HTMLElement;
  const landingH22 = document.querySelector(".landing-h2-2") as HTMLElement;
  if (landingH21 && landingH22) {
    LoopText(landingH22, landingH21);
  }
}

function LoopText(Text1: HTMLElement, Text2: HTMLElement) {
  const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
  const delay = 4;
  const delay2 = delay * 2 + 1;

  tl.fromTo(
    Text2.children,
    { opacity: 0, y: 80 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power3.inOut",
      y: 0,
      stagger: 0.1,
      delay: delay,
    },
    0
  )
    .fromTo(
      Text1.children,
      { y: 80 },
      {
        duration: 1.2,
        ease: "power3.inOut",
        y: 0,
        stagger: 0.1,
        delay: delay2,
      },
      1
    )
    .fromTo(
      Text1.children,
      { y: 0 },
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: delay,
      },
      0
    )
    .to(
      Text2.children,
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: delay2,
      },
      1
    );
}
