// Define what a x a sized grid I want. Initially 4 x 4.
// Do it this way lets it be dynamic

let x  = 50 ;
let x2 = x*x;

console.log(x);

// Select the grid body
const mainBodyDiv = document.querySelector('.grid-body');
// console.log(mainBodyDiv);

//Function to update the grid based on the new size
function updateGridSize(newX) {

    //Clear the current grid
    mainBodyDiv.innerHTML = "";

    //Update the grid size

    x = newX;
    x2 = x * x;


//Place divs within the grid body
for (let i = 1; i < (x2+1); i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("grid-box");
    newDiv.id = `${i}`;
    mainBodyDiv.appendChild(newDiv);
}

// Select all the grid objects that I want to track
const trackGrids = document.querySelectorAll(".grid-box");
// console.log(trackGrids);

//For each grid object we want to apply a colour to the background after the mouse
//passes over
trackGrids.forEach ( function(grid) {

    //We are making the size of the grid dynamic
    grid.style.width = `calc(800px / ${x})`;


    grid.addEventListener('mouseenter', function(event) {
    
    // set the color to fade in after 0.2s
    event.target.style.transition = "background-color 0.2s";
    event.target.style.backgroundColor = "purple";

    /* Optional fading effect
    //reset the colour after a short delay(500ms)
    setTimeout(() => {
        event.target.style.transition = "background-color 2s";
        event.target.style.backgroundColor ="";
    }, 500);
    */
}
,false);
})

}

//We need to get the value that is in the number box

const gridSizeNumber = document.getElementById("grid-size-id");
gridSizeNumber.max = "100";

gridSizeNumber.addEventListener("input",function(event) {
    const newX = Number(event.target.value)
    console.log(newX);
    updateGridSize(newX);
})

console.log(x);