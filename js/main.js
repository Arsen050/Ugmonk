console.log("main.js");

const burger = document.querySelector(".burger-mobile");
burger.addEventListener("click", function (e) {
  const mobile_navigation = document.querySelector(
    ".mobile-navigation-wrapper"
  );
  mobile_navigation.classList.toggle("mobile-visiable");
  burger.classList.toggle("absolute");
  burger.classList.toggle("burger-exit");
});
