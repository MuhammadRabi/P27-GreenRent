var swiper = new Swiper(".swiper", {
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    loop: true,
  },
});

//mobile nav

const navBar = document.querySelector("nav");
const navToggle = document.querySelector(".menu-toggle");

navToggle.addEventListener("click", () => {
  navBar.classList.toggle("active");
  navToggle.classList.toggle("active");
});
