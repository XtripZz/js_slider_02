// get elements
let sliderBackButton = document.getElementById('slider-back-button');
let sliderNextButton = document.getElementById('slider-next-button');
let lineOfImage = document.getElementById('line-of-images');


// add events
sliderBackButton.addEventListener('click', backImage);
sliderNextButton.addEventListener('click', nextImage);

// autoslider
let timer;

function autoSlider() {
    timer = setTimeout(nextImage, 1000);
}

autoSlider();

// listeners and variable for them
let count = 0;

function backImage() {
    count += 128;

    if (count == 128) {
        count = -384;
    }
    
    lineOfImage.style.left = `${count}px`;
}

function nextImage() {
    count -= 128;
    if (count == -512) {
        count = 0;
        // clear for timer
        clearTimeout(timer);
    }

    lineOfImage.style.left = `${count}px`;

    autoSlider();
}