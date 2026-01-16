import { create } from "zustand";

// Store responsible for managing page transition state
const transitionManagement = create((set) => ({
  // Indicates whether a page transition is currently in progress
  isTransitioning: null,

  // Stores the path the app is transitioning to
  targetPath: null,

  // Starts a transition toward a specific route
  startTransition: (path) => {
    set({
      isTransitioning: true,
      targetPath: path,
    });
  },

  // Ends the current transition and resets the state
  endTransition: () => {
    set({
      isTransitioning: false,
      targetPath: null,
    });
  },
}));

export default transitionManagement;
