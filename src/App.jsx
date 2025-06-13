import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import FallBack from "./components/Fallback";

const MainLayout = lazy(() => import("./layout/MainLayout"));

const Landing = lazy(() => import("./pages/Landing"));
const ComingSoon = lazy(() => import("./pages/ComingSoon"));
const Contact = lazy(() => import("./pages/Contact"));
const Services = lazy(() => import("./pages/Services"));
const Services2 = lazy(() => import("./pages/ServicesV2"));

const App = () => {
  return (
    <Suspense fallback={<FallBack />}>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />} >
          <Route index element={<Landing />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services2" element={<Services2 />} />
          {/* Catch-all redirect */}
          <Route path="*" element={<ComingSoon />} />
          </Route>
          
        </Routes>
      </Router>
    </Suspense>
  );
};
export default App;
