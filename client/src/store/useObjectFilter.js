import { create } from "zustand";

const useObjectFilter = create((set) => ({
  filter: {
    nazwa: "",
    miejscowosc: "",
    ulica: "",
  },
}));
