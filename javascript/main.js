document.addEventListener("DOMContentLoaded", function() {

    const header = document.querySelector('.header');
    const hero = document.querySelector('.hero');
    const heroBottom = hero.offsetTop + hero.offsetHeight;

    function stickyNavigation() {
        console.log('scrollY = ' + window.scrollY);

        if (window.scrollY >= heroBottom) {
            header.classList.add('fixed-header');
        } else {
            header.classList.remove('fixed-header');
        }
    }

    window.addEventListener('scroll', stickyNavigation);

    let hamburger = document.querySelector('.hamburger');
    let mobileNav = document.querySelector('.mobile-nav');
    let root = document.querySelector('html');
    let mobileNavItem = document.querySelectorAll('.mobile-nav .nav-item');

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('open');
        mobileNav.classList.toggle('open');
        root.classList.toggle('nav-open');
    })

    mobileNavItem.forEach(function(navItem, index) {
        navItem.addEventListener('click', function () {
            hamburger.classList.remove('open');
            mobileNav.classList.remove('open');
            root.classList.remove('nav-open');
        })
    })

    function email() {
        let part1 = "shughes4246";
        let part2 = Math.pow(2,6);
        let part3 = String.fromCharCode(part2);
        let part4 = "googlemail.com";

        let html = "<a class='contact-url' href=" + "mai" + "lto" + ":" + ">" + part1 + part3 + part4 + "</a>.";
        let email = document.querySelector('.email-link .contact-info');

        email.insertAdjacentHTML( 'beforeend', html)
    }

    email();

    let skillsAll = document.querySelector('.skills-list .filter.all');
    let skillsHTML = document.querySelector('.skills-list .filter.html');
    let skillsVue = document.querySelector('.skills-list .filter.vue');
    let portfolio = document.querySelector('.portfolio-wrapper');
    

    skillsHTML.addEventListener('click', function () {
        portfolio.classList.remove('vue');
        portfolio.classList.add('html');
    })

    skillsVue.addEventListener('click', function () {
        portfolio.classList.remove('html');
        portfolio.classList.add('vue');
    })

    skillsAll.addEventListener('click', function () {
        portfolio.classList.remove('vue');
        portfolio.classList.remove('html');
    })
  });