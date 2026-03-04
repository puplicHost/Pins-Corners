document.addEventListener('DOMContentLoaded', () => {
    // Scroll Animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

    // Logo Fade In Animation
    const logo = document.querySelector('.logo-link');
    if (logo) {
        logo.style.opacity = '0';
        logo.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            logo.style.transition = 'opacity 500ms ease, transform 500ms ease';
            logo.style.opacity = '1';
            logo.style.transform = 'translateY(0)';
        }, 100);
    }

    // Nav Slide Down
    const navUl = document.querySelector('nav ul');
    if (navUl) {
        navUl.style.opacity = '0';
        navUl.style.transform = 'translateY(-10px)';
        setTimeout(() => {
            navUl.style.transition = 'opacity 500ms ease 200ms, transform 500ms ease 200ms';
            navUl.style.opacity = '1';
            navUl.style.transform = 'translateY(0)';
        }, 100);
    }

    // Nav Toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('open');
            navMenu.classList.toggle('open');
            document.body.classList.toggle('no-scroll');
        });
    }

    // Video Gallery Hover Play
    document.querySelectorAll('.video-item, .video-card-modern').forEach(item => {
        const video = item.querySelector('video');
        if (video) {
            item.addEventListener('mouseenter', () => {
                video.style.opacity = '1';
                video.play();
            });
            item.addEventListener('mouseleave', () => {
                video.pause();
                video.currentTime = 0;
            });
            item.addEventListener('click', () => {
                const videoSrc = video.querySelector('source').getAttribute('src');
                window.open(videoSrc, '_blank');
            });
        }
    });

    // Image Load Fade-in
    const galleryImages = document.querySelectorAll('.photo-item img');
    galleryImages.forEach(img => {
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', () => {
                img.classList.add('loaded');
            });
        }
    });
});
