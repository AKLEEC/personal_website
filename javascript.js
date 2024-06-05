const contentBoxes = document.querySelector("#contentBoxes");

contentBoxes.addEventListener("click", (e) => {
    let target = e.target;
    switch(target.id) {
        case 'uga':
            if (target.getAttribute('src') == "./resources/uga.png") {
                target.src = "./resources/ugaBulldog.png";
                target.style.height = "130px";
                target.style.width = "auto";
            } else {
                target.src = "./resources/uga.png";
                target.style.height = "150px";
                target.style.width = "auto";
            }
            break;
        case 'gt':
            if (target.getAttribute('src') == "./resources/gt.png") {
                target.src = "./resources/gtYellowJackets.png";
                target.style.height = "auto";
                target.style.width = "130px";
            } else {
                target.src = "./resources/gt.png";
                target.style.height = "auto";
                target.style.width = "150px";
            }
            break;
    }
});

/// Bottom Box
const bottomBox = document.querySelector("#bottomBox");
bottomBox.style.display = "flex";
bottomBox.style.flexDirection = "column";
bottomBox.style.alignItems = "center";

// + - buttons
const boxesButtons = document.createElement("div");
boxesButtons.style.display = "flex";
boxesButtons.style.justifyContent = "center";
const lessBoxButton = document.createElement("button");
lessBoxButton.id = "lessBoxButton";
lessBoxButton.textContent = "-";
const moreBoxButton = document.createElement("button");
moreBoxButton.id = "moreBoxButton";
moreBoxButton.textContent = "+";
boxesButtons.appendChild(lessBoxButton);
boxesButtons.appendChild(moreBoxButton);
bottomBox.appendChild(boxesButtons);

let numBoxes = 16;
boxesButtons.addEventListener("click", (e) => {
    let target = e.target;
    switch(target.id) {
        case 'lessBoxButton':
            if (numBoxes > 8) {
                numBoxes--;
            }
            break;
        case 'moreBoxButton':
            if (numBoxes < 27) {
                numBoxes++;
            }
            break;
    }
    drawBoxes(numBoxes);
});    
drawBoxes(numBoxes);

function drawBoxes(numBoxes) {
    try {
        const oldSketchContainer = document.querySelector("#sketchContainer");
        bottomBox.removeChild(oldSketchContainer);  
    } catch (e) {
        console.log("No old sketch container");
    }
    const sketchContainer = document.createElement("div");
    sketchContainer.id = "sketchContainer";
    sketchContainer.style.display = "flex";
    sketchContainer.style.flexWrap = "wrap";
    sketchContainer.style.justifyContent = "center";
    let width = 30 * numBoxes;  
    sketchContainer.style.width = `${width}px`;  
    for (let i = 0; i < numBoxes * numBoxes; i++) {
        const div = document.createElement("div");
        div.className = "sketchBox";
        div.style.width = "30px";
        div.style.height = "30px";
        div.style.border = "1px solid black";
        div.style.backgroundColor = "white";
        div.style.boxSizing = "border-box";
        div.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = "red";
        });
        sketchContainer.appendChild(div);
    }
    sketchContainer.addEventListener("mouseleave", (e) => {
        const sketchBoxes = document.querySelectorAll(".sketchBox");
        sketchBoxes.forEach((box) => {
            box.style.backgroundColor = "white";
        })
    });
    bottomBox.appendChild(sketchContainer);
}

