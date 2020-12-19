const container = document.querySelector("#container");
const clearBtn = document.querySelector("#clear");

function makeGrid(numRow, numCol) {

    container.style.setProperty("--grid-rows", numRow);
    container.style.setProperty("--grid-columns", numCol);
 
    for (let i = 0; i < (numCol * numRow); i++) {
   
        let div = document.createElement("div");
        container.appendChild(div).className = "grid-item";
        div.addEventListener("mouseover", e => {
            e.target.style.backgroundColor = "blue";
        })
    }
}
makeGrid(16, 16);

clearBtn.addEventListener("click", () => {
    container.textContent = "";
    let newGrid;
    do {
        newGrid = window.prompt("Your new grid is: ");
    } while (newGrid > 100)

    makeGrid(newGrid, newGrid);
})

