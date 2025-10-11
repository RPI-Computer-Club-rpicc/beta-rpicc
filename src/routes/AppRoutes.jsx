import React from "react";
import ScrollToTop from "../components/common/ScroolToTop";
import { Routes, Route } from "react-router";
import BaseLayout from "../layouts/BaseLayout";
import Home from "../pages/public/Home";
import Notices from "../pages/public/Notices";
import Blogs from "../pages/public/Blogs";
import Events from "../pages/public/Events";
import Executives from "../pages/public/Executives";
import Projects from "../pages/public/Projects";
import SingleEventDetails from "../pages/public/SingleEventDetails";
// import Registration2025 from '../pages/public/Registration2025'
import ProjectDetails from "../pages/public/ProjectDetails";
import ExecutiveMemberProfile from "../pages/public/ExecutiveMemberProfile";
import FoundingComitte from "../pages/public/FoundingComitte";
import { lazy, Suspense } from "react";
import SquadsHome from "../pages/squads/SquadsHome";
import Gallery from "../pages/public/Gallery";
import Testimonials from "../pages/public/Testimonials";
import AboutUs from "../pages/public/AboutUs";
import Membership from "../pages/public/Membership";
import SquadCommon from "../pages/squads/SquadCommon";
import Login from "../pages/auth/Login";
import SingleBlog from "../pages/public/SingleBlog";
import RPILegalPage from "../pages/public/RPILegalPage";
import Join from "../pages/public/Join";
import NotFound from "../pages/public/NotFound";
import Contact from "../pages/public/Contact";
import FullScreenLoader from "../components/common/FullScreenLoader";

const Registration2025 = lazy(() =>
  import("../pages/public/Registration2025")
);

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Home />} />
          <Route path="founders" element={<FoundingComitte />} />
          <Route path="notices" element={<Notices />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="blogs/:id" element={<SingleBlog />} />
          <Route path="events" element={<Events />} />
          <Route path="events/:id" element={<SingleEventDetails />} />
          <Route path="executives" element={<Executives />} />
          <Route path="executives/:id" element={<ExecutiveMemberProfile />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:id" element={<ProjectDetails />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="membership" element={<Membership />} />
          <Route path="legal" element={<RPILegalPage />} />
          <Route path="join" element={<Join />} />
          <Route path="contact" element={<Contact />} />

          <Route path="auth">
            <Route index element={<Login />} />
            <Route path="login" element={<Login />} />
          </Route>





          

          <Route path="squads" >
            <Route index element={<SquadsHome />} />
            <Route path=":slug" element={<SquadCommon />} />
          </Route>

          <Route
            path="registration-2025"
            element={
              <Suspense
                fallback={
                  <FullScreenLoader />
                }
              >
                <Registration2025 />
              </Suspense>
            }
          />

        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
