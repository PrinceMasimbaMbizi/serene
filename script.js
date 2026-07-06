//service section
window.addEventListener("scroll", () => {

    document.querySelectorAll(".card")
        .forEach(card => {

            const top =
                card.getBoundingClientRect().top;

            if (top < window.innerHeight - 100) {

                card.style.opacity = 1;
                card.style.transform =
                    "translateY(0px)";

            }


        });

});

//Project Section section
function toggleProject(id) {

    document.querySelectorAll('.project-details')
        .forEach(section => {

            section.style.display = 'none';

        });

    const selected = document.getElementById(id);

    if (selected) {

        selected.style.display = 'block';

        const navbarHeight = 100;

        const y =
            selected.getBoundingClientRect().top +
            window.pageYOffset -
            navbarHeight;

        window.scrollTo({
            top: y,
            behavior: 'smooth'
        });

    }
}

//service section
const counters = document.querySelectorAll(".counter");

const runCounters = () => {
    counters.forEach(counter => {
        let target = +counter.getAttribute("data-target");
        let count = 0;
        let speed = target / 100;

        const updateCounter = () => {
            count += speed;

            if (count < target) {
                counter.innerText = Math.ceil(count);
                requestAnimationFrame(updateCounter);
            } else {
                counter.innerText = target + "+";
            }
        };

        updateCounter();
    });
};

window.addEventListener("DOMContentLoaded", runCounters);


function openQuote() {

    document.getElementById("quoteModal")
        .style.display = "flex";
}

function closeQuote() {

    document.getElementById("quoteModal")
        .style.display = "none";
}


function showService(serviceId) {
    alert(serviceId);
}



function showService(serviceId) {

    document.querySelectorAll(".service-section")
        .forEach(section => {
            section.classList.remove("active");
        });

    const selected = document.getElementById(serviceId);

    if (selected) {

        selected.classList.add("active");

        selected.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }
}

//Automatically show the view more in detail part 

const servicesSection =
    document.querySelector("#services");

const serviceCards =
    document.querySelectorAll(".card");

const observer =
    new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                serviceCards.forEach(card => {

                    card.classList.add("attention");
                    card.classList.add("show-overlay");

                });

                setTimeout(() => {

                    serviceCards.forEach(card => {

                        card.classList.remove("show-overlay");

                    });

                }, 3000);

                observer.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.4
    });

observer.observe(servicesSection);

// for project 


const projectsSection =
    document.querySelector("#projects");

const projectCards =
    document.querySelectorAll(".gallery-item");

const projectObserver =
    new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                projectCards.forEach(card => {

                    card.classList.add("attention");
                    card.classList.add("show-overlay");

                });

                setTimeout(() => {

                    projectCards.forEach(card => {

                        card.classList.remove("show-overlay");

                    });

                }, 3000);

                projectObserver.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.4
    });

projectObserver.observe(projectsSection);


serviceCards.forEach(card => {

    card.classList.add("attention");
    card.classList.add("show-overlay");

    setTimeout(() => {
        card.classList.add("attention-finished");
    }, 2500);

});

projectCards.forEach(card => {

    card.classList.add("attention");
    card.classList.add("show-overlay");

    setTimeout(() => {
        card.classList.add("attention-finished");
    }, 2500);

});

const navbar = document.querySelector(".navbar");
const logo = document.querySelector(".logo");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        navbar.classList.add("compact");
        logo.classList.add("hide-logo");

    } else {

        navbar.classList.remove("compact");
        logo.classList.remove("hide-logo");

    }

});