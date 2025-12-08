document.addEventListener('DOMContentLoaded', function () {
    function smoothScrollTo(targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    }

    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            smoothScrollTo(targetId);
        });
    });

    const contactBtn = document.getElementById('scrollToContact');
    if (contactBtn) {
        contactBtn.addEventListener('click', function (e) {
            e.preventDefault();
            smoothScrollTo('contact');
        });
    }

    const createRequestBtn = document.getElementById('scrollToContactFromHero');
    if (createRequestBtn) {
        createRequestBtn.addEventListener('click', function (e) {
            e.preventDefault();
            smoothScrollTo('contact');
        });
    }

    const teamContactBtn = document.getElementById('scrollToContactFromTeam');
    if (teamContactBtn) {
        teamContactBtn.addEventListener('click', function (e) {
            e.preventDefault();
            smoothScrollTo('contact');
        });
    }

    const specLinks = document.querySelectorAll('.specifications__link');
    specLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            smoothScrollTo('contact');
        });
    });

    const heroLearnMoreLink = document.querySelector('.hero__link');
    if (heroLearnMoreLink) {
        heroLearnMoreLink.addEventListener('click', function (e) {
            e.preventDefault();
            smoothScrollTo('specifications');
        });
    }

    const footerLinks = document.querySelectorAll('.footer__link');
    footerLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            smoothScrollTo(targetId);
        });
    });


    window.addEventListener('scroll', function () {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('nav__link--active');
                });

                const activeLink = document.querySelector(`.nav__link[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('nav__link--active');
                }
            }
        });
    });
});

const contactForm = document.querySelector('.contact__form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      city: document.getElementById('city').value,
      phone: document.getElementById('phone').value,
      message: document.getElementById('message').value
    };
    
    contactForm.reset();
  });
}