$(document).ready(function () {
    console.clear();

    var processGraphs = document.querySelectorAll('.process polygon');
    var processDetails = document.querySelectorAll('.process-details > div');
    var delay;

    var processGraphMouseover = function (event) {
        for (var pg = 0, pgl = processGraphs.length; pg < pgl; pg++) {
            if (processGraphs[pg] === event.target && event.type === 'mouseover') {
                processGraphs[pg].style.opacity = 1;
            } else {
                processGraphs[pg].style.opacity = 0.5;
            }
        }
        for (var pd = 0, pdl = processDetails.length; pd < pdl; pd++) {
            if (processDetails[pd].classList.contains(event.target.getAttribute('class')) && event.type === 'mouseover') {
                processDetails[pd].style.opacity = 1;
            } else {
                processDetails[pd].style.opacity = 0.5;
            }
        }
    };

    var processGraphMouseout = function (event) {
        for (var pg = 0, pgl = processGraphs.length; pg < pgl; pg++) {
            processGraphs[pg].removeAttribute('style');
        }
        for (var pd = 0, pdl = processDetails.length; pd < pdl; pd++) {
            processDetails[pd].removeAttribute('style');
        }
    };

    for (var pg = 0, pgl = processGraphs.length; pg < pgl; pg++) {
        processGraphs[pg].addEventListener('mouseover', processGraphMouseover);
        processGraphs[pg].addEventListener('mouseout', processGraphMouseout);
    }

});


window.addEventListener("load", event => {

    var swiperWrapper = document.querySelector('.swiper-wrapper');

    /* The Team */
    var team = [{
        name: "Haider Shah",
        role: "Audit Senior at Deloitte",
        desc: "Business Analytics at DePaul University, Chicago IL.",
        photo: "/images/Haider.jpg",
    },
    {
        name: "Zeeshan Ali",
        role: "Audit Senior at Deloitte",
        desc: "Accounting and Finance at Augustana College, Rock Island IL",
        photo: "/images/zeeshan.jpg",
    },
    {
        name: "Shayan Nadeem",
        role: "Middle School Teacher in Chicago",
        desc: "Education Major at Knox College, Galesburg IL.",
        photo: "/images/shayaan.jpg",
    },
    {
        name: "Osama Mushtaq",
        role: "Audit Senior at Deloitte",
        desc: "Business Analytics at Trine University, Detroit MI.",
        photo: "/images/osama.jpg",
    },
    {
        name: "Shaheer Ahmad",
        role: "Audit Associate at EY",
        desc: "Accounting and Data Analytics at Augustana College, Rock Island IL.",
        photo: "/images/shaheer.jpg",
    },
    ];

    /* Social Icons */
    var icons = [{
        iWebsite: "https://rafaelalucas.com/dailyui/6/assets/link.svg",
        iEmail: "https://rafaelalucas.com/dailyui/6/assets/email.svg",
        iLinkedin: "https://rafaelalucas.com/dailyui/6/assets/linkedin.svg",
        iDribbble: "https://rafaelalucas.com/dailyui/6/assets/dribbble.svg",
    }];

    var iWebsite = icons[0].iWebsite,
        iEmail = icons[0].iEmail,
        iLinkedin = icons[0].iLinkedin;


    /* Function to populate the team members */
    function addTeam() {
        for (let i = 0; i < team.length; i++) {

            /* Variables for the team */
            var name = team[i].name,
                role = team[i].role,
                desc = team[i].desc,
                photo = team[i].photo,
                website = team[i].website,
                email = team[i].email,
                linkedin = team[i].linkedin;

            /* Template for the Team Cards */
            var template = `
                <div class="swiper-slide">
                <div class="card">
                    <span class="bg"></span>
                    <span class="more"></span>
                    <figure class="photo"><img src="${photo}"></figure>
                        <article class="text">
                            <p class="name">${name}</p>
                            <p class="role">${role}</p> 
                            <p class="desc">${desc}</p> 
                        </article>
                    </div>
                </div>`;

            swiperWrapper.insertAdjacentHTML('beforeend', template);
        }
    };


    addTeam();



    /* Swiper Settings */
    var mySwiper = new Swiper(".swiper-container", {
        // General parameters
        direction: "horizontal",
        speed: 800,
        centeredSlides: false,
        centeredSlides: false, // Allow free dragging
        pagination: false, // Disable pagination
        spaceBetween: 40,
        grabCursor: true, // Show grab cursor while dragging

        // Navigation arrows
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        // Responsive breakpoints
        breakpoints: {
            1180: {
                slidesPerView: 2,
                spaceBetween: 40,
                centeredSlides: true,
            },
            799: {
                slidesPerView: 'auto',
                spaceBetween: 20,
                centeredSlides: false, // Allow free dragging
                centeredSlidesBounds: true,
                autoHeight: true,
                touchRatio: 0.8,
                slideToClickedSlide: true,
                pagination: false, // Disable pagination
                dynamicBullets: false,
            },
        },
    });



    /* Show More */

    var btnShow = document.querySelectorAll('.more');



    btnShow.forEach(function (el) {
        el.addEventListener('click', showMore);
    });

    function showMore(event) {
        var card = event.target.closest(".swiper-slide");

        if (card.classList.contains('show-more')) {
            card.classList.remove('show-more');
        } else {
            card.classList.add('show-more')
        }

    }


    /* Social Hover */
    var icon = document.querySelectorAll('.icon');

    icon.forEach(function (el) {
        el.addEventListener("mouseenter", followCursor);

    });


    function followCursor(event) {
        var pointer = event.currentTarget.closest(".swiper-slide").querySelector('.pointer'),
            index = event.currentTarget.dataset.index,
            sizeIcon = (60 * index) + 25;

        pointer.style.transform = `translateX(${sizeIcon}px)`;
    }


    /* end */
});


const jobTitles = ["Engineer", "Artist", "Auditor", "Professor", "Teacher", "Coach", "PhD Candidate", "Chemist", "Data Steward", "Consultant"];
const jobTitleElement = document.getElementById("job-title");
let currentIndex = 0;

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function updateJobTitle() {
    jobTitleElement.textContent = jobTitles[currentIndex];
    jobTitleElement.style.color = getRandomColor(); // Set random color
    currentIndex = (currentIndex + 1) % jobTitles.length;
}

setInterval(updateJobTitle, 3000); // Change job title and color every 4 seconds

//const jobTitles = ["Engineer", "Artist", "Auditor", "Professor", "Teacher", "Coach", "PhD Candidate"];
//const jobTitleElement = document.getElementById("job-title");
//let currentIndex = 0;

//function getRandomColor() {
//    const letters = '0123456789ABCDEF';
//    let color = '#';
//    for (let i = 0; i < 6; i++) {
//        color += letters[Math.floor(Math.random() * 16)];
//    }
//    return color;
//}

//function updateJobTitle() {
//    jobTitleElement.textContent = jobTitles[currentIndex];
//    jobTitleElement.style.color = getRandomColor(); // Set random color
//    currentIndex = (currentIndex + 1) % jobTitles.length;
//}

//setInterval(updateJobTitle, 2000); // Change job title and color every 2 seconds

function smoothScroll(target) {
    var targetElement = document.querySelector(target);

    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

var services = document.querySelectorAll('.service');

// Function to show each service one by one
function showServices(index) {
    if (index < services.length) {
        services[index].style.opacity = '1';
        setTimeout(function () {
            showServices(index + 1);
        }, 500); // Adjust the delay time (in milliseconds) between each section
    }
}

// Initially hide all services
services.forEach(function (service) {
    service.style.opacity = '0';
});

// Trigger the function to show services when the page is loaded
document.addEventListener('DOMContentLoaded', function () {
    showServices(0);
});