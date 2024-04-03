// NAVIGATION BAR //
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");
/*const link = document.querySelector(".nav-link");*/
const hamburger = document.getElementById('hamburger');
const dropDown = document.querySelector('.dropdown');
const subMenu = document.querySelector('.sub-menu');
const menuLinks = document.querySelector('.menu-links');


hamburger.addEventListener('click', function(e) {
  hamburger.classList.toggle('cross');
});

navToggle.addEventListener("click", function () {
   if (links.classList.contains("show-links")) {
     links.classList.remove("show-links");
     links.classList.remove("extend-navbar");
   } else {
     links.classList.add("show-links");
   }
}); 

dropDown.addEventListener("click", function () {
     if (subMenu.classList.contains("show-dropdown")) {
       subMenu.classList.remove("show-dropdown");
       links.classList.remove("extend-navbar");
       menuLinks.classList.add("active");
    } else {
       subMenu.classList.add("show-dropdown");
       links.classList.add("extend-navbar");
       menuLinks.classList.remove("active");
     }
  });

  document.addEventListener('click', function(event){
    const yourContainer = document.querySelector('nav-links');
    if(!links.contains(event.target)) {
       links.classList.remove("extend-navbar");
    }
 });

 /*let anchorLinks = document.querySelectorAll('.nav-link');
 anchorLinks.addEventListener("click", function (e) {
    links.classList.remove("show-links");
    links.classList.toggle("extend-navbar");
});*/


 // Smooth Scroll
let anchorSelector = '#section a[href^="#"]';
let anchorList = document.querySelectorAll(anchorSelector);

    anchorList.forEach(anchorLink => {
    anchorLink.onclick = function (e) {
      links.classList.toggle('show-links');
      hamburger.classList.toggle('cross');
      subMenu.classList.remove("show-dropdown");
      links.classList.remove("extend-navbar"); 

        e.preventDefault();

        let destination = document.querySelector(this.hash);
        destination.scrollIntoView({
            behavior: 'smooth'
        });
    }
});

// Scroll to top
const showOnPx = 100;
const backToTopButton = document.querySelector(".back-to-top")

const scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden")
  } else {
    backToTopButton.classList.add("hidden")
  }
})

const goToTop = () => {
    document.body.scrollIntoView({
      behavior: "smooth",
    });
  };

  backToTopButton.addEventListener("click", goToTop)







 



