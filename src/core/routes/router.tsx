import { BrowserRouter, Route, Routes } from "react-router-dom";

import DashboardLayout from "../components/layouts/dashboard_layout";
import HomePage from "../pages/home/home.page";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout></DashboardLayout>}>
          <Route index element={<HomePage></HomePage>} />
        </Route>

        <Route path="*" element={<h1>not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};
