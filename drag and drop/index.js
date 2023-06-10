const imgBox = document.querySelector('.imgBox');
const whiteBoxes = document.getElementsByClassName('whiteBox');

// Event listeners for draggable element imgBox
imgBox.addEventListener('dragstart', (e) => {
    console.log('DragStart has been triggered');
    e.target.className += ' hold';
    setTimeout(() => {
        e.target.className = 'hide';
    }, 0);

});

imgBox.addEventListener('dragend', (e) => {
    e.target.className = 'imgBox';
});

for (whiteBox of whiteBoxes) {
    whiteBox.addEventListener('dragover', (e) => {
        e.preventDefault();
    });
     //changes the appearance as drag starts
    whiteBox.addEventListener('dragenter', (e) => {
        e.target.className += ' dashed'; 
    })
    //drop the elements in the second container
   whiteBox.addEventListener('drop', (e) => {
        e.target.append(imgBox);
        alert("success");
    })
}
