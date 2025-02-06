import React, { useState } from "react";

function TodoList({ initialTasks = [] }) {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState("");
  const [priority, setPriority] = useState("Moyenne");
  const [search, setSearch] = useState("");

  // Ajouter une tâche
  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== "") {
      setTasks([...tasks, { name: newTask, priority, completed: false }]);
      setNewTask(""); // Réinitialiser l'input
    }
  };

  // Marquer une tâche comme terminée
  const handleToggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // Supprimer une tâche
  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // Nombre de tâches complétées
  const completedCount = tasks.filter((task) => task.completed).length;
  const totalCount = tasks.length;

  // Filtrer les tâches par recherche
  const filteredTasks = tasks.filter((task) =>
    task.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Todo List avec Priorités</h2>

      {/* Formulaire pour ajouter une tâche */}
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Ajouter une tâche..."
          style={{ padding: "10px", marginRight: "10px" }}
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          style={{ padding: "10px", marginRight: "10px" }}
        >
          <option value="Haute">Haute</option>
          <option value="Moyenne">Moyenne</option>
          <option value="Basse">Basse</option>
        </select>
        <button type="submit" style={{ padding: "10px" }}>Ajouter</button>
      </form>

      <h3>Total : {totalCount} | Complétées : {completedCount}</h3>

      {/* Champ de recherche */}
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Rechercher une tâche..."
        style={{ padding: "10px", margin: "10px" }}
      />

      {/* Liste des tâches */}
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {filteredTasks.map((task, index) => (
          <li key={index} style={{ 
            margin: "10px 0", 
            fontSize: "18px", 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center"
          }}>
            <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
              {task.name} ({task.priority})
            </span>
            <button 
              onClick={() => handleToggleComplete(index)} 
              style={{ marginLeft: "10px", padding: "5px", backgroundColor: "green", color: "white", border: "none", cursor: "pointer" }}
            >
              {task.completed ? "Annuler" : "Terminer"}
            </button>
            <button 
              onClick={() => handleDeleteTask(index)} 
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

export default TodoList;
