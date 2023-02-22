import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Header from '../../components/Header/Header'
import Error from '../../components/Error/Error'
import Survey from '../Survey/Survey'
import Results from '../Results/Results'
import Freelances from '../Freelances/Freelances'

export default function Homepage() {
  return (
    <div>

      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="survey/:questionNumber" element={<Survey />} />
          <Route path="results" element={<Results />} />
          <Route path="freelances" element={<Freelances />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1> Page d'accueil 🏠</h1>
    </div>
  );
}
