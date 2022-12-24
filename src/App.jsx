import React from "react";

import Layout from "../src/components/Layout";
import {
  TopFrame,
  Billboard,
  InternalCampaign,
  BottomFrame,
} from "./components/AdsFrames";

function App() {
  return (
    <Layout>
      <TopFrame />
      <Billboard />
      <InternalCampaign />
      <BottomFrame />
    </Layout>
  );
}

export default App;
