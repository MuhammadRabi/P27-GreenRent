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

// navigation

let navListItems = document.querySelectorAll(".nav__list a");

function scrollToSection(navLinks) {
  navLinks.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      // remove any active class on navLink on click
      navLinks.forEach((item) => item.classList.remove("active"));
      // add active class when clicking a nav link
      e.currentTarget.classList.add("active");
      // smooth scroll to desired section automatically
      let sectionToGo = document.querySelector(e.target.dataset.nav).offsetTop;
      window.scrollTo({
        top: sectionToGo,
        behaviour: "smooth",
      });
      // closing the menuToggle at mobile
      navBar.classList.remove("active");
      navToggle.classList.remove("active");
    });
  });
}

scrollToSection(navListItems);

// scroll to top btn

const scrollToTop = document.querySelector(".scroll-to-top");
window.addEventListener("scroll", () => {
  let windowScroll = window.scrollY;
  windowScroll > 700
    ? scrollToTop.classList.add("active")
    : scrollToTop.classList.remove("active");

  //let topBar = document.querySelector(".top");

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

// product filter

let productlis = document.querySelectorAll(".product-control li");
let products = document.querySelectorAll(".products-container .products-item");

function filterProducts(list) {
  list.forEach((productli) => {
    productli.addEventListener("click", (e) => {
      e.preventDefault();
      list.forEach((listItem) => listItem.classList.remove("active"));
      e.currentTarget.classList.add("active");

      // change the opacity of product item
      products.forEach((product) => {
        product.style.opacity = "10%";
      });

      document
        .querySelectorAll(e.target.dataset.toggle)
        .forEach((img) => (img.style.opacity = "100%"));
    });
  });
}

filterProducts(productlis);
