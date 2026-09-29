/* =================================================
   ABOUT — FULL STORY
================================================= */

const storyButton = document.querySelector(".story-button");
const fullStory = document.querySelector(".full-story");

if (storyButton && fullStory) {

    storyButton.addEventListener("click", () => {

        fullStory.classList.toggle("open");

        if (fullStory.classList.contains("open")) {

            storyButton.innerHTML =
                'Hide My Full Story <span class="story-arrow">↑</span>';

        } else {

            storyButton.innerHTML =
                'Read My Full Story <span class="story-arrow">↓</span>';

        }

    });

}


/* =================================================
   ANIMATIONS & INTERACTIONS
================================================= */


/* =================================================
   NAVBAR SCROLL EFFECT
================================================= */

const navbar = document.querySelector(".navbar");

function updateNavbar() {

    if (!navbar) return;

    if (window.scrollY > 30) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

}

window.addEventListener("scroll", updateNavbar);

updateNavbar();


/* =================================================
   MOBILE NAVBAR MENU
================================================= */

const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {

    menuButton.addEventListener("click", () => {

        navLinks.classList.toggle("mobile-open");

    });


    /* Close menu after clicking a navigation link */

    navLinks.querySelectorAll("a").forEach((link) => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("mobile-open");

        });

    });

}


/* =================================================
   SCROLL REVEAL
================================================= */

const revealElements = document.querySelectorAll(
    ".about-section, .certificates-section, .skills-section, .projects-section, .github-section, .contact-section, .site-footer"
);

revealElements.forEach((element) => {

    element.classList.add("reveal");

});


/* =================================================
   CARD REVEAL
================================================= */

const revealCards = document.querySelectorAll(
    ".certificate-card, .skill-card, .exploring-item, .project-card, .social-card, .github-profile-card, .github-activity-card"
);

revealCards.forEach((card, index) => {

    card.classList.add("reveal-card");

    card.style.transitionDelay =
        `${(index % 4) * 0.08}s`;

});


/* =================================================
   INTERSECTION OBSERVER
================================================= */

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


document
    .querySelectorAll(".reveal, .reveal-card")
    .forEach((element) => {

        observer.observe(element);

    });


/* =================================================
   BACK TO TOP
================================================= */

const backToTop = document.getElementById("backToTop");

function updateBackToTop() {

    if (!backToTop) return;

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

}

window.addEventListener("scroll", updateBackToTop);

updateBackToTop();


/* =================================================
   BACK TO TOP CLICK
================================================= */

if (backToTop) {

    backToTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}