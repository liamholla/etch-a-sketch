// Define what a x a sized grid I want. Initially 4 x 4

let x  = 4 ;
let x2 = x*x;

// Select the main body
const mainBodyDiv = document.querySelector('.main-body');
console.log(mainBodyDiv);

//Place divs within the main body
for (let i = 1; i < (x2+1); i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("grid-box");
    newDiv.id = `${i}`;
    mainBodyDiv.appendChild(newDiv);
}