import create from "zustand";

interface MutationState {
  mutationAction: string;
  setMutationAction: (action: string) => void;
}

export const useMutationStore = create<MutationState>((set) => ({
  mutationAction: "",
  setMutationAction: (action) => set({ mutationAction: action }),
}));
