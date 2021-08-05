// MENU TOGGLE
const navOpen = document.querySelector(".nav-header__menu-open");
const navClose = document.querySelector(".nav-header__menu-close");
const modal = document.querySelector(".nav__modal");

navOpen.addEventListener("click", function () {
    navOpen.classList.toggle("nav-header__menu-open--hide");
    navClose.classList.toggle("nav-header__menu-close--hide");
    modal.classList.toggle("nav__modal--hide");
});
navClose.addEventListener("click", function () {
    navOpen.classList.toggle("nav-header__menu-open--hide");
    navClose.classList.toggle("nav-header__menu-close--hide");
    modal.classList.toggle("nav__modal--hide");
});

window.addEventListener("click", function (event) {
    if (event.target == modal) {
        modal.classList.add("nav__modal--hide");
        navOpen.classList.toggle("nav-header__menu-open--hide");
        navClose.classList.toggle("nav-header__menu-close--hide");
    }
});

// ARROW ROTATE
const navLinks = document.querySelector(".nav-opt__links");
const linksContainer = document.querySelectorAll(".links__container");

navLinks.addEventListener("click", function (object) {
    const id = object.target.dataset.id;

    linksContainer.forEach(function (container) {
        if (container.children[1].id === id) {
            container.children[1].classList.toggle("container__drop-down--hide");
            // light arrow
            container.children[0].firstElementChild.classList.toggle(
                "title__arr--rotate"
            );
            // dark arrow
            container.children[0].lastElementChild.classList.toggle(
                "title__arr--rotate"
            );
            container.children[0].classList.toggle("container__title--active");
        } else {
            //if id is not equal means user click on other selection
            // console.log(container.children[1]);
            container.children[1].classList.add("container__drop-down--hide");
            container.children[0].firstElementChild.classList.remove(
                "title__arr--rotate"
            );
            container.children[0].lastElementChild.classList.remove(
                "title__arr--rotate"
            );
            container.children[0].classList.remove("container__title--active");
        }
    });
});
