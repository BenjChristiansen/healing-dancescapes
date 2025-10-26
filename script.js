document.addEventListener("DOMContentLoaded", function () {
  const tooltip = document.getElementById("tooltip");
  const shapes = document.querySelectorAll(".s0");
  const container = document.querySelector(".logo-container");

  const tooltipTitles = {
    heart: "Home",
    rightArm: "What I Do",
    head: "",
    back: "Contact Me or View My Resume",
    knee: "Book A Session",
    leftHand: "",
    leftLeg: "",
    rightFoot: ""
  };

  shapes.forEach(shape => {
    shape.addEventListener("mousemove", function (e) {
      const title = tooltipTitles[shape.id];
      if (title) {
        const rect = container.getBoundingClientRect();

        tooltip.style.left = e.clientX - rect.left + 10 + "px";
        tooltip.style.top = e.clientY - rect.top + 10 + "px";
        tooltip.textContent = title;
        tooltip.style.display = "block";
      } else {
        tooltip.style.display = "none";
      }
    });

    shape.addEventListener("mouseleave", function () {
      tooltip.style.display = "none";
    });
  });
});

    /*Display menu if hamburger button clicked*/
 document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menu-toggle");
  const navMenu = document.querySelector("nav ul");

  toggle.addEventListener("click", function () {
    navMenu.classList.toggle("show");
  });
});
