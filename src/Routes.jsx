import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Servicesvariant = React.lazy(() => import("pages/Servicesvariant"));
const Page = React.lazy(() => import("pages/Page"));
const Contacts = React.lazy(() => import("pages/Contacts"));
const InnerBlog = React.lazy(() => import("pages/InnerBlog"));
const Blog = React.lazy(() => import("pages/Blog"));
const Gallery = React.lazy(() => import("pages/Gallery"));
const Services = React.lazy(() => import("pages/Services"));
const About = React.lazy(() => import("pages/About"));
const HomePage = React.lazy(() => import("pages/HomePage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/innerblog" element={<InnerBlog />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/page" element={<Page />} />
          <Route path="/servicesvariant" element={<Servicesvariant />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
