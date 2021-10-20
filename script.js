const myBtn = document.querySelector("#mybutton");

const alertButton = () => {
    alert("button clicked");
}

myBtn.addEventListener("click", alertButton);

const backBtn = document.querySelector(".change-bckgr");

// const changeColor = () => {
//     const e = document.querySelector("body");
//     e.classList.remove("blue-background");
//     e.classList.add("red-background");
//     console.log(e.classList);
// }

const toggleColor = () => {
    const e = document.querySelector("body");
    e.classList.toggle("red-background");
    console.log(e.classList);
}

backBtn.addEventListener("click", toggleColor);