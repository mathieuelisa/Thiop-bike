"use client";

import React from "react";
import { EXCURSIONS_DATASET } from "../Excursions/Excursions.data";
import { useParams } from "next/navigation";
import Typography from "@/components/ui/Typography";

export default function Excursion() {
  const { id } = useParams();

  console.log("id:", id);

  const excursionId = EXCURSIONS_DATASET.find((element) =>
    element.urlPath.includes(id as string)
  );
  return (
    <section>
      <div>
        <Typography>{excursionId?.title}</Typography>
        <Typography>{excursionId?.description}</Typography>
      </div>
    </section>
  );
}
