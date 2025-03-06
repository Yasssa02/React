import axios from "axios";
const url = "http://localhost:3001/events";

export const getAllEvents = async () => {
  try {
    const response = await axios.get(url);
    return response.data; // Retourne les événements récupérés
  } catch (error) {
    console.error("Erreur lors de la récupération des événements:", error);
    return []; // Retourne un tableau vide en cas d'erreur
  }
};

export const addEvent = async (event) => {
  try {
    const response = await axios.post(url, event);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de l'ajout de l'événement:", error);
    throw error;
  }
};

export const editEvent = async (id, event) => {
  try {
    const response = await axios.put(`${url}/${id}`, event);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la modification de l'événement:", error);
    throw error;
  }
};

export const deleteEvent = async (id) => {
  try {
    const response = await axios.delete(`${url}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la suppression de l'événement:", error);
    throw error;
  }
};
