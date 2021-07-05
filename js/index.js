// burger menu toggle to cross
const navToggle = document.querySelector(".nav-toggle");
const navClose = document.querySelector(".nav-close");
const navBar = document.querySelector(".nav-bar");

navToggle.addEventListener("click", function () {
    navToggle.classList.toggle("hide");
    navClose.classList.add("show");
    navClose.classList.remove("hide");
    navBar.classList.toggle("hide");
});
navClose.addEventListener("click", function () {
    navToggle.classList.toggle("hide");
    navClose.classList.remove("show");
    navClose.classList.add("hide");
    navBar.classList.toggle("hide");
});

// Nav Bar links with arrow rotation
const navLinks = document.querySelector(".nav-links");
const linksContainer = document.querySelectorAll(".links-container");

navLinks.addEventListener("click", function (object) {
    const id = object.target.dataset.id;

    linksContainer.forEach(function (container) {
        if (container.children[1].id === id) {
            container.children[1].classList.toggle("hide");
            // light arrow
            container.children[0].firstElementChild.classList.toggle(
                "rotate-arrow"
            );
            // dark arrow
            container.children[0].lastElementChild.classList.toggle(
                "rotate-arrow"
            );
            container.children[0].classList.toggle("linktitle-active");
        } else {
            //if id is not equal means user click on other selection
            // console.log(container.children[1]);
            container.children[1].classList.add("hide");
            container.children[0].firstElementChild.classList.remove(
                "rotate-arrow"
            );
            container.children[0].lastElementChild.classList.remove(
                "rotate-arrow"
            );
            container.children[0].classList.remove("linktitle-active");
        }
    });
});
