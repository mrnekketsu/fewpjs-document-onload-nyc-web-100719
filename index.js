// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    updateText();
});

function updateText(){
    let element = document.getElementById('text');
    element.textContent = "This is really cool!"
    console.log("Changed text");
}
// console.log(
//     "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
// );