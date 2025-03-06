import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getAllEvents } from "../services/api";


const useEventStore = create(
    persist(
        (set) => ({
            events: [],
            errors: null,

            populateEvents: (events) => set({ events }),

            deleteEventObject: (id) =>
                set((state) => ({
                    events: state.events.filter((item) => item.id !== id),
                })),

            updateEventObject: (updatedEvent) =>
                set((state) => ({
                    events: state.events.map((item) =>
                        item.id === updatedEvent.id ? updatedEvent : item
                    ),
                })),

            addEventObject: (event) =>
                set((state) => ({
                    events: [...state.events, event],
                })),

            fetchEvents: async () => {
                try {
                    const response = await getAllEvents();
                    set({ events: response.data, errors: null });
                } catch (error) {
                    set({ errors: error.message || "Failed to fetch events" });
                }
            },
        }),
        {
            name: "event-storage",
            getStorage: () => localStorage, // Ensure it's compatible with the environment
        }
    )
);

export default useEventStore;
