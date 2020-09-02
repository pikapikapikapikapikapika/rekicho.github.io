window.onload = () => {
    document.querySelectorAll("#fruits > .row > div")
        .forEach((square) => square.addEventListener("mousedown", chooseFruit, false));
    document.querySelectorAll("#fruits > .row > div")
        .forEach((square) => square.addEventListener("touchstart", chooseFruit, false));

    document.querySelector("body").addEventListener("mousemove", moveFruitOnMouse, false)
    document.querySelector("body").addEventListener("touchmove", moveFruitOnMouse, false)

    document.querySelectorAll("#squares > .row > div")
        .forEach((square) => square.addEventListener("mouseup", selectSquare, false));
    document.querySelectorAll("#squares > .row > div")
        .forEach((square) => square.addEventListener("touchend", selectSquare, false));
    document.querySelectorAll("#squares > .row > div")
        .forEach((square) => square.addEventListener("touchcancel", selectSquare, false));

    document.querySelector("button").addEventListener("click", resetFruits);
};

let previousSelected = "";
let selected = "";

const chooseFruit = (e) => {
    e.preventDefault();
    const fruit = e.target;
    const section = fruit.parentElement.parentElement;

    [...section.children].forEach((div) => {
        [...div.children].forEach((node) => {
            node.classList.remove("selected");
        })
    })

    selected = fruit.classList[0];

    fruit.classList.add("selected");
}

const moveFruitOnMouse = (e) => {
    const fruitOnMouse = document.querySelector("#fruitOnMouse");
    if (selected && !fruitOnMouse.classList.contains(selected)) {
        if (previousSelected) {
            fruitOnMouse.classList.replace(previousSelected, selected);
        } else { 
            fruitOnMouse.classList.add(selected);
        }
        previousSelected = selected;
    }
    fruitOnMouse.style.top = e.clientY + "px";
    fruitOnMouse.style.left = e.clientX + "px";
}

const selectSquare = (e) => {
    e.preventDefault();
    const square = e.target;

    square.className = square.className === selected ? "" : selected;
}

const resetFruits = (e) => {
    const section = document.querySelector("#squares");

    [...section.children].forEach((div) => {
        [...div.children].forEach((node) => {
            node.className = "";
        })
    })
}