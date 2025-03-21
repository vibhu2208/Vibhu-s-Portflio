import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ParaElement extends HTMLElement {
  anim?: gsap.core.Animation;
  split?: {
    words: HTMLElement[];
    lines: HTMLElement[];
  };
}

gsap.registerPlugin(ScrollTrigger);

// Custom split text implementation
export function splitText(element: HTMLElement, options: { type: string; linesClass: string }) {
  const text = element.textContent || '';
  const words = text.split(' ');
  const lines: string[] = [];
  let currentLine = '';
  
  // Create lines based on element width
  const tempSpan = document.createElement('span');
  tempSpan.style.visibility = 'hidden';
  tempSpan.style.position = 'absolute';
  tempSpan.style.whiteSpace = 'nowrap';
  document.body.appendChild(tempSpan);
  
  words.forEach((word, index) => {
    tempSpan.textContent = currentLine + (currentLine ? ' ' : '') + word;
    if (tempSpan.offsetWidth > element.offsetWidth) {
      lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine += (currentLine ? ' ' : '') + word;
    }
    if (index === words.length - 1) {
      lines.push(currentLine);
    }
  });
  
  document.body.removeChild(tempSpan);
  
  // Create word and line elements
  const wordElements = words.map(word => {
    const span = document.createElement('span');
    span.textContent = word + ' ';
    return span;
  });
  
  const lineElements = lines.map(line => {
    const div = document.createElement('div');
    div.className = options.linesClass;
    div.textContent = line;
    return div;
  });
  
  // Clear and append new elements
  element.innerHTML = '';
  if (options.type.includes('words')) {
    wordElements.forEach(span => element.appendChild(span));
  }
  if (options.type.includes('lines')) {
    lineElements.forEach(div => element.appendChild(div));
  }
  
  return {
    words: wordElements,
    lines: lineElements
  };
}

export default function setSplitText() {
  ScrollTrigger.config({ ignoreMobileResize: true });
  if (window.innerWidth < 900) return;
  const paras: NodeListOf<ParaElement> = document.querySelectorAll(".para");
  const titles: NodeListOf<ParaElement> = document.querySelectorAll(".title");

  const TriggerStart = window.innerWidth <= 1024 ? "top 60%" : "20% 60%";
  const ToggleAction = "play pause resume reverse";

  paras.forEach((para: ParaElement) => {
    para.classList.add("visible");
    if (para.anim) {
      para.anim.progress(1).kill();
      para.split?.words.forEach(word => word.remove());
      para.split?.lines.forEach(line => line.remove());
    }

    para.split = splitText(para, {
      type: "lines,words",
      linesClass: "split-line",
    });

    para.anim = gsap.fromTo(
      para.split.words,
      { autoAlpha: 0, y: 80 },
      {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: para.parentElement?.parentElement,
          toggleActions: ToggleAction,
          start: TriggerStart,
        },
        duration: 1,
        ease: "power3.out",
        y: 0,
        stagger: 0.02,
      }
    );
  });

  titles.forEach((title: ParaElement) => {
    if (title.anim) {
      title.anim.progress(1).kill();
      title.split?.words.forEach(word => word.remove());
      title.split?.lines.forEach(line => line.remove());
    }
    
    title.split = splitText(title, {
      type: "chars,lines",
      linesClass: "split-line",
    });

    title.anim = gsap.fromTo(
      title.split.words,
      { autoAlpha: 0, y: 80, rotate: 10 },
      {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: title.parentElement?.parentElement,
          toggleActions: ToggleAction,
          start: TriggerStart,
        },
        duration: 0.8,
        ease: "power2.inOut",
        y: 0,
        rotate: 0,
        stagger: 0.03,
      }
    );
  });

  ScrollTrigger.addEventListener("refresh", () => setSplitText());
}
