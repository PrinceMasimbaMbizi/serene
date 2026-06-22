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

//service section
function toggleProject(id) {

    document.querySelectorAll('.project-details')
        .forEach(section => {

            section.style.display = 'none';

        });

    document.getElementById(id).style.display = 'block';
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
    }
}

