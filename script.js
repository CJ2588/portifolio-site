const navigation = document.querySelector(".nav");
const navToogle = document.querySelector(".imgmenu");
const anchorPoints = document.querySelectorAll(".nav a");

//  code for hambuger menu

navToogle.addEventListener("click", () => {
  const visibility = navigation.getAttribute("data-visible");

  if (visibility === "false") {
    navigation.setAttribute("data-visible", true);
    navToogle.setAttribute("aria-expanded", true);
  } else if (visibility === "true") {
    navigation.setAttribute("data-visible", false);
    navToogle.setAttribute("aria-expanded", false);
  }
});

//code for smooth scrolling

anchorPoints.forEach((anchorPoint) => {
  anchorPoint.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});
