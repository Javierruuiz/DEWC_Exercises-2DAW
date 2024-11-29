window.onload = function () {
    const Container = document.getElementById("container");
    let noteData = JSON.parse(localStorage.getItem("noteData")) || [];

    loadNotes();

    // guardar Ctrl + S
    document.addEventListener("keydown", (e) => {
        if (e.ctrlKey && e.key === "s") {
            e.preventDefault();
            saveNotes(); 
            alert("¡Notas guardadas!"); 
        }
    });

    function loadNotes() {
        noteData.forEach((note) => {
            createNote(note.title, note.value);
        });
    }

    function createNote(title = "Título", value = "Escribe algo aquí...") {
        let div = document.createElement("div");
        div.classList.add("note-row");

        div.innerHTML = `
            <div class="note-title" contenteditable="true">${title}</div>
            <div class="note-editor" contenteditable="true">${value}</div>
            <div class="note-controls">
                <img src="quitarNota.png" onclick="deleteNote(this)" class="quitarNota" alt="Eliminar">
            </div>
        `;

        Container.appendChild(div);
    }

    function saveNotes() {
        const notes = document.querySelectorAll(".note-row");
        noteData = [];

        notes.forEach((note) => {
            const title = note.querySelector(".note-title").innerText.trim();
            const body = note.querySelector(".note-editor").innerText.trim();

            if (title || body) {
                noteData.push({ title: title || "Sin título", value: body || "" });
            }
        });

        localStorage.setItem("noteData", JSON.stringify(noteData));
    }

    function deleteNote(element) {
        if (confirm("¿Deseas eliminar esta nota?")) {
            const noteRow = element.closest(".note-row");
            if (noteRow) {
                noteRow.remove();
                saveNotes();
            }
        }
    }

    window.CreateNote = createNote;
    window.deleteNote = deleteNote;
};
