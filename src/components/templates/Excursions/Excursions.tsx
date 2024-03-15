import React from "react";
import { EXCURSIONS_DATASET } from "./Excursions.data";
import Button from "@/components/ui/Button";

export default function Excursions() {
  return (
    <section>
      {EXCURSIONS_DATASET.map((element) => (
        <Button key={element.id} href={element.urlPath}>
          {element.title}
        </Button>
      ))}
    </section>
  );
}
