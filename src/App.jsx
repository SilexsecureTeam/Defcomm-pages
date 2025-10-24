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
import Blog4Page from "./pages/v3/Blog4Page";
import Hardware from "./pages/v3/Hardware";
import Software from "./pages/v3/Software";
import ScrollToTop from "./components/ScrollToTop";

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
const VideoPage = lazy(() => import("./pages/v1/VideoPage"));
const AndriodPage = lazy(() => import("./pages/v1/AndriodPage"));
const ManagerPage = lazy(() => import("./pages/v1/ManagerPage"));
const OperatingPage = lazy(() => import("./pages/v1/OperatingPage"));
const Career = lazy(() => import("./pages/v1/Career"));
const MultiStepForm = lazy(() => import("./pages/v1/MultiStepForm"));
const BookingWorkflow = lazy(() => import("./pages/v1/BookingWorkflow"));
const SecurityPage = lazy(() => import("./pages/v3/SecurityPage"));
const EventRegistrationForm = lazy(() =>
  import("./pages/EventRegistrationForm")
);

const App = () => {
  return (
    <Suspense fallback={<FallBack />}>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="contact" element={<Contact />} />
            {/* <Route path="/services" element={<Services />} /> */}
            <Route path="/services" element={<Services2 />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/career" element={<Career />} />
            <Route path="/career/andriod-dev" element={<AndriodPage />} />
            <Route path="/career/product-manager" element={<ManagerPage />} />
            <Route
              path="/career/operating-system"
              element={<OperatingPage />}
            />
            <Route path="/technology" element={<ProductsFeatures />} />
            <Route path="/launches-defcomm" element={<Blog1Page />} />
            <Route path="/defcomm-attend" element={<Blog2Page />} />
            <Route path="/defcomm-unveil" element={<Blog3Page />} />
            <Route path="/defcomm-solution" element={<Blog4Page />} />
            <Route path="/hardware" element={<Hardware />} />
            <Route path="/software" element={<Software />} />
            <Route path="/watch" element={<VideoPage />} />
            <Route path="/form" element={<MultiStepForm />} />
            <Route path="/book" element={<BookingWorkflow />} />
            <Route path="/blogs" element={<SecurityPage />} />
            <Route path="/bounty" element={<LiveFire />} />
            <Route
              path="/events/ged"
              element={
                <EventRegistrationForm
                  eventDetails={{
                    title: "GLOBAL ENCRYPTION DAY 2025",
                    organizer: "DEFCOMM SOLUTIONS",
                    slogan: "STRONG ENCRYPTION • STRONGER FUTURE",
                    tagline: "DEFENDING TRUST IN A CONNECTED WORLD",
                    date: "TUESDAY, 21 OCTOBER 2025",
                    accentColor: "from-green-600 to-oliveDark",
                  }}
                  apiConfig={{}}
                />
              }
            />

            <Route
              path="/events/ph-cybersecurity"
              element={
                <EventRegistrationForm
                  eventDetails={{
                    title: "PORT-HARCOURT CYBER SECURITY MEET & GREET",
                    organizer: "DITS ACADEMY & KOCKA IT SERVICES",
                    slogan: "Opportunities, Careers, and Growth Paths",
                    tagline: "THE PORT-HARCOURT CYBER SECURITY LANDSCAPE",
                    date: "SATURDAY, 25 OCTOBER 2025 | 12PM - 3PM",
                    venue:
                      "DITS Academy, Suite 15, DDS Shopping Mall, Rukpokwu",
                    accentColor: "from-cyan-600 to-blue-700",
                    socialLinks: {
                      instagram: "https://www.instagram.com/ditsacademyph/",
                      twitter: "https://x.com/ditsacademyph",
                      linkedin: "https://www.linkedin.com/company/ditsacademy/",
                    },
                    contact: {
                      email: "info@ditsacademy.com",
                      website: "https://www.ditsacademy.com",
                    },
                  }}
                  apiConfig={{
                    form_id:
                      "eyJpdiI6ImRPRTVzM3JRNzYrVFZNVGp6NGFTYUE9PSIsInZhbHVlIjoiZ1lEZ2xuYTVHc1RTSXVXV1VRWTJ3Zz09IiwibWFjIjoiOGU3MzVkY2EzODBhNzEzZGVlZGVkODdlODljYWIyZGU1MTJlYWU5NjI5MjQ3NjE0ZDdmMWJmMzFhMjE3NWZhYSIsInRhZyI6IiJ9",
                  }}
                />
              }
            />

            {/* Catch-all redirect */}
            <Route path="*" element={<ComingSoon />} />
          </Route>
        </Routes>
      </Router>
    </Suspense>
  );
};
export default App;
