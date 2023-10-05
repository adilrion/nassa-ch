import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useStore = create(
    devtools((set) => ({
        startTime: "NOW - 3days",
        endTime: "",
        numOfDays: "3 days",
        setStartTime: (startTime) => set((state) => ({ ...state, startTime })),
        setEndTime: (endTime) => set((state) => ({ ...state, endTime })),
        setNumOfDays: (numOfDays) => set((state) => ({ ...state, numOfDays })),
    }))
);


