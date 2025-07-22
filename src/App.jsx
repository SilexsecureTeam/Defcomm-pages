import { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import FallBack from "./components/Fallback";

const MainLayout = lazy(() => import("./layout/MainLayout"));

const HomePage = lazy(() => import("./pages/v2/HomePage"));
const ComingSoon = lazy(() => import("./pages/v1/ComingSoon"));
const Contact = lazy(() => import("./pages/v1/Contact"));
const Services = lazy(() => import("./pages/v1/Services"));
const Services2 = lazy(() => import("./pages/v1/ServicesV2"));
const About = lazy(() => import("./pages/v1/About"));
const Products = lazy(() => import("./pages/v1/Products"));
const ProductsFeatures = lazy(() => import("./pages/v1/ProductsFeatures"));
const LiveFire = lazy(() => import("./pages/v1/LiveFire"));

const App = () => {
  return (
    <Suspense fallback={<FallBack />}>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services2" element={<Services2 />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products-features" element={<ProductsFeatures />} />
            {/* Catch-all redirect */}
            <Route path="*" element={<ComingSoon />} />
          </Route>
          <Route path="/live-fire" element={<LiveFire />} />
        </Routes>
      </Router>
    </Suspense>
  );
};
export default App;
