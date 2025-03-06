import { create } from "zustand";
import useAuthStore from "./useAuthStore";

const useCartStore = create((set) => ({
    items: [],
    
    addItem: (item) => {
        const user = useAuthStore.getState().user;
        if (!user) {
            console.error("Vous devez être connecté pour ajouter un article au panier !");
            return;
        }
        set((state) => ({ items: [...state.items, item] }));
    },

    removeItem: (id) => set((state) => ({
        items: state.items.filter((item) => item.id !== id),
    })),

    clearCart: () => set({ items: [] }) // Fixed `items` instead of `item`
}));

export default useCartStore;
