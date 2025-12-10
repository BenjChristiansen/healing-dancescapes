const tooltipTitles = {
  heart: {text: "Click Here to Step Into Wellness", url: "index.html"},
  rightArm: {text: "About", url: "about.html"},
  head: {text: "Gallery", url: "gallery.html"},
  back: { text:"Book A Session", url: "contact.html"}, 
  knee: { text:"FAQs", url: "faq.html"},
  leftHand: "",
  leftLeg: "",
  rightFoot: "",
}





document.addEventListener("DOMContentLoaded", function () {
  const tooltip = document.getElementById("tooltip");
  const shapes = document.querySelectorAll(".s0");
  const container = document.querySelector(".logo-container");

  shapes.forEach(shape => {
    if (shape.id === "heart") return;
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
    { count: 4, delay: 0 },
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
  
document.addEventListener("DOMContentLoaded", function() {
  const heartWrapper = document.getElementById("heart-wrapper");

  const heartText = tooltipTitles.heart.text;

  setTimeout(() => {
      heartWrapper.classList.add("pulse");

      const svgText = document.createElementNS("http://www.w3.org/2000/svg", "text");
      svgText.setAttribute("x", "180"); 
      svgText.setAttribute("y", "103");  
      svgText.setAttribute("text-anchor", "middle");
      svgText.setAttribute("dominant-baseline", "middle");
      svgText.classList.add("heart-text");
      svgText.textContent = heartText;
      const svgRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
svgRect.setAttribute("x", 101);  // slightly left of the text
svgRect.setAttribute("y", 92);  // slightly above the text
svgRect.setAttribute("width", 160);  // adjust for text width
svgRect.setAttribute("height", 20); // adjust for text height
svgRect.setAttribute("rx", 4); // rounded corners
svgRect.setAttribute("ry", 4);
svgRect.setAttribute("fill", "#0A3C30"); // button color
svgRect.setAttribute("fill-opacity", "0.7")
svgRect.setAttribute("pointer-events", "none"); // ignore mouse
heartWrapper.appendChild(svgRect);

heartWrapper.addEventListener("click", () => {
  window.location.href = "about.html"; // or tooltipTitles.heart.url if you want
});

      heartWrapper.appendChild(svgText);
  }, 6000); 
});







    /*Display menu if hamburger button clicked*/
 document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menu-toggle");
  const navMenu = document.querySelector("nav ul");

  toggle.addEventListener("click", function () {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
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


// ==============================
// Gallery modal functionality
// ==============================
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".gallery-img");
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const modalClose = document.getElementById("modal-close");

  images.forEach(img => {
    img.addEventListener("click", () => {
      modal.style.display = "flex";
      modalImg.src = img.src;
      modalImg.alt = img.alt;
    });
  });

  modalClose.addEventListener("click", () => {
    modal.style.display = "none";
    modalImg.src = "";
    modalImg.alt = "";
  });

  modal.addEventListener("click", e => {
    if (e.target === modal) {
      modal.style.display = "none";
      modalImg.src = "";
      modalImg.alt = "";
    }
  });
});
