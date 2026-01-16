// Import routing components from React Router
import { Route, Routes } from "react-router-dom";

// Import global UI components
import TransitionContainer from "../Components/TransitionContainer/TransitionContainer";
import Navbar from "../Components/Navbar/Navbar";

// Import lazy loading utility from React
import { lazy } from "react";

function App() {
  // Lazy load pages
  // Each page will be loaded only when its route is visited
  const HomePage = lazy(() => import("../Pages/HomePage"));
  const AboutPage = lazy(() => import("../Pages/AboutPage"));
  const WorkPage = lazy(() => import("../Pages/WorkPage"));
  const ContactPage = lazy(() => import("../Pages/ContactPage"));

  return (
    <>
      {/* Navbar displayed on all pages */}
      <Navbar />

      {/* Container used for page transitions / loaders */}
      <TransitionContainer />

      {/* Application routes */}
      <Routes>
        {/* Home page */}
        <Route path="/" element={<HomePage />} />

        {/* About page */}
        <Route path="/about" element={<AboutPage />} />

        {/* Work / Projects page */}
        <Route path="/work" element={<WorkPage />} />

        {/* Contact page */}
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
