// CAROUSEL CODE
let w = window.innerWidth;
var i, interval; 
var slides = document.getElementsByClassName('slides');
var slideIndex = 0;
var prevSlide = slideIndex - 1;
var nextSlide = slideIndex + 1;

var ULdots = document.getElementById('dots');
ULdots.addEventListener('click', (e) => {
    if (e.target && e.target.nodeName == 'I')
        switch (e.target.id){
            case 'd1': slideIndex = 0;
            break;
            case 'd2': slideIndex = 1;
            break;
            case 'd3': slideIndex = 2;
            break;
        };   
        thisSlide();
});

function thisSlide(){
    w = window.innerWidth;
    // turn move all other slides to the side
    // slide the in the desired slide
    for (var i = 0; i < slides.length; i++){
        slides[i].style.transitionDuration = '0.7s';
        slides[i].style.left = -w + 'px';
    }

    slides[slideIndex].style.transitionDuration = '0.7s';
    slides[slideIndex].style.left = '0px';

    dotMaint();
}

var left = document.getElementById('left');
left.addEventListener('click', scrollLeft);

var right = document.getElementById('right');
right.addEventListener('click', scrollRight);

function scrollLeft(){
    var w = window.innerWidth;
    // scroll current slide to the right
    slides[slideIndex].style.transitionDuration = '.7s';
    slides[slideIndex].style.left = w + 'px';
    
    // decrement the slideIndex
    // take into account slides range
    slideIndex = slideIndex - 1;
    if (slideIndex < 0)
        slideIndex = 2;

    // adjust previous slide index
    prevSlide = slideIndex - 1;
    if (prevSlide < 0)
        prevSlide = 2;

    // slide new slide into place
    slides[slideIndex].style.transitionDuration = '.7s';
    slides[slideIndex].style.left = '0px';

    // move the previous slide into position
    slides[prevSlide].style.transitionDuration = '0s';
    slides[prevSlide].style.left = -w + 'px';

    dotMaint();
    }

function scrollRight(){
    var w = window.innerWidth;
    // scroll current slide to the left
    slides[slideIndex].style.transitionDuration = '.7s';
    slides[slideIndex].style.left = -w + 'px';

    // increment the slideIndex
    // take into account slides range
    slideIndex = slideIndex + 1;
    if (slideIndex > 2)
        slideIndex = 0;

    // adjust next slide index
    nextSlide = slideIndex + 1;
    if (nextSlide > 2)
        nextSlide = 0;

    // slide new slide into place
    slides[slideIndex].style.transitionDuration = '.7s';
    slides[slideIndex].style.left = '0px';

    // move the next slide into position
    // slide it into place
    slides[nextSlide].style.transitionDuration = '0s';
    slides[nextSlide].style.left = w + 'px';

    dotMaint();
}

function dotMaint(){
    const dots = document.getElementsByClassName('fa-circle');
    for (var i = 0; i < dots.length; i++){
        // dim all dots
        dots[i].style.color = '#ccc';
    }

    dots[slideIndex].style.color='white';
}

// MENU CODE

