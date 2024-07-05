// Smooth Scroll

const links = document.querySelectorAll(".header__button");

links.forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const id = link.getAttribute("href");
        const element = document.querySelector(id);
        window.scroll({
            top: element.offsetTop,
            behavior: "smooth"
        });
    });
});