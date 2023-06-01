import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../components/Main";
import SelectedNewsPage from "../components/SelectedNewsPage";

function Router() {
  return (
    <div>
      <Routes>
        <Route path="" element={<Main />} />
        <Route path="/news/:title" element={<SelectedNewsPage />} />
      </Routes>
    </div>
  );
}

export default Router;
