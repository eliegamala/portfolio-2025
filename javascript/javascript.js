const switchText = document.getElementById("switch-text");
let isFrontend = true;

setInterval(() => {
    switchText.textContent = isFrontend ? "SOFTWARE" : "FRONTEND";
    isFrontend = !isFrontend;
}, 4000);


// Select elements
const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn'); // New close button
const mobileNav = document.querySelector('.mobile-nav');

// Toggle menu when button is clicked
menuBtn.addEventListener('click', (event) => {
  mobileNav.classList.toggle('show');
  event.stopPropagation(); // Prevent event from bubbling to document
});

// Close menu when clicking outside
document.addEventListener('click', (event) => {
  if (!mobileNav.contains(event.target) && !menuBtn.contains(event.target)) {
    mobileNav.classList.remove('show');
  }
});

// Close menu when selecting a menu option
mobileNav.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    mobileNav.classList.remove('show');
  }
});

// Close menu when clicking the close button (X)
closeBtn.addEventListener('click', () => {
  mobileNav.classList.remove('show');
});




document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container-one-two');
    const title = container.querySelector('.title h1');
    const projectsSection = document.querySelector('.projects-section');
    const projectItems = document.querySelectorAll('.project-item');
    const servicesSection = document.querySelector('.container-four');
    const accordionItems = document.querySelectorAll('.accordion-item');
    const contactSection = document.querySelector('.container-three');
    const contactItems = document.querySelectorAll('.container-three > *');
    let lastScrollY = window.scrollY;


    function handleScroll() {
        const containerTop = container.getBoundingClientRect().top;
        const containerHeight = container.offsetHeight
        const windowHeight = window.innerHeight;
        const projectsSectionTop = projectsSection.getBoundingClientRect().top;
        const servicesSectionTop = servicesSection.getBoundingClientRect().top;
        const contactSectionTop = contactSection.getBoundingClientRect().top;
        const currentScrollY = window.scrollY; // Get the current scroll position
        const scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up'; // Check direction

       // Fade-out effect for container
        const fadeOutStart = containerHeight * 0.1; // Fade start after 40% of the section disappears
       if(containerTop + containerHeight <= fadeOutStart && scrollDirection === 'up'){
           container.classList.add('fade-out');
       }else {
           container.classList.remove('fade-out');
       }


        // Title reveal for container
        if (containerTop <= windowHeight / 2) {
            container.classList.add('title-visible');
        } else {
            container.classList.remove('title-visible');
        }


        //Fade-in and Title reveal effect for projects section
        if(projectsSectionTop <= windowHeight * 0.8){
            projectsSection.classList.add('projects-visible')
        }else {
            projectsSection.classList.remove('projects-visible');
        }
        if (projectsSectionTop <= windowHeight / 2) {
            projectsSection.classList.add('projects-title-visible');
        } else {
            projectsSection.classList.remove('projects-title-visible');
        }

        // Fade-in/out effect for individual project items on every scroll
        projectItems.forEach((item, index) => {
            const itemTop = item.getBoundingClientRect().top;
            if (itemTop <= windowHeight * 0.8) {
                setTimeout(() => {
                    item.classList.add('project-item-visible');
                }, index * 150);
            } else {
                item.classList.remove('project-item-visible');
            }
        });


        // Fade-in and title reveal effect for the services section
        if (servicesSectionTop <= windowHeight * 0.8) {
            servicesSection.classList.add('services-visible');
        }else {
            servicesSection.classList.remove('services-visible');
        }
        if(servicesSectionTop <= windowHeight / 2){
            servicesSection.classList.add('services-title-visible')
        } else{
            servicesSection.classList.remove('services-title-visible')
        }

        // Fade-in effect for individual accordion items
        accordionItems.forEach((item, index) => {
            const itemTop = item.getBoundingClientRect().top;
            if (itemTop <= windowHeight * 0.8) {
                setTimeout(() => {
                    item.classList.add('accordion-item-visible');
                }, index * 150);
            }else {
                item.classList.remove('accordion-item-visible')
            }

        });


        // Fade-out effect and title reveal for the contact section
       const contactFadeStart = windowHeight * 0.2;
        if (contactSectionTop < contactFadeStart && scrollDirection === 'up') { // Only fade out when scrolling up
            contactSection.classList.add('fade-out');
        } else {
            contactSection.classList.remove('fade-out');
        }

        if(contactSectionTop <= windowHeight / 2) {
            contactSection.classList.add('contact-title-visible')
        }else {
            contactSection.classList.remove('contact-title-visible')
        }


        // Fade-in effect for individual contact items
        if(contactSectionTop <= windowHeight * 0.8){
            contactSection.classList.add('contact-items-visible')
        } else {
            contactSection.classList.remove('contact-items-visible')
        }
        lastScrollY = currentScrollY; // Update the last scroll position
    }


    window.addEventListener('scroll', handleScroll);


    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const item = this.parentElement;
            item.classList.toggle('active');
        });
    });
});

// JavaScript to detect scroll and apply fade-in/out effect
document.addEventListener('DOMContentLoaded', () => {
    const projects = document.querySelectorAll('.project');
  
    const fadeInObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, { threshold: 0.5 });  // Trigger when 50% of the element is in view
  
    projects.forEach(project => fadeInObserver.observe(project));
  });
  

