let burger = document.querySelector('.burger');

// copie de la nav pour la réécrire dans le side
let navlinks = document.querySelector('nav .site-navigation').cloneNode(true);

// création d'une nav side
let sideWrapper = document.createElement("aside");
sideWrapper.classList.add('burger-reveal');
let sideNav = document.createElement("nav");
sideNav.classList.add('side');
// partie cliquable pour sortir
let clickout = document.createElement("div");
clickout.classList.add('hide-side');

// construction du side
sideWrapper.appendChild(sideNav);
sideWrapper.appendChild(clickout);
sideNav.appendChild(navlinks);
document.body.insertBefore(sideWrapper, document.body.firstChild);

let showSide = document.querySelectorAll('.show-side');
let hideSide = document.querySelectorAll('.hide-side');

// event listeners
showSide.forEach(clicker => {
    clicker.addEventListener('click', function() {
        sideWrapper.classList.add("active");
    });
});
hideSide.forEach(clicker => {
    clicker.addEventListener('click', function() {
        console.log("hello");
        sideWrapper.classList.remove("active");
    });
});