document.addEventListener("DOMContentLoaded", () => {
let observerOptions = {
    root: null,
    threshold: 0.3
};

let allFadeIn = document.querySelectorAll('.fade-in');

let observer = new IntersectionObserver (function( entries,observer){
entries.forEach(entry => {
    if (!entry.isIntersecting){
        return;
    }else{
        entry.target.classList.add('appear');
        observer.unobserve(entry.target);
    }
});

}, observerOptions);

allFadeIn.forEach(fader => {
    observer.observe(fader);
});
});
