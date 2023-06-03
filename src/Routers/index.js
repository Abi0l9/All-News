import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../components/Main";
import SelectedNewsPage from "../components/SelectedNewsPage";
import SourcePage from "../components/SourcePage";

function Router() {
  return (
    <div>
      <Routes>
        <Route path="" element={<Main />} />
        <Route path="/news/:title" element={<SelectedNewsPage />} />
        <Route path="/sources/" element={<SourcePage />} />
      </Routes>
    </div>
  );
}

export default Router;
