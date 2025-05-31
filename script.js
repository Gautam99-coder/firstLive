const mobileMenu=document.getElementById('mobile-menu');
const navbarMenu=document.querySelector('.navbar-menu');
const navbarToggle=document.querySelector('.navbar-toggle');

navbarToggle.addEventListener('click',()=>{
    navbarMenu.classList.toggle('active');
    navbarToggle.classList.toggle('active');
}
)
const navLinks=document.querySelector('.navbar-links');
navLinks.forEach(link => {
    link.addEventListener('click',()=>{
        navbarMenu.classList.remove('active');
        navbarToggle.classList.remove('active');
    })
});