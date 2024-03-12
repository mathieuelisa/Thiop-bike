"use client";

import Carousel from "nuka-carousel";
import React from "react";
import { PROPOSALS_DATASET } from "./Proposals.data";
import Typography from "@/components/ui/Typography";

export default function Proposals() {
  return (
    <section>
      <Carousel
        autoplay={true}
        autoplayInterval={6000}
        wrapAround={true}
        dragging
        speed={1500}
        withoutControls={true}
        className='cursor-grabbing'
      >
        {PROPOSALS_DATASET.map((element) => {
          return (
            <div
              key={element.id}
              className='bg-colors-gray-500 rounded-3xl px-6 py-3 mx-9'
            >
              <Typography>{element.description}</Typography>
            </div>
          );
        })}
      </Carousel>
    </section>
  );
}
