import React, { useState } from "react";

function NoteManager({ initialNotes = [] }) {
  const [notes, setNotes] = useState(initialNotes);
  const [newNote, setNewNote] = useState("");

  // Ajouter une note (si entre 0 et 20)
  const handleAddNote = (e) => {
    e.preventDefault();
    const noteValue = parseFloat(newNote);
    if (!isNaN(noteValue) && noteValue >= 0 && noteValue <= 20) {
      setNotes([...notes, noteValue]);
      setNewNote(""); // Réinitialisation de l'input
    } else {
      alert("Veuillez entrer une note entre 0 et 20 !");
    }
  };

  // Supprimer une note
  const handleDeleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  // Calcul de la moyenne des notes
  const average = notes.length ? (notes.reduce((sum, note) => sum + note, 0) / notes.length).toFixed(2) : "0";

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Gestionnaire de Notes</h2>
      <form onSubmit={handleAddNote}>
        <input
          type="number"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Ajouter une note (0-20)"
          style={{ padding: "10px", marginRight: "10px" }}
        />
        <button type="submit" style={{ padding: "10px" }}>Ajouter</button>
      </form>

      <h3>Moyenne : {average}/20</h3>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {notes.map((note, index) => (
          <li key={index} style={{ margin: "10px 0", fontSize: "18px" }}>
            {note}
            <button onClick={() => handleDeleteNote(index)} style={{ marginLeft: "10px", padding: "5px", backgroundColor: "red", color: "white", border: "none", cursor: "pointer" }}>
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NoteManager;
