// Define what a x a sized grid I want. Initially 4 x 4.
// Do it this way lets it be dynamic

let x  = 20 ;
let x2 = x*x;

console.log(x);


// Select the grid body
const mainBodyDiv = document.querySelector('.grid-body');
// console.log(mainBodyDiv);

//The intial grid size which can be changed
for (let i = 1; i < (x2+1); i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("grid-box");
    newDiv.id = `${i}`;
    mainBodyDiv.appendChild(newDiv);
    newDiv.style.width = `calc(800px / ${x})`;
}

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

        let gridPaint = 0;

        grid.addEventListener('mouseenter', function(event) {
        
        // set the color to fade in after 0.2s
        event.target.style.transition = "background-color 0.2s";
        event.target.style.backgroundColor = "purple";

        //Let's make the opacity increase every time the users hovers over a grid

        gridPaint++;

        if(gridPaint > 10) {
            gridPaint = 10
        }
        console.log(gridPaint)

        event.target.style.opacity = gridPaint/10;

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

// This allows the user to play the game from the start
updateGridSize(x);

//We need to get the value that is in the number box
const gridSizeNumber = document.getElementById("grid-size-id");
gridSizeNumber.max = "50";

// Look for the button
const applyButton = document.querySelector("#grid-size")

// Listen for a change of value in the text box
gridSizeNumber.addEventListener("input",function(event) {
    let newX = Number(event.target.value)
    console.log(newX);
    
    // stop users from entering over 50
    if (newX > 50) {
        newX = 50;
    }

    //It now works when the user presses "Enter"
    // however, on the console.log the "Enter" is pressed multiple times
    document.addEventListener("keydown", function(e) {
        if(e.code === "Enter") {
            console.log(e.code);
            updateGridSize(newX);
        }
    })

    applyButton.addEventListener("click", function(){
        updateGridSize(newX);
    })
})

console.log(x);