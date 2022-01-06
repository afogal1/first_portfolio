//javascript for navigation bar effects on scroll 
window.addEventListener("scroll", function(){
    const header = this.document.querySelector("header");
    header.classList.toggle('sticky', window.scrollY > 0);
});

