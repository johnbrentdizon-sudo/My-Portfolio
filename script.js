  // ------------------ SECTION ANIMATION ------------------
  const sections = document.querySelectorAll(".section");
  const revealSection = () => {
    const trigger = window.innerHeight * 0.85;
    sections.forEach((sec) => {
      const top = sec.getBoundingClientRect().top;
      if (top < trigger) sec.classList.add("visible");
    });
  };
  window.addEventListener("scroll", revealSection);
  revealSection();

  // ------------------ NAV ACTIVE LINK ------------------
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) =>
    link.addEventListener("click", (e) => {
      navLinks.forEach((l) => l.classList.remove("active"));
      e.target.classList.add("active");
    })
  );

  // ------------------ SKILL CAROUSEL ------------------
  const track = document.querySelector(".skills-track");
  const leftArrow = document.querySelector(".skill-arrow.left");
  const rightArrow = document.querySelector(".skill-arrow.right");

  if (track && leftArrow && rightArrow) {
    let scrollPos = 0;
    const cardWidth = 240;

    rightArrow.addEventListener("click", () => {
      scrollPos -= cardWidth;
      if (Math.abs(scrollPos) >= track.scrollWidth / 1.3) scrollPos = 0;
      track.style.transform = `translateX(${scrollPos}px)`;
    });

    leftArrow.addEventListener("click", () => {
      scrollPos += cardWidth;
      if (scrollPos > 0) scrollPos = -track.scrollWidth / 2;
      track.style.transform = `translateX(${scrollPos}px)`;
    });
  }

  // ------------------ PORTFOLIO FILTER (CLEAN + THEME-MATCHED) ------------------
  const tabs = document.querySelectorAll(".tab-btn");
  const projects = document.querySelectorAll(".project-item");

  function showProjects(filter) {
    projects.forEach((proj) => {
      if (proj.getAttribute("data-type") === filter) {
        proj.style.display = "block";
        proj.classList.add("show");
      } else {
        proj.style.display = "none";
        proj.classList.remove("show");
      }
    });
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      const filter = tab.getAttribute("data-filter");
      showProjects(filter);
    });
  });

  // ✅ Default: Show the first tab (Design) on load
  window.addEventListener("DOMContentLoaded", () => {
    const defaultTab = document.querySelector(".tab-btn.active");
    if (defaultTab) {
      showProjects(defaultTab.getAttribute("data-filter"));
    }
  });
    

  // ------------------ PROFILE FLIP ANIMATION (Enhancement) ------------------
  // Adds a subtle scale effect when hovering over the flip card.
  const flipCard = document.querySelector(".profile-flip-card");
  if (flipCard) {
    flipCard.addEventListener("mouseenter", () => {
      flipCard.style.transition = "transform 0.3s ease";
      flipCard.style.transform = "scale(1.05)";
    });
    flipCard.addEventListener("mouseleave", () => {
      flipCard.style.transform = "scale(1)";
    });
  }


  // Certificate Lightbox Viewer
  const certBoxes = document.querySelectorAll('.cert-card-box');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');

  certBoxes.forEach(box => {
    box.addEventListener('click', () => {
      const img = box.querySelector('.cert-thumb');
      lightboxImg.src = img.src;
      lightbox.classList.add('active');
    });
  });

  lightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
  });

