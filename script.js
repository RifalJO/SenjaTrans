let currentIndex = 0;
  const slides = document.querySelectorAll('.slide-img');

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  setInterval(nextSlide, 4000); // Ganti slide setiap 4 detik

  document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('navLinks');
    const navbar = document.querySelector('.navbar');

    // Toggle menu mobile
    if (mobileMenu && navLinks) { // Pastikan elemen ada
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            // Menutup menu jika salah satu link diklik (opsional)
            navLinks.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    navLinks.classList.remove('active');
                    mobileMenu.classList.remove('active');
                });
            });
        });
    }

    // Scroll effect for navbar (keeping your existing functionality)
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Slideshow functionality (from previous response)
    const slides = document.querySelectorAll('.slide-img');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Initial display
    showSlide(currentSlide);

    // Change slide every 5 seconds (adjust as needed)
    setInterval(nextSlide, 5000);

    // Fade-in on scroll animation (if you have this JS)
    const fadeInElements = document.querySelectorAll('.fade-in');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeInElements.forEach(element => {
        observer.observe(element);
    });
});

// Scroll Progress Bar
  window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;
    document.getElementById('scrollProgress').style.width = scrollPercent + '%';
  });

  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observe all fade-in elements
  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });

  // Add staggered animation delay to grid items
  document.querySelectorAll('.layanan-item').forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.1}s`;
  });

  document.querySelectorAll('.testimoni-item').forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.2}s`;
  });

  document.querySelectorAll('.keunggulan-poin div').forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.3}s`;
  });

  // Interactive hover effects for service cards
  document.querySelectorAll('.layanan-item').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  });

  // Parallax effect for floating elements
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const floatingShapes = document.querySelectorAll('.floating-shape');
    
    floatingShapes.forEach((shape, index) => {
      const speed = 0.3 + (index * 0.1);
      shape.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
    });
  });

  // Add click effect to CTA buttons
  document.querySelectorAll('.cta').forEach(button => {
    button.addEventListener('click', function(e) {
      let ripple = document.createElement('span');
      ripple.classList.add('ripple');
      this.appendChild(ripple);
      
      let x = e.clientX - e.target.offsetLeft;
      let y = e.clientY - e.target.offsetTop;
      
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });

  // Add ripple effect CSS
  const style = document.createElement('style');
  style.textContent = `
    .cta {
      position: relative;
      overflow: hidden;
    }
    .ripple {
      position: absolute;
      border-radius: 50%;
      background: rgba(255,255,255,0.6);
      transform: scale(0);
      animation: ripple-animation 0.6s linear;
      pointer-events: none;
    }
    @keyframes ripple-animation {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);

  // Dynamic typing effect for hero title (optional enhancement)
  const heroTitle = document.querySelector('.hero-content h1');
  const originalText = heroTitle.textContent;
  
  function typeWriter(element, text, speed = 50) {
    element.textContent = '';
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);
  }

  // Trigger typing effect when page loads
  setTimeout(() => {
    typeWriter(heroTitle, originalText, 80);
  }, 1000);

  // Add loading animation
  window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
      document.body.style.opacity = '1';
    }, 100);
  });

  
 
  
