import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Content } from "../pages/Dashboard";
import axios from "axios";
import { BACKEND_URL } from "../config";

type ContentStore = {
  content: Content[];
  setContent: (data: Content[]) => void;
  addContent: (content: Content) => void;
  removeContent: (id: string) => void;
};

export const useContentStore = create<ContentStore>()(
  persist(
    (set) => ({
      content: [],

      setContent: (data) => {
        set(() => ({ content: data }));
      },

      addContent: (newContent) => {
        set((state) => ({ content: [...state.content, newContent] }));
      },

      removeContent: async (id: string) => {
        try {
          const response = await axios.delete(`${BACKEND_URL}/api/v1/content`, {
            data: { id },
            withCredentials: true,
          });

          if (response.data.content) {
            console.log(response.data.content);

            set((state) => ({
              content: state.content.filter(
                (c) => c._id !== response.data.content._id
              ),
            }));
          } else {
            console.warn("Content not found or already deleted.");
          }
        } catch (error) {
          console.log(error);
        }
      },
    }),
    {
      name: "content-storage", // localStorage key
    }
  )
);
