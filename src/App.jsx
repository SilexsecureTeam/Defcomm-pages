import { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import FallBack from "./components/Fallback";
import Blog1Page from "./pages/v3/Blog1Page";
import Blog2Page from "./pages/v3/Blog2Page";
import Blog3Page from "./pages/v3/Blog3Page";
// import ScrollToTop from "./components/ScrollToTop";

const MainLayout = lazy(() => import("./layout/MainLayout"));

const HomePage = lazy(() => import("./pages/v2/HomePage"));
const ComingSoon = lazy(() => import("./pages/v1/ComingSoon"));
const Contact = lazy(() => import("./pages/v1/Contact"));
// const Services = lazy(() => import("./pages/v1/Services"));
const Services2 = lazy(() => import("./pages/v1/ServicesV2"));
const AboutPage = lazy(() => import("./pages/v3/AboutPage"));
const Products = lazy(() => import("./pages/v1/Products"));
const ProductsFeatures = lazy(() => import("./pages/v1/ProductsFeatures"));
const LiveFire = lazy(() => import("./pages/v1/LiveFire"));

const App = () => {
  return (
    <Suspense fallback={<FallBack />}>
      <Router>
        {/* <ScrollToTop /> */}
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="contact" element={<Contact />} />
            {/* <Route path="/services" element={<Services />} /> */}
            <Route path="/services" element={<Services2 />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/technology" element={<ProductsFeatures />} />
            <Route path="/launches-defcomm" element={<Blog1Page />} />
            <Route path="/defcomm-attend" element={<Blog2Page />} />
            <Route path="/defcomm-unveil" element={<Blog3Page />} />

            <Route path="/bounty" element={<LiveFire />} />
            {/* Catch-all redirect */}
            <Route path="*" element={<ComingSoon />} />
          </Route>
        </Routes>
      </Router>
    </Suspense>
  );
};
export default App;
