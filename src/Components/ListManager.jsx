import React, { useState } from "react";

function ListManager({ initialItems = [], placeholder = "Ajouter un élément..." }) {
  const [items, setItems] = useState(initialItems);
  const [newItem, setNewItem] = useState("");

  // Ajouter un élément à la liste
  const handleAddItem = (e) => {
    e.preventDefault();
    if (newItem.trim() !== "") {
      setItems([...items, newItem]);
      setNewItem(""); // Réinitialiser l'input après l'ajout
    }
  };

  // Supprimer un élément de la liste
  const handleDeleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Gestion de la liste</h2>
      <form onSubmit={handleAddItem}>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder={placeholder}
          style={{ padding: "10px", marginRight: "10px" }}
        />
        <button type="submit" style={{ padding: "10px" }}>
          Ajouter
        </button>
      </form>

      <ul style={{ listStyleType: "none", padding: 0 }}>
        {items.map((item, index) => (
          <li key={index} style={{ margin: "10px 0", fontSize: "18px", display: "flex", justifyContent: "center", alignItems: "center" }}>
            {item}
            <button
              onClick={() => handleDeleteItem(index)}
              style={{ marginLeft: "10px", padding: "5px", backgroundColor: "red", color: "white", border: "none", cursor: "pointer" }}
            >
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListManager;
