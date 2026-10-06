const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        if (navMenu.classList.contains("active")) {
            menuBtn.textContent = "✕";
        } else {
            menuBtn.textContent = "☰";
        }

    });

}


// ========================================
// FECHAR MENU AO CLICAR EM UM LINK
// ========================================

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        menuBtn.textContent = "☰";

    });

});


// ========================================
// ANIMAÇÃO DOS ELEMENTOS
// ========================================

const animatedElements = document.querySelectorAll(
    ".service-card, .professional-card, .step, .about-text, .about-image, .hero-text, .hero-image"
);

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


animatedElements.forEach((element) => {

    element.classList.add("reveal");

    observer.observe(element);

});


// ========================================
// ANO AUTOMÁTICO
// ========================================

const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}


// ========================================
// HEADER AO ROLAR A PÁGINA
// ========================================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 5px 25px rgba(53, 77, 67, 0.08)";

    } else {

        header.style.boxShadow = "none";

    }

});


// ========================================
// SCROLL SUAVE
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});