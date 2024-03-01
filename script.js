window.addEventListener("scroll", setActiveLink);

const menuLinks = document.querySelectorAll(".menu-link");
menuLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const href = link.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
    });
  });
});

function setActiveLink() {
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.clientHeight;
    if (
      window.pageYOffset >= top - height / 2 &&
      window.pageYOffset < top + height / 2
    ) {
      const id = section.getAttribute("id");
      const menuLink = document.querySelector(`.menu-link[href="#${id}"]`);
      menuLinks.forEach((link) => {
        link.classList.remove("text-blue-500");
      });
      menuLink.classList.add("text-blue-500");
    }
  });
}
