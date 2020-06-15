const images = document.querySelectorAll('[data-src]');
const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in')

function preloadImage(img) {
    const src = img.getAttribute('data-src');
    if(!src){
        return;
    }

    img.src = src;
}

const observerOptions = {};

const imgObserver = new IntersectionObserver(function (entries, imgObserver){
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        } else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target)
        }
    } )
}, observerOptions)

images.forEach(image => {
    imgObserver.observe(image);
})

const fadeOptions = {
    threshold: 0,
    rootMargin: "0px 0px -100px 0px"
};

const fadeinOnScroll = new IntersectionObserver(function(entries, imgObserver){
entries.forEach(entry => {
    if (!entry.isIntersecting) {
        return;
    } else {
        entry.target.classList.add('appear');
        fadeinOnScroll.unobserve(entry.target);
    }
})
}, fadeOptions);

faders.forEach(fader => {
    fadeinOnScroll.observe(fader);
})

sliders.forEach(slider => {
    fadeinOnScroll.observe(slider);
})