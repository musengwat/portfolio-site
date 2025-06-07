// portfolio-frontend/src/App.js
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { AppProvider } from "./context/AppContext";
import Layout from "./components/Layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner/LoadingSpinner";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import ScrollToTop from "./components/Layout/ScrollToTop";
import "./App.css";

// Lazy load pages for better performance
const Home = lazy(() => import("./pages/Home"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const Admin = lazy(() => import("./pages/Admin"));

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <AppProvider>
          <Router>
            <div className="App">
              <ScrollToTop />
              <Layout>
                <Suspense fallback={<LoadingSpinner />}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/project/:id" element={<ProjectDetail />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route
                      path="*"
                      element={<div className="not-found">Page Not Found</div>}
                    />
                  </Routes>
                </Suspense>
              </Layout>
            </div>
          </Router>
        </AppProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
