
const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

const showNotes = () => {
    notesContainer.innerHTML = localStorage.getItem("notes");
}

showNotes();

const updateStorage = () => {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "img/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
});

notesContainer.addEventListener("click", (event) => {
    if(event.target.tagName === "IMG"){
        event.target.parentElement.remove();
        updateStorage();
    } else if (event.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach((nt) => {
            nt.onkeyup = () =>{
                updateStorage();
            }
        });
    }
});

document.addEventListener("keydown", (event) => {
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});


