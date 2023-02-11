import Nav from "./Nav";
import Footer from "./Footer";

import React from 'react'

const Layout: React.FC<{ children: JSX.Element }> = ({ children }) => {
  return (
    <>
      <Nav />
      <div className="pt-24">
        {children}
      </div>
      <Footer />
    </>
  )
}

export default Layout
