const images = document.querySelectorAll('[data-src]');

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