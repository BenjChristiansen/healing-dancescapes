document.addEventListener("DOMContentLoaded", function () {
  const tooltip = document.getElementById("tooltip");
  const shapes = document.querySelectorAll(".s0");
  const container = document.querySelector(".logo-container");

  const tooltipTitles = {
    heart: {text: "Home", url: "index.html"},
    rightArm: {text: "What I Do", url: "about.html"},
    head: "",
    back: { text:"Contact Me", url: "contact.html"}, 
    knee: { text:"Book A Session", url: "offerings.html"},
    leftHand: "",
    leftLeg: "",
    rightFoot: "",
  };
  

  shapes.forEach(shape => {
    shape.addEventListener("mousemove", function (e) {
      const data = tooltipTitles[shape.id];
      if (data && data.text) {
        const rect = container.getBoundingClientRect();

        tooltip.style.left = e.clientX - rect.left + 10 + "px";
        tooltip.style.top = e.clientY - rect.top + 10 + "px";
        tooltip.textContent = data.text;
        tooltip.style.display = "block";
      } else {
        tooltip.style.display = "none";
      }
    });

    shape.addEventListener("mouseleave", function () {
      tooltip.style.display = "none";
    });
    shape.addEventListener("click", function () {
      const data = tooltipTitles[shape.id];
      if (data && data.url) {
        window.location.href = data.url;
      }
    });
  });
});
//ADDED FOR ANIMATION OF H2 UPON PAGE LOAD
document.addEventListener("DOMContentLoaded", function () {
  const heading = document.getElementById("fancy-heading");
  const words = heading.textContent.split(" ");
  heading.textContent = ""; 

  const segments = [
    { count: 3, delay: 0 },
    { count: 4, delay: 2 },
    { count: 1, delay: 3.5 },
    { count: 5, delay: 5 }
  ];

  let wordIndex = 0;

  segments.forEach(segment => {
    for (let i = 0; i < segment.count; i++) {
      const span = document.createElement("span");
      span.innerHTML = words[wordIndex] + "&nbsp;";
      span.classList.add("fade-in-word", "oswald-light");
      span.style.transitionDelay = `${segment.delay * 1}s`; // 1s between segments
      heading.appendChild(span);
      wordIndex++;
    }
  });

  // Trigger fade-in
  setTimeout(() => {
    document.querySelectorAll(".fade-in-word").forEach(span => {
      span.style.opacity = 1;
    });
  }, 100);
});
  

    /*Display menu if hamburger button clicked*/
 document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menu-toggle");
  const navMenu = document.querySelector("nav ul");

  toggle.addEventListener("click", function () {
    navMenu.classList.toggle("show");
  });
});

const headshot = document.getElementById('headshot');
const originalSrc = 'site-assets/headshot.jpeg';
const hoverSrc = 'site-assets/fallingintogreen.png';

const preload = new Image();
preload.src = hoverSrc;

headshot.addEventListener('mouseenter', () => {
  headshot.src = hoverSrc;
});

headshot.addEventListener('mouseleave', () => {
  headshot.src = originalSrc;
});
