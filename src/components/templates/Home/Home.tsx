import React from "react";
import Banner from "./Banner";
import Advantages from "./Advantages";
import Proposals from "./Proposals";

export default function Home() {
  return (
    <main>
      <Banner />
      <div className='px-20'>
        <Advantages />
        <Proposals />
      </div>
    </main>
  );
}
