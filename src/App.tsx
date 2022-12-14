import type { FC } from "react";
import { lazy } from "react";
import { Suspense } from "react";

import { Routes, Route } from "react-router-dom";
import LoaderBox from "./components/LoaderBox";
import ProtectedRoute from "./components/ProtectedRoute";

const Landing = lazy(() => import("./pages/Landing"));
const NotFound = lazy(() => import("./pages/NotFound"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const ServerSelection = lazy(() => import("./pages/Journey/ServerSelection"));

const App: FC = () => {
  return (
    <Suspense fallback={<LoaderBox />}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsAndConditions />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/server-selection" element={<ServerSelection />} />
          <Route path="/dashboard" element={<Landing />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default App;
