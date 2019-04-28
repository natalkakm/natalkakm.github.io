'use strict';




let button = document.querySelector("#button");
console.log(button)

const ustawTlo = () => {
    let pierwszy = document.querySelector("#pierwszy");
    console.log(pierwszy);

    let drugi = document.querySelector("#drugi");
    console.log(drugi);
    pierwszy.style.backgroundColor = "blue";
    drugi.style.backgroundColor = "red";
}


button.addEventListener('click', ustawTlo);