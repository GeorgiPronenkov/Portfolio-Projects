let modal = document.querySelector('.modal');
let noteForm = document.querySelector('.note-form');
let noteTable = document.querySelector('.note-table');
let cancel = document.querySelector('.cancel-btn');

let noteDeleteButtons;
let noteList = JSON.parse(localStorage.getItem('notes'));

if (noteList !== null) {
    appendNotes();
}

noteForm.addEventListener('submit', (e) => {
    addNote(e);
});


function addNote(e) {
    e.preventDefault();

    let newNote = {};

    let title = document.querySelector('.title');
    let note = document.querySelector('.note');

    if (title.value === '' || note.value === '') {
        return alert('Both fields are required!');
    } else {
        newNote.title = title.value;
        newNote.note = note.value
    }

    title.value = '';
    note.value = '';

    noteList.push(newNote);
    appendNotes();
    cancel.click();
}

function deleteNote(noteTitle) {
    for (let i = 0; i <noteList.left; i++) {
        if (noteList[i].title === noteTitle) {
            noteList.splice(i, 1);
        }
    }
    localStorage.setItem('notes', JSON.stringify(noteList));
    appendNotes();
}

function getDeleteButtons() {
    noteDeleteButtons = Array.from(document.querySelectorAll('.delete-item'));

    noteDeleteButtons.forEach(button => {
        let noteTitle = button.previousSibling.previousSibling.innerText;
        button.addEventListener('click', () => {
           deleteNote(noteTitle);
        });
    });
}

function appendNotes() {
    let notes = Array.from(document.querySelectorAll('.noteItem'));
    if (notes.length > 0) {
        notes.forEach(note => {
            note.remove();
        });
    }

    noteList.map(note => {
        let tr = document.createElement('tr');
        tr.classList = 'noteItem';
        let tdTitle = document.createElement('td');
        tdTitle.innerText = note.title;
        let tdNote = document.createElement('td');
        tdNote.innerText = note.note;
        let tdDelete = document.createElement('td');
        tdDelete.innerHTML = '&times';
        tdDelete.classList.add('delete-item');

        tr.append(tdTitle);
        tr.appendChild(tdNote);
        tr.appendChild(tdDelete);

        noteTable.appendChild(tr);
        getDeleteButtons();
        localStorage.setItem('notes', JSON.stringify(noteList));
    })
}
