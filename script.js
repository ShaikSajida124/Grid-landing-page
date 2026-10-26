const menuBtn = document.querySelector("#menu-button");
const menuIcon = menuBtn.querySelector("img");
const navBar = document.querySelector("#main-navigation");

menuBtn.addEventListener("click", () => {
  navBar.classList.toggle("toggle-bar");
  const isExpanded = navBar.classList.contains("toggle-bar");
  
  menuBtn.setAttribute("aria-expanded", isExpanded);
  menuBtn.setAttribute("aria-label", isExpanded ? "Close menu" : "Open menu");
  
  menuIcon.src = isExpanded ? "icon-close.svg" : "icon-menu.svg";
  document.documentElement.style.setProperty('--scale', isExpanded ? 'scaleY(1)' : 'scaleY(0)');
});


const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

//countingUp stat numbers 
const statNums = document.querySelectorAll(".stat-number");

function countUp(element, target, suffix, increment) {
  if (prefersReducedMotion) {
    return;
  }
  let count = 0;
  const countInterval = setInterval(()=>{
    count = Math.min(count+increment, target);
    
    if (suffix === "×") {
      element.textContent = `${count}×`;
    } else {
      element.textContent = count.toLocaleString();
    }
    
    if (count >= target) {
      if (suffix === "K") {
        element.textContent = `${count / 1000}K`;
      } else if (suffix === "M") {
        element.textContent = `${count/1000000}M`;
      } 
      clearInterval(countInterval);
    }
    
  }, 100);
}

countUp(statNums[0], 2400000, 'M', 150000);
countUp(statNums[1], 1284, "", 80);
countUp(statNums[2], 38000, 'K', 2000);
countUp(statNums[3], 3.1, '×', 0.9);