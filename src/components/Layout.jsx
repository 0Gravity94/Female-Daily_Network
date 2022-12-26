import React from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="w-full h-max border border-t-neutral-content border-b-stone-300">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
