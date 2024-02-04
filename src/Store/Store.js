import { create } from "zustand";
import { persist } from "zustand/middleware";
const todoStore = (set) => ({
  user: null,
  data: [],
  addUSer: (data) => {
    set({ user: data });
  },
  removeUser: () => {
    set({ user: null });
  },
  fetchData: (dat)=>{
    set(({data:dat}))
  }
});

const useTodoStore = create(persist(todoStore, { name: "zustTodoo" }));

export default useTodoStore;
