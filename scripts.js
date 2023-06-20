// Define what a x a sized grid I want. Initially 4 x 4

let x  = 10 ;
let x2 = x*x;

// Select the main body
const mainBodyDiv = document.querySelector('.grid-body');
console.log(mainBodyDiv);

//Place divs within the main body
for (let i = 1; i < (x2+1); i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("grid-box");
    newDiv.id = `${i}`;
    mainBodyDiv.appendChild(newDiv);
}

// Select all the grid objects that I want to track

//Let's concentrate on one for now
const trackGrids = document.querySelectorAll(".grid-box");

console.log(trackGrids);

trackGrids.forEach ( function(grid) {

    grid.style.width = `calc(800px / ${x})`;
    grid.addEventListener('mouseenter', function(event) {
    
    // set the color to fade in after 0.2s
    event.target.style.transition = "background-color 0.2s";
    event.target.style.backgroundColor = "purple";

    //reset the colour after a short delay(500ms)
    setTimeout(() => {
        event.target.style.transition = "background-color 2s";
        event.target.style.backgroundColor ="";
    }, 500);
}
,false);
})
