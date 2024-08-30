document.addEventListener("DOMContentLoaded", () => {
    let promptButton = document.getElementById("promptButton");
    promptButton.textContent = "Grid Size";

    promptButton.addEventListener("click", () => {
        let userInput = prompt("Please enter a number (up to 100):");

        if (userInput !== null) { 
            let number = parseFloat(userInput);

            if (!isNaN(number) && (number <= 100)) {
                alert(`You entered the number: ${number}`);
                createGrid(number);
            } else {
                alert("That's not a valid number.");
            }
        }
    });
});


let container = document.getElementById("container");

function createGrid(size) {
    container.innerHTML = '';

    let boxSize = 960 / size;

    container.style.gridTemplateColumns = `repeat(${size}, ${boxSize}px)`;
    container.style.gridTemplateRows = `repeat(${size}, ${boxSize}px)`;

    for (let i = 0; i < size * size; i++) {
        let box = document.createElement("div");
        box.className = "box";
        box.style.width = `${boxSize}px`;
        box.style.height = `${boxSize}px`;
        box.addEventListener("mouseenter", () => {
            box.style.backgroundColor = "black";
        });
        container.appendChild(box);
        
    }
}
