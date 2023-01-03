import { RecoilRoot } from "recoil";
import { Suspense } from "react";

import Layout from "./containers/Layout";
import Router from "./containers/Router";

const App = () => {
  return (
    <RecoilRoot>
      <Suspense fallback={<p>Loding...</p>}>
        <Layout>
          <Router />
        </Layout>
      </Suspense>
    </RecoilRoot>
  );
};

export default App;
