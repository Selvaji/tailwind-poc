import HomeBannerComponent from "./component/banner";
import FooterComponent from "./component/footer";
import HeaderComponent from "./component/header";
import PopularSubjectComponent from "./component/popular-subject";
import ThreeCardComponent from "./component/three-card";
import React from "react";
export default function Home() {
  return (
    <main className="relative">
      <HeaderComponent />
      <HomeBannerComponent />
      <ThreeCardComponent />
      <PopularSubjectComponent />
      <FooterComponent />
    </main>
  );
}
