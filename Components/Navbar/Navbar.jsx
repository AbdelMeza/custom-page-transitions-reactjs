import "./Navbar.css";
import transitionManagement from "../../Zustand/transitionManagement";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  // Get the current route information
  const location = useLocation();
  const currentPath = location.pathname;

  // Get the transition trigger from Zustand store
  const { startTransition } = transitionManagement();

  // Navigation items configuration
  const navbarItems = [
    {
      title: "home",
      navigateTo: "/",
    },
    {
      title: "about",
      navigateTo: "/about",
    },
    {
      title: "work",
      navigateTo: "/work",
    },
    {
      title: "contact",
      navigateTo: "/contact",
    },
  ];

  // Starts a transition only if the target route is different from the current one
  const handleTransition = (path) => {
    if (currentPath === path) return;

    startTransition(path);
  };

  return (
    <div className="navigation-bar">
      {navbarItems.map((item, index) => (
        <div
          className="item"
          key={index}
          onClick={() => handleTransition(item.navigateTo)}
        >
          {item.title}
        </div>
      ))}
    </div>
  );
}
