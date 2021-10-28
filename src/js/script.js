// initializing swiper slider
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

// closing Full screen Nav when pressing Escape Button
document.addEventListener("keyup", (e) => {
  if (e.key === "Escape") {
    navToggle.classList.remove("active");
    navBar.classList.remove("active");
  }
});

// trial

// scroll to top btn

const scrollToTop = document.querySelector(".scroll-to-top");
window.addEventListener("scroll", () => {
  let windowScroll = window.scrollY;
  windowScroll > 700
    ? scrollToTop.classList.add("active")
    : scrollToTop.classList.remove("active");

  let topBar = document.querySelector(".top");

  //if (windowScroll > topBar.offsetTop) {
  // topBar.style.display = "none";
  //}
  //else {
  //  topBar.style.display = "block";
  //}
  toTop(scrollToTop);
});

const toTop = (btn) => {
  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
};
