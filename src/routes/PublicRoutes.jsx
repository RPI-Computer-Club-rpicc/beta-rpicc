import React, { Suspense } from "react";
import { Route } from "react-router";
import FullScreenLoader from "../components/common/FullScreenLoader";
import {
  Home,
  FoundingComitte,
  Notices,
  Blogs,
  SingleBlog,
  Events,
  SingleEventDetails,
  Executives,
  ExecutiveMemberProfile,
  Projects,
  ProjectDetails,
  Gallery,
  Testimonials,
  AboutUs,
  Membership,
  RPILegalPage,
  Join,
  Contact,
  Registration2025,
  Resources
} from "./LazyRoutes";

const PublicRoutes = (
  <>
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
    <Route path="resources" element={<Resources />} />
    <Route
      path="registration-2025"
      element={
        <Suspense fallback={<FullScreenLoader />}>
          <Registration2025 />
        </Suspense>
      }
    />
  </>
);

export default PublicRoutes;
