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

function cancelNote(){
    saveBtn.style.display='none';
    cancelBtn.style.display='none';
    textArea.style.display='none';
}
cancelBtn.addEventListener("click",cancelNote);

let clickCounter= 1;
function newNote(){ 
    if (clickCounter===1){
        saveBtn.style.display='inline-block';
        cancelBtn.style.display='inline-block';
        textArea.style.display='inline-block';
        clickCounter=clickCounter-1;
    }
    else if (clickCounter===0){
        textArea.value='';
        clickCounter=1;
    }
}
newNoteBtn.addEventListener("click", newNote);

function addNoteToArray(newNote){
    let noteIndex=-1;
    for(let note of notesArray){
        if (note.title===newNote.title){
            noteIndex=notesArray.indexOf(note);
            console.log(noteIndex);
            break;
        }  
    }
    if (noteIndex!=-1){
        alert("Previous Note Updated!");
        notesArray[noteIndex].body=newNote.body;
    }
    else{
        alert("New note added");
        notesArray.push(newNote);
        // addNoteToList(newNote);
    }
    console.log(notesArray);
}
function saveNote(){
    title=prompt("Enter the name of your note: ");
    body=textArea.value;
    newNote={title,body};
    addNoteToArray(newNote);
    textArea.value='';
}
saveBtn.addEventListener("click",saveNote);