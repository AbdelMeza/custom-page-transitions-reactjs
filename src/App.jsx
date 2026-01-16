// Import routing components from React Router
import { Route, Routes } from "react-router-dom";

// Import global layout and transition components
import TransitionContainer from "../Components/TransitionContainer/TransitionContainer";
import Navbar from "../Components/Navbar/Navbar";

// Import React utilities for lazy loading and suspense
import { lazy, Suspense } from "react";

function App() {
  // Lazy load page components
  // Each page is loaded only when its route is accessed
  const HomePage = lazy(() => import("../Pages/HomePage"));
  const AboutPage = lazy(() => import("../Pages/AboutPage"));
  const WorkPage = lazy(() => import("../Pages/WorkPage"));
  const ContactPage = lazy(() => import("../Pages/ContactPage"));

  return (
    <>
      {/* Global transition overlay displayed during route changes */}
      <TransitionContainer />

      {/* Main content wrapper */}
      <div className="content">
        {/* Navigation bar displayed on all pages */}
        <Navbar />

        {/* Suspense handles loading states for lazy-loaded pages */}
        <Suspense>
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
        </Suspense>
      </div>
    </>
  );
}

export default App;
