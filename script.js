document.addEventListener("DOMContentLoaded", function () {
    const tooltip = document.getElementById("tooltip");
    const shapes = document.querySelectorAll(".s0");
  
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
          tooltip.style.left = e.pageX + 10 + "px";
          tooltip.style.top = e.pageY + 10 + "px";
          tooltip.textContent = ` ${title}`;
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
  ``