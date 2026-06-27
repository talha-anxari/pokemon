import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import Layout from "../layouts/Layout";
import Loader from "../components/pokemon/Loader";

const Home = lazy(() => import("../App"));
const PokemonDetails = lazy(() => import("../pages/PokemonDetails"));
const Favorites = lazy(() => import("../pages/Favorites"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));
const NotFound = lazy(() => import("../pages/NotFound"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon/:name" element={<PokemonDetails />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
