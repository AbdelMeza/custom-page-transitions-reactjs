import { create } from "zustand";

const transitionManagement = create((set) => ({
  isTransitioning: null,
  targetPath: null,

  startTransition: (path) => {
    set({
      isTransitioning: true,
      targetPath: path
    });
  },

  endTransition: () => {
    set({
      isTransitioning: false,
      targetPath: null
    });
  },
}));

export default transitionManagement;
