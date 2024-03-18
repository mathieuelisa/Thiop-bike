"use client";

import React, { useEffect } from "react";
import Banner from "./Banner";
import Advantages from "./Advantages";
// import Proposals from "./Proposals";

export default function Home() {
  useEffect(() => {
    window.scrollTo({
      top: 100,
    });
  }, []);

  return (
    <main>
      <Banner />
      <div className='px-5 tablet:px-20'>
        <Advantages />
        {/* <Proposals /> */}
      </div>
    </main>
  );
}
