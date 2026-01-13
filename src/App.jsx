import { Route, Routes } from "react-router-dom";

function App() {
  /*
  Lazy loading is recommended when your application has many pages.
  It allows loading each page only when it is needed, which improves
  the initial loading performance.

  Example:
  const HomePage = lazy(() => import("path/to/HomePage"))

  In this case, we intentionally avoid using <Suspense> with a fallback
  because it would interfere with our custom page loading animation.
*/

  return (
    <Routes>
      <Route
        path="/home"
        element={<span className="page-message">Welcome to home page</span>}
      />
      <Route
        path="/about"
        element={<span className="page-message">Welcome to about page</span>}
      />
      <Route
        path="/contact"
        element={<span className="page-message">Welcome to contact page</span>}
      />
    </Routes>
  );
}

export default App;
