/*Creating variables for each element */
let darkThmBtn=document.querySelector(".darkThmBtn");
let myNotesSidebar=document.querySelector('aside');
let cancelBtn=document.querySelector('.cancelBtn');
let saveBtn=document.querySelector('.saveBtn');
let newNoteBtn=document.querySelector('.newNoteBtn');
let textArea= document.querySelector('textarea');
let noteList= document.querySelector('aside ul');

let cancelClickflag=false; //variable to check if cancel button is clicked

/*Creating notesArray */
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

/*Event handling for dark theme button */
function darkTheme(){
    myNotesSidebar.classList.toggle("asideDarkThm");
    document.body.classList.toggle("bodyDarkThm");
    textArea.classList.toggle("textAreaDarkThm")
    cancelBtn.classList.toggle("cancelBtnDark");
    saveBtn.classList.toggle("saveBtnDark");
    newNoteBtn.classList.toggle("newNoteBtnDark");
    darkThmBtn.classList.toggle("darkThmBtnDark");
    if (darkThmBtn.textContent==="Dark Theme"){
        darkThmBtn.textContent="Light Theme";
    }
    else if (darkThmBtn.textContent==="Light Theme"){
        darkThmBtn.textContent="Dark Theme";
    }
}
darkThmBtn.addEventListener("click", darkTheme);

/*Event handling for cancel button */
function cancelNote(){
    saveBtn.style.display='none';
    cancelBtn.style.display='none';
    textArea.style.display='none';
    cancelClickflag=true; //cancel button clicked
}
cancelBtn.addEventListener("click",cancelNote);

/*Event handilng for New Note button */
function newNote(){ 
    if (cancelClickflag===true){            //Displays the buttons and textarea 
        saveBtn.style.display='inline-block';
        cancelBtn.style.display='inline-block';
        textArea.style.display='inline-block';
        cancelClickflag=false;
    }
    else {                      //Removes content from text area
        textArea.value='';
    }
}
newNoteBtn.addEventListener("click", newNote);

/*Event handling for Save Button */

function addNoteToList(newNote){            //Adds new note to sidebar
    let newNoteItem=document.createElement('li');
    noteList.appendChild(newNoteItem);
    newNoteItem.textContent=newNote.title;
}

function addNoteToArray(newNote){          //Adds note object to array
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

function saveNote(){    //Prompts the user to enter the title
    title=prompt("Enter the name of your note: ");
    body=textArea.value;
    newNote={title,body};
    addNoteToArray(newNote);
    textArea.value='';
}

saveBtn.addEventListener("click",saveNote);


/*Event handling for side bar (display notes) */
function displayNote(e){
    for(let note of notesArray){
        if (note.title===e.target.textContent){
            textArea.value=note.body;
        }  
    }
}
myNotesSidebar.addEventListener("click",displayNote);