import { useEffect, useRef } from "react";
import transitionManagement from "../../Zustand/transitionManagement";
import { useNavigate } from "react-router-dom";
import "./TransitionContainer.css";

export default function TransitionContainer() {
  // Get transition state from Zustand store
  const { targetPath, isTransitioning } = transitionManagement();

  // Reference to the animated tile element
  const tile = useRef(null);

  // React Router navigation function
  const navigate = useNavigate();

  useEffect(() => {
    // Do nothing if no target route is defined
    if (targetPath === null) return;

    // Callback triggered when the CSS transition ends
    const handleNavigate = () => {
      navigate(targetPath);
    };

    // Listen for the end of the transition animation
    tile.current.addEventListener("transitionend", handleNavigate);

    // Cleanup: remove the event listener when effect re-runs or unmounts
    return () => {
      tile.current?.removeEventListener("transitionend", handleNavigate);
    };
  }, [targetPath, navigate]);

  return (
    <div
      className={`transition-container ${
        isTransitioning && "transitioning"
      }`}
    >
      {/* Animated tile used for the transition effect */}
      <div className="tile" ref={tile}></div>

      {/* Overlay content displayed during transition */}
      <div className="transition-content">
        <span className="loading-message">Loading...</span>
      </div>
    </div>
  );
}
