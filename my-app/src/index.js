import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RecoilRoot>
    <Suspense fallback={<p>Loading...</p>}>
      <App />
    </Suspense>
  </RecoilRoot>
);
