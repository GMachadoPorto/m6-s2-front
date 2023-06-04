import { Route, Routes } from "react-router-dom";
import { FormPage } from "../pages/forms";
import { MainPage } from "../pages/main";
import ProtectedRoutes from "./ProtectedRoutes";
import { ContactProvider } from "../contexts/contactContext";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<FormPage />} />
      <Route element={<ProtectedRoutes />}>
        <Route
          path="/dashboard"
          element={
            <ContactProvider>
              <MainPage />
            </ContactProvider>
          }
        />
      </Route>
    </Routes>
  );
};
