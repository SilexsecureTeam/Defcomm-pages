import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FallBack from "./components/Fallback";
import Hardware from "./pages/v3/Hardware";
import Software from "./pages/v3/Software";
import ScrollToTop from "./components/ScrollToTop";
import MainLayout from "./layout/MainLayout";

const HomePage = lazy(() => import("./pages/v2/HomePage"));
const ComingSoon = lazy(() => import("./pages/v1/ComingSoon"));
const Contact = lazy(() => import("./pages/v1/Contact"));
// const Services = lazy(() => import("./pages/v1/Services"));
const Services2 = lazy(() => import("./pages/v1/ServicesV2"));
const AboutPage = lazy(() => import("./pages/v3/AboutPage"));
const Products = lazy(() => import("./pages/v1/Products"));
const ProductsFeatures = lazy(() => import("./pages/v1/ProductsFeatures"));
const LiveFire = lazy(() => import("./pages/v1/LiveFire"));
const BrowserHome = lazy(() => import("./pages/BrowserHome"));
const VideoPage = lazy(() => import("./pages/v1/VideoPage"));
const AndriodPage = lazy(() => import("./pages/v1/AndriodPage"));
const ManagerPage = lazy(() => import("./pages/v1/ManagerPage"));
const OperatingPage = lazy(() => import("./pages/v1/OperatingPage"));
const Career = lazy(() => import("./pages/v1/Career"));
const MultiStepForm = lazy(() => import("./pages/v1/MultiStepForm"));
const BookingWorkflow = lazy(() => import("./pages/v1/BookingWorkflow"));
const SecurityPage = lazy(() => import("./pages/v3/SecurityPage"));
const BlogDetailsPage = lazy(() => import("./pages/BlogDetailsPage"));
const EventRegistrationForm = lazy(() =>
  import("./pages/EventRegistrationForm")
);
const LazyPage = (Component) => (
  <Suspense fallback={<FallBack />}>
    <Component />
  </Suspense>
);
const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={LazyPage(HomePage)} />
          <Route path="contact" element={LazyPage(Contact)} />
          {/* <Route path="/services" element={<Services />} /> */}
          <Route path="/services" element={LazyPage(Services2)} />
          <Route path="/about" element={LazyPage(AboutPage)} />
          <Route path="/products" element={LazyPage(Products)} />
          <Route path="/career" element={LazyPage(Career)} />
          <Route path="/career/andriod-dev" element={LazyPage(AndriodPage)} />
          <Route path="/career/product-manager" element={LazyPage(ManagerPage)} />
          <Route
            path="/career/operating-system"
            element={LazyPage(OperatingPage)}
          />
          <Route path="/technology" element={LazyPage(ProductsFeatures)} />
          <Route path="/hardware" element={LazyPage(Hardware)} />
          <Route path="/software" element={LazyPage(Software)} />
          <Route path="/watch" element={LazyPage(VideoPage)} />
          <Route path="/form" element={LazyPage(MultiStepForm)} />
          <Route path="/book" element={LazyPage(BookingWorkflow)} />
          <Route path="/blogs" element={LazyPage(SecurityPage)} />
          <Route path="/blogs/:slug" element={LazyPage(BlogDetailsPage)} />
          <Route path="/bounty" element={LazyPage(LiveFire)} />
          <Route path="/browser" element={LazyPage(BrowserHome)} />
          {/* Dynamically generate routes from JSON */}
          {/* {routesConfig.map((route, index) => {
              if (route.type === "event") {
                return (
                  <Route
                    key={index}
                    path={route.path}
                    element={
                      <EventRegistrationForm
                        eventDetails={{
                          ...route.eventDetails,
                        }}
                        apiConfig={route.apiConfig}
                      />
                    }
                  />
                );
              } else if (route.type === "programme") {
                return (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={LazyPage(route.component)}
                  />
                );
              }
              return null;
            })} */}

          {/* Catch-all redirect */}
          <Route path="*" element={LazyPage(ComingSoon)} />
        </Route>
      </Routes>
    </Router>
  );
};
export default App;
