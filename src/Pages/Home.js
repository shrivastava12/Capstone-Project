import React from "react";
import Features from "../Components/Features/Features";
import Footer from "../Components/Footer";
import Banner from "../Components/Banner";
// import Info from "../Components/Information/info";

import "../App.css";
import KuchBhi from "../Components/KuchBhi";
import Navbar from "../Components/Nav/Navbar";
import Feature from "../Components/Feature";

function Home() {
  return (
    <>
      {/* <Info/> */}
      {/* <Info/> */}
      {/* <Navbar/> */}
      <Banner/>
      <KuchBhi />
      <Features/>
      {/* <Footer /> */}
      
     
    </>
  );
}

export default Home;
