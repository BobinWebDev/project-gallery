// script.js
window.addEventListener('load', function() {
    const container = document.querySelector('.container');
    const boxes = document.querySelectorAll('.box');
    
    // Adjust the height of boxes to create a masonry effect
    boxes.forEach(box => {
        box.style.height = `${box.querySelector('img').height}px`;
    });
    
    // Adjust on resize
    window.addEventListener('resize', () => {
        boxes.forEach(box => {
            box.style.height = `${box.querySelector('img').height}px`;
        });
    });
});
