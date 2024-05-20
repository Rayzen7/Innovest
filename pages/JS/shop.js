// project link
document.addEventListener('DOMContentLoaded', () => {
    const projectImages = document.querySelectorAll('.featured-item img');
    const projectImages1 = document.querySelectorAll('.featured-item2 img');
    const projectImages2 = document.querySelectorAll('.featured-suggest img');
    const projectImages3 = document.querySelectorAll('.suggested-project-wrap img');
    projectImages.forEach (img => {
        img.addEventListener('click', () => {
            const id = img.getAttribute('data-id');
            if (id) {
                window.location.href = `../pages/payment.html?id=${id}`;
            }
        });
    });
    projectImages1.forEach (img => {
        img.addEventListener('click', () => {
            const id = img.getAttribute('data-id');
            if (id) {
                window.location.href = `../pages/payment.html?id=${id}`;
            }
        });
    });
    projectImages2.forEach (img => {
        img.addEventListener('click', () => {
            const id = img.getAttribute('data-id');
            if (id) {
                window.location.href = `../pages/payment.html?id=${id}`;
            }
        });
    });
    projectImages3.forEach (img => {
        img.addEventListener('click', () => {
            const id = img.getAttribute('data-id');
            if (id) {
                window.location.href = `../pages/payment.html?id=${id}`;
            }
        });
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

  // responsive navbar
  document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector('.navbar');
    const listIcon = document.querySelector('.list');
  
    listIcon.addEventListener('click', function () {
        navbar.classList.toggle('active');
    });
  });