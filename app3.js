const cardBody = document.querySelectorAll(".card-body")[1];
const title = document.querySelector("#tasks-title");

// title.addEventListener("mousedown",run);
// function run(e){
//     console.log(e.type);
// }

title.addEventListener("mouseup",run);
function run(e){
    console.log(e.type);
}