import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getallEvents, addEvent, editEvent, deleteEvent } from "../services/api";

const useEventStore = create(
  persist(
    (set, get) => ({
      events: [],
      selectedEvent: null,  // État pour stocker un événement sélectionné
      errors: "",

      // Fonction pour récupérer tous les événements
      populateEvents: (events) => set({ events }),

      // Fonction pour récupérer un événement spécifique par son ID
      fetchEventById: (id) => {
        const event = get().events.find((event) => event.id === id);
        if (event) {
          set({ selectedEvent: event });
        } else {
          console.error("Événement non trouvé");
        }
      },

      // Fonction pour ajouter un événement
      addEventObject: async (event) => {
        try {
          const newEvent = await addEvent(event);
          set((state) => ({
            events: [...state.events, newEvent.data],
          }));
        } catch (error) {
          set({ errors: error });
        }
      },

      // Fonction pour mettre à jour un événement
      updateEventObject: async (updatedEvent) => {
        try {
          const response = await editEvent(updatedEvent.id, updatedEvent);
          set((state) => ({
            events: state.events.map((event) =>
              event.id === updatedEvent.id ? updatedEvent : event
            ),
          }));
        } catch (error) {
          set({ errors: error });
        }
      },

      // Fonction pour supprimer un événement
      deleteEventObject: async (id) => {
        try {
          await deleteEvent(id);
          set((state) => ({
            events: state.events.filter((event) => event.id !== id),
          }));
        } catch (error) {
          set({ errors: error });
        }
      },

      // Fonction pour récupérer les événements depuis l'API
      fetchEvents: async () => {
        try {
          const events = await getallEvents();
          set({ events });
        } catch (error) {
          set({ errors: error });
        }
      },
    }),
    {
      name: "event-storage", // Nom du stockage
      getStorage: () => localStorage, // Utiliser localStorage pour persister les données
    }
  )
);

export default useEventStore;
