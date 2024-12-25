let links = document.querySelectorAll(`.nav-link`);
let bars = document.querySelector(`.navbar-toggler`);
let show = document.querySelector(`.navbar-collapse`);
let li = document.querySelectorAll(`.projects .container ul li`);

let searchIcon = document.querySelector(".search");
let searchInput = document.querySelector(".searchInput");

searchIcon.addEventListener("click", () => {
  searchInput.classList.toggle("showInput");
});

links.forEach((i) => {
  i.addEventListener(`click`, () => {
    bars.setAttribute(`aria-expanded`, `false`);
    show.classList.remove(`show`);
    links.forEach(function (e) {
      e.classList.remove(`active`);
    });
    i.classList.add(`active`);
  });
});

li.forEach((i) => {
  i.addEventListener(`click`, () => {
    li.forEach((e) => {
      e.classList.remove(`active`);
      e.classList.remove(`rounded-pill`);
    });
    i.classList.add(`active`);
    i.classList.add(`rounded-pill`);
  });
});
