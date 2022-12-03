let darkThmBtn=document.querySelector(".darkThmBtn");
let myNotes=document.querySelector('aside');
let cancelBtn=document.querySelector('.cancelBtn');
let saveBtn=document.querySelector('.saveBtn');
let newNoteBtn=document.querySelector('.newNoteBtn');
let textArea= document.querySelector('textarea');

let notesArray= [
    {
        title:"note one",
        body:"this is note one"
    },
    {
        title:"note two",
        body:"this is note two"
    }
]

function darkTheme(){
    myNotes.classList.toggle("asideDarkThm");
    document.body.classList.toggle("bodyDarkThm");
    textArea.classList.toggle("textAreaDarkThm")
    cancelBtn.classList.toggle("cancelBtnDark");
    saveBtn.classList.toggle("saveBtnDark");
    newNoteBtn.classList.toggle("newNoteBtnDark");
    if (darkThmBtn.textContent==="Dark Theme"){
        darkThmBtn.textContent="Light Theme";
    }
    else if (darkThmBtn.textContent==="Light Theme"){
        darkThmBtn.textContent="Dark Theme";
    }
}
darkThmBtn.addEventListener("click", darkTheme);
