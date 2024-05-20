// parallax
const isigambar = document.getElementById('isigambar')

window.addEventListener('scroll' , () => {

    let value = window.scrollY
    console.log(value) 
    isigambar.style.transform= 'translate(0, -'+value+'px)'
})

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