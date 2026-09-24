/* =========================
   LOADER
========================= */

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    setTimeout(function () {
        loader.classList.add("hide");
    }, 700);

});


/* =========================
   TYPING ANIMATION
========================= */

const typingElement = document.getElementById("typing");

const words = [
    "Web Developer",
    "Java Programmer",
    "Creative Student",
    "Future IT Engineer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typingAnimation() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typingAnimation, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }

        }
    }

    const speed = deleting ? 50 : 100;

    setTimeout(typingAnimation, speed);
}

typingAnimation();


/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


/* Close menu after clicking */
document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(
    ".section-title, .about-container, .skill-card, .project-card, .contact-container"
);

revealElements.forEach(function (element) {
    element.classList.add("reveal");
});


function revealOnScroll() {

    const windowHeight = window.innerHeight;

    revealElements.forEach(function (element) {

        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


/* =========================
   SKILL BAR ANIMATION
========================= */

const skillSection =
    document.getElementById("skills");

let skillsAnimated = false;

function animateSkills() {

    const sectionTop =
        skillSection.getBoundingClientRect().top;

    if (
        sectionTop < window.innerHeight - 100 &&
        !skillsAnimated
    ) {

        document.querySelectorAll(".skill-progress")
            .forEach(function (bar) {

                const width =
                    bar.getAttribute("data-width");

                bar.style.width = width;

            });

        skillsAnimated = true;
    }

}

window.addEventListener("scroll", animateSkills);


/* =========================
   TOP BUTTON
========================= */

const topButton =
    document.getElementById("top-btn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 500) {

        topButton.classList.add("show");

    } else {

        topButton.classList.remove("show");

    }

});


topButton.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================
   CONTACT FORM
========================= */

const contactForm =
    document.getElementById("contact-form");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    alert(
        "Thank you, " + name +
        "! Your message has been received."
    );

    contactForm.reset();

});


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections =
    document.querySelectorAll("section");

const navItems =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function () {

    let current = "";

    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(function (link) {

        link.style.color = "";

        if (
            link.getAttribute("href") === "#" + current
        ) {

            link.style.color = "#00e5ff";

        }

    });

});


/* =========================
   PROJECT CARD TILT
========================= */

const cards =
    document.querySelectorAll(".project-card");

cards.forEach(function (card) {

    card.addEventListener("mousemove", function (event) {

        const rect =
            card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateX =
            (y - centerY) / 20;

        const rotateY =
            (centerX - x) / 20;

        card.style.transform =
            `perspective(700px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-10px)`;

    });


    card.addEventListener("mouseleave", function () {

        card.style.transform =
            "perspective(700px) rotateX(0) rotateY(0) translateY(0)";

    });

});