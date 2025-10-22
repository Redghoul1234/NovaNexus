const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

if(navToggle){
  navToggle.addEventListener('click', () =>{
    navMenu.classList.add('show-menu')
})
}

if(navClose){
  navClose.addEventListener('click', () =>{
    navMenu.classList.remove('show-menu')
})
}

const navLink = document.querySelectorAll('.nav_link')

const linkAction = () =>{
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

const bgHeader = () =>{
  const header = document.getElementById('header')

  this.scrollY >= 50 ? header.classList.add('bg-header')
                     : header.classList.remove('bg-header')
}
window.addEventListener('scroll', bgHeader);
bgHeader();

const swiperServices = new Swiper('.services_swiper', {
 
  loop: true,
  grabCursor: true,
  spaceBetween: 24,
  slidesPerView: 'auto',

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

const scrollUp = () =>{
  const scrollUp = document.getElementById('scroll-up')
  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                     : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp);
scrollUp();

const sections = document.querySelectorAll('section[id]')
const scrollActive = () =>{
  const scrollDown = window.scrollY

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id'),
          sectionsClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']')  

          if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
          }else{
            sectionsClass.classList.remove('active-link')
          }
  })
}
window.addEventListener('scroll', scrollActive);

const sr = ScrollReveal({
  origin: 'top',
  distance: '100px',
  duration: 2500,
  delay: 400,
  // reset: true, // Animation repeat
})

sr.reveal(`.home_content, .services_data, .services_swiper, .footer_container`)
sr.reveal(`.home_image`, {origin: 'bottom', delay: 1000})
sr.reveal(`.about_images, .contact_img`, {origin: 'left'})
sr.reveal(`.about_data, .contact_data`, {origin: 'right'})
sr.reveal(`.projects_card`, {interval : 100})