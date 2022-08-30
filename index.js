// Responsive menu
var isOpen = false;

$('.navbar__toggle-btn').click(function(){
  if(!isOpen) {
    $('.navbar__list').slideToggle(100, function(){
      isOpen = true;
    })

    $('.navbar__toggle-btn').transition({rotate: '90deg'});

  } else {
    $('.navbar__list').slideToggle(100, function(){
      isOpen = false;
    })

    $('.navbar__toggle-btn').transition({rotate: '0deg'});
  }
});

$('.navbar__list--items a').click(function() {
  if(isOpen) {
    
    $('.navbar__list').slideToggle(100, function(){
      isOpen = false;
    })
  
    $('.navbar__toggle-btn').transition({rotate: '0deg'});
  }
});

// Observer that will tell in which section is the user 
// underlining the respective link asociated to their respective
// section

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const id = entry.target.getAttribute('id');
    const navbarLinks = document.querySelector(`.navbar__list--items a[href="#${id}"]`);

    if(entry.isIntersecting) {
      navbarLinks.classList.add('selected');
    } else {
      navbarLinks.classList.remove('selected');
    }

  });
}, {rootMargin: '-30% 0px -70% 0px'});

// Will store an array with all the navbar anchors which their href starts with #
const menuLinks = document.querySelectorAll('.navbar__list--items a[href^="#"]');

menuLinks.forEach((menuLink) => {
  const hash = menuLink.getAttribute('href');
  const target = document.querySelector(hash);

  if(target) {
    observer.observe(target);
  }
});