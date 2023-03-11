(function () {
  const header = document.querySelector(".header");
  window.onscroll = () => {
    if (window.pageYOffset > 50) {
      header.classList.add("header-active");
    } else {
      header.classList.remove("header-active");
    }
  };
})();

(function () {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".header__nav");
  const close = document.querySelector(".close");
  const overlay = document.querySelector(".header__overlay");
  burger.addEventListener("click", () => {
    menu.classList.add("header__nav_active");
    overlay.classList.add("header__overlay_active");
  });

  close.addEventListener("click", () => {
    menu.classList.remove("header__nav_active");
    overlay.classList.remove("header__overlay_active");
  });

  overlay.addEventListener("click", () => {
    menu.classList.remove("header__nav_active");
    overlay.classList.remove("header__overlay_active");
  });
})();
