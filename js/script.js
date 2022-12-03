let darkThmBtn=document.querySelector(".darkThmBtn");
let myNotesSidebar=document.querySelector('aside');
let cancelBtn=document.querySelector('.cancelBtn');
let saveBtn=document.querySelector('.saveBtn');
let newNoteBtn=document.querySelector('.newNoteBtn');
let textArea= document.querySelector('textarea');
let noteList= document.querySelector('aside ul');

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
    myNotesSidebar.classList.toggle("asideDarkThm");
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

function addNoteToList(newNote){
    let newNoteItem=document.createElement('li');
    noteList.appendChild(newNoteItem);
    newNoteItem.textContent=newNote.title;
}

function addNoteToArray(newNote){
    let noteIndex=-1;
    for(let note of notesArray){
        if (note.title===newNote.title){
            noteIndex=notesArray.indexOf(note);
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
        addNoteToList(newNote);
    }
}
function saveNote(){
    title=prompt("Enter the name of your note: ");
    body=textArea.value;
    newNote={title,body};
    addNoteToArray(newNote);
    textArea.value='';
}
saveBtn.addEventListener("click",saveNote);


function sideBarEventHandler(e){
    for(let note of notesArray){
        if (note.title===e.target.textContent){
            textArea.value=note.body;
        }  
    }
}
myNotesSidebar.addEventListener("click",sideBarEventHandler);