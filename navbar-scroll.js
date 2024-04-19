document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 0) {
        var navbar = document.getElementById('navbar');
        navbar.classList.add('fixed-top');
        navbar.classList.add('navbar-custom-scroll');
        navbar.classList.remove('navbar-custom');

        const navlinks = document.getElementsByClassName("navigation-link");
        for (let i = 0; i < navlinks.length; i++) {
          navlinks[i].classList.remove('navigation-link-top');
          navlinks[i].classList.add('navigation-link-scroll');
        }
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        var navbar = document.getElementById('navbar');
        navbar.classList.remove('fixed-top');
        navbar.classList.remove('navbar-custom-scroll');
        navbar.classList.add('navbar-custom');

        const navlinks = document.getElementsByClassName("navigation-link");
        for (let i = 0; i < navlinks.length; i++) {
          navlinks[i].classList.add('navigation-link-top');
          navlinks[i].classList.remove('navigation-link-scroll');
        }

         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 