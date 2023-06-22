// Define what a x a sized grid I want. Initially 4 x 4.
// Do it this way lets it be dynamic

let x  = 20 ;
let x2 = x*x;

console.log(x);

// Select the grid body
const mainBodyDiv = document.querySelector('.grid-body');
// console.log(mainBodyDiv);

//The initial grid size which can be changed
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
        newDiv.style.height = `calc(60vh / ${x})`;
    } };

// We want to only turn on the paint when the user clicks
const gridBodyDiv = document.querySelector(".grid-body");
let gridClickCount = 1;

// Create a function to call based on mouseenter
const gridMouseEnterListener = function(event) {

        //retrieve the current opacity of the grid. If NaN then 0
        let opacity = Number(event.target.style.opacity) || 0;
        opacity = opacity + 0.1;

        // set the color to fade in after 0.2s
        event.target.style.transition = "background-color 0.2s";
        event.target.style.backgroundColor = "purple";

        //Set the maximum opacity to be 1
        if(opacity > 1) {
            opacity = 1
        }

        // Assign the value of opacity to the CSS property
        event.target.style.opacity = opacity;

    };

// Only start listening to the mouse enter after an 'even' number of clicks
gridBodyDiv.addEventListener("click", function() {
   
//We want to turn the colour on and off depending on clicks
gridClickCount++;

// Select all the grid objects that I want to track
const trackGrids = document.querySelectorAll(".grid-box");

//Turn on the grid after even clicks
  if ((gridClickCount % 2) === 0) {
    console.log("The div has been clicked on!")
    gridBodyDiv.style.borderWidth = "4px"
    gridBodyDiv.style.borderColor = "var(--myPurple)"
    gridBodyDiv.style.margin = "18px"

    trackGrids.forEach(function(grid) {
        
      grid.addEventListener('mouseenter', gridMouseEnterListener,false);
      
    });
  } else {  // Turn off after odd clicks
    console.log("The div has been clicked off!")
    gridBodyDiv.style.borderWidth = "2px"
    gridBodyDiv.style.borderColor = "black"
    gridBodyDiv.style.margin = "20px"

    trackGrids.forEach(function(grid) {
              
      grid.removeEventListener('mouseenter', gridMouseEnterListener);
      
    })
};
})


// This allows the user to play the game from the start
updateGridSize(x);

//We need to get the value that is in the number box
const gridSizeNumber = document.getElementById("grid-size-id");
gridSizeNumber.max = "100";

// Look for the button
const applyButton = document.querySelector("#grid-size")

// Listen for a change of value in the text box
gridSizeNumber.addEventListener("input",function(event) {
    let newX = Number(event.target.value)
    console.log(newX);
    
    // stop users from entering over 100
    if (newX > 100) {
        newX = 100;
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