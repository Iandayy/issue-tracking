import { Route, Routes } from "react-router-dom";

import IssueStatus from "../pages/status/IssueStatus";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<IssueStatus />} />
    </Routes>
  );
};

export default Router;
