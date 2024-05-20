// testimonials comment
document.addEventListener('DOMContentLoaded', function() {
    var testimonialsSection = document.getElementById('testimonials-section');
    var hasAnimated = false;

    var elementsToAnimate = [
        { id: 'client-count', target: 100 },
        { id: 'project-count', target: 100 },
        { id: 'cooperation-count', target: 50 }
    ];

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function updateCount(id, target) {
        var element = document.getElementById(id);
        var count = 0;
        var interval = setInterval(function() {
            if (count < target) {
                count++;
                element.textContent = count + '+';
            } else {
                clearInterval(interval);
            }
        },10); // Speed of the counter
    }

    function onScroll() {
        if (isElementInViewport(testimonialsSection) && !hasAnimated) {
            hasAnimated = true;
            elementsToAnimate.forEach(function(item) {
                updateCount(item.id, item.target);
            });
        }
    }

    window.addEventListener('scroll', onScroll);
});
// testimonials end

// project link
document.addEventListener('DOMContentLoaded', () => {
    const projectImages = document.querySelectorAll('.best-project-card img');
    projectImages.forEach(img => {
        img.addEventListener('click', () => {
            const id = img.getAttribute('data-id');
            if (id) {
                window.location.href = `../pages/payment.html?id=${id}`;
            }
        });
    });
});

  // responsive navbar
  document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector('.navbar');
    const listIcon = document.querySelector('.list');
  
    listIcon.addEventListener('click', function () {
        navbar.classList.toggle('active');
    });
  });

// logo animate
window.onbeforeunload = () => {
    window.scrollTo(0, 0);
};

document.addEventListener("DOMContentLoaded", () => {
    const img = document.getElementById("img");
    const loader = document.querySelector(".loader");

    img.style.opacity = 0;
    setTimeout(() => {
        img.style.opacity = 1;
    }, 100);

    window.addEventListener("load", () => {
        setTimeout(() => {
            loader.classList.add("loader-hidden");

            loader.addEventListener("transitionend", () => {
                loader.remove();
            });
        }, 4999);
    });
});
