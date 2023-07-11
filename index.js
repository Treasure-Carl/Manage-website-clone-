const slider = document.querySelector('.slider');
let position = 0;

function moveSlider(){
    position -= 1;
    slider.style.transform = `translateX(${position}px)`

    // Reset the position when the first card is out of view
const firstCard = slider.querySelector('.card:first-child');
const firstCardRect = firstCard.getBoundingClientRect();


if(firstCardRect.right < 0){
    position += firstCardRect.width;
    slider.appendChild(firstCard);
    slider.style.transform = `translateX(${position}px)`;
    }
}

// Start moving the slider every 10 milliseconds.
setInterval(moveSlider,25);
