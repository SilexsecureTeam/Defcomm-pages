import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import FallBack from "./components/Fallback";

const MainLayout = lazy(() => import("./layout/MainLayout"));

const Landing = lazy(() => import("./pages/Landing"));
const ComingSoon = lazy(() => import("./pages/ComingSoon"));

const App = () => {
  return (
    <Suspense fallback={<FallBack />}>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />} >
          <Route index element={<Landing />} />

          {/* Catch-all redirect */}
          <Route path="*" element={<ComingSoon />} />
          </Route>
          
        </Routes>
      </Router>
    </Suspense>
  );
};
export default App;
