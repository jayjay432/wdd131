const hamburgerMenu = document.querySelector('#hamburger-menu');
const copyrightYear = document.querySelector('#copyright-year');
const lastModified = document.querySelector('#last-modified');

const todayDate = new Date();

copyrightYear.innerHTML = todayDate.getFullYear();
lastModified.innerHTML = todayDate.toLocaleString()

hamburgerMenu.addEventListener('click', toggleMenu);

function toggleMenu() {
    const nav = document.querySelector("nav");

    hamburgerMenu.classList.toggle("show-menu");
    hamburgerMenu.classList.toggle("remove-menu");

    nav.classList.toggle('open');

}

console.log(lastModified);