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
        role: "Depaul University",
        desc: "Originally from Pakistan, pursued his dream of studying business analytics in the United States with our support. After successfully completing his Master's at DePaul University, he seamlessly transitioned into the professional world. Haider is now thriving in his career at Deloitte, showcasing both his educational achievements and professional dedication.",
        photo: "/images/Haider.jpg",
    },
    {
        name: "Zeeshan Ali",
        role: "Augustana College",
        desc: "Zeeshan Ali, originally from Chitral, Pakistan, received valuable support from HigherEd Global to pursue his academic aspirations at Augustana College, where he majored in Accounting and Finance. Zeeshan's commitment to practical learning is demonstrated through internships at UP Key and the YMCA. Today, he stands as an Audit and Assurance Senior at Deloitte, showcasing a seamless blend of academic excellence and professional success.",
        photo: "/images/zeeshan.jpg",
    },
    {
        name: "Shayan Nadeem",
        role: "Knox College",
        desc: "Shayan Nadeem, originally from Lahore, Pakistan, found educational support through HigherEd Global to pursue his passion at Knox College. Majoring in Education, Shayan's commitment to his field is evident in his current role as an Archives Assistant at Knox College. His journey reflects a seamless transition from academic pursuit to a meaningful professional role, showcasing his dedication and expertise in the field of education.",
        photo: "/images/shayaan.jpg",
    },
    {
        name: "Osama Mushtaq",
        role: "Tryine University",
        desc: "Osama Mushtaq, originally from Peshawar, Pakistan, pursued his MS in Business Analytics at Trine University with the assistance of HigherEd Global. With prior experience as an Accounting Intern at Boost Mobile, he now excels in his role as an Audit & Assurance Senior Assistant at Deloitte, showcasing a seamless integration of academic and professional achievements.",
        photo: "/images/osama.jpg",
    },
    {
        name: "Shaheer Ahmad",
        role: "Augustana College",
        desc: "Shaheer Ahmed, originally from Kashmir, Pakistan, pursued a BBA with a focus on Accounting and Data Analytics at Augustana College with the support of HigherEd Global. With a background as an Internal Audit Intern at Royal Neighbors of America, Shaheer now thrives as Assurance Staff at EY, demonstrating a seamless integration of academic knowledge and professional success.",
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
                        
                        <div class="social">
                        <span class="pointer"></span>
                        <div class="icons">
                            <a class="icon" href="${website}" target="_blank" data-index="0"><img src="${iWebsite}"></a>
                            <a class="icon" href="${email}" target="_blank" data-index="1"><img src="${iEmail}"></a>
                            <a class="icon" href="${linkedin}" target="_blank" data-index="2"><img src="${iLinkedin}"></a>
                            </div>
                            </div>
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

const jobTitles = ["Engineer", "Artist", "Auditor", "Professor", "Teacher", "Coach", "PhD Candidate"];
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

setInterval(updateJobTitle, 2000); // Change job title and color every 2 seconds

function smoothScroll(target) {
    var targetElement = document.querySelector(target);

    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

//var services = document.querySelectorAll('.service');

//// Function to show each service one by one
//function showServices(index) {
//    if (index < services.length) {
//        services[index].style.opacity = '1';
//        setTimeout(function () {
//            showServices(index + 1);
//        }, 500); // Adjust the delay time (in milliseconds) between each section
//    }
//}

//// Initially hide all services
//services.forEach(function (service) {
//    service.style.opacity = '0';
//});

//// Trigger the function to show services when the page is loaded
//document.addEventListener('DOMContentLoaded', function () {
//    showServices(0);
//});