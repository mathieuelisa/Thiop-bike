"use client";

import React from "react";
import { EXCURSIONS_DATASET } from "../Excursions/Excursions.data";
import { useParams } from "next/navigation";
import Typography from "@/components/ui/Typography";
import Reservations from "../Reservations";
import Image from "next/image";
import Button from "@/components/ui/Button";
import ArrowRightIcon from "@/components/ui/Icons/ArrowRightIcon";
import { useTranslation } from "react-i18next";

export default function Excursion() {
  const { t } = useTranslation();

  const { id } = useParams();

  const excursionId = EXCURSIONS_DATASET.find((element) =>
    element.urlPath.includes(id as string)
  );

  // Schema rendering
  const getRenderSchema = (id: number) => {
    switch (id) {
      case 1:
        return (
          <section className='flex '>
            <div className='border-r-4 mr-2 border-colors-darkbrown h-80' />
            <div className='flex flex-col items-start gap-5 justify-between'>
              <Typography className='text-colors-darkbrown'>
                {t("excursions.steps.departureFromNdangane")}
              </Typography>
              <Typography className='text-colors-darkbrown'>
                {t("excursions.steps.crossingTheSambiaForest")}
              </Typography>
              <Typography className='text-colors-darkbrown'>
                {t("excursions.steps.arrivalDjifferFishermen")}
              </Typography>
              <Typography className='text-colors-darkbrown'>
                {t("excursions.steps.lunch")}
              </Typography>
              <Typography className='text-colors-darkbrown'>
                {t("excursions.steps.relaxationInBolongs")}
              </Typography>
              <Typography className='text-colors-darkbrown'>
                {t("excursions.steps.visitPalmarinSalt")}
              </Typography>
              <Typography className='text-colors-darkbrown'>
                {t("excursions.steps.backToNdangane")}
              </Typography>
            </div>
          </section>
        );
      case 2:
        return (
          <section className='flex '>
            <div className='border-r-4 mr-2 border-colors-darkbrown h-48' />
            <div className='flex flex-col items-start gap-5'>
              <Typography className='text-colors-darkbrown'>
                {t("excursions.steps.departureFromNdangane")}
              </Typography>
              <Typography className='text-colors-darkbrown'>
                {t("excursions.steps.crossingTheSambiaForest")}
              </Typography>
              <Typography className='text-colors-darkbrown'>
                {t("excursions.steps.relaxationInBolongs")}
              </Typography>
              <Typography className='text-colors-darkbrown'>
                {t("excursions.steps.visitPalmarinSalt")}
              </Typography>
              <Typography className='text-colors-darkbrown'>
                {t("excursions.steps.backToNdangane")}
              </Typography>
            </div>
          </section>
        );
      case 3:
        return (
          <section className='flex '>
            <div className='border-r-4 mr-2 border-colors-darkbrown h-80' />
            <div className='flex flex-col items-start gap-5 justify-between'>
              <Typography className='text-colors-darkbrown'>
                {t("excursions.steps.departureFromNdangane")}
              </Typography>
              <Typography className='text-colors-darkbrown'>
                {t("excursions.steps.crossingTheSambiaForest")}
              </Typography>
              <Typography className='text-colors-darkbrown'>
                {t("excursions.steps.arrivalJoalFishermen")}
              </Typography>
              <Typography className='text-colors-darkbrown'>
                {t("excursions.steps.guidedFadiouthShellfishIsland")}
              </Typography>
              <Typography className='text-colors-darkbrown'>
                {t("excursions.steps.lunch")}
              </Typography>
              <Typography className='text-colors-darkbrown'>
                {t("excursions.steps.discoveryBaobabFadial")}
              </Typography>
              <Typography className='text-colors-darkbrown'>
                {t("excursions.steps.visitPalmarinSalt")}
              </Typography>
              <Typography className='text-colors-darkbrown'>
                {t("excursions.steps.backToNdangane")}
              </Typography>
            </div>
          </section>
        );
      case 4:
        return (
          <section className='flex '>
            <div className='border-r-4 mr-2 border-colors-darkbrown h-[450px]' />
            <div className='flex flex-col items-start gap-5 justify-between'>
              <Typography className='text-colors-darkbrown'>
                {t("excursions.steps.departureFromNdangane")}
              </Typography>
              <Typography className='text-colors-darkbrown'>
                {t("excursions.steps.discoverYayèmeVillage")}
              </Typography>
              <Typography className='text-colors-darkbrown'>
                {t("excursions.steps.crossingTheSambiaForest")}
              </Typography>
              <Typography className='text-colors-darkbrown'>
                {t("excursions.steps.crossTheSimalBridge")}
              </Typography>
              <Typography className='text-colors-darkbrown'>
                {t("excursions.steps.sacredWellOfCheikh")}
              </Typography>
              <Typography className='text-colors-darkbrown'>
                {t("excursions.steps.lunch")}
              </Typography>
              <Typography className='text-colors-darkbrown'>
                {t("excursions.steps.swimming")}
              </Typography>
              <Typography className='text-colors-darkbrown'>
                {t("excursions.steps.visitMahicoMuseum")}
              </Typography>
              <Typography className='text-colors-darkbrown'>
                {t("excursions.steps.backToNdangane")}
              </Typography>
            </div>
          </section>
        );
      case 5:
        return (
          <section className='flex '>
            <div className='border-r-4 mr-2 border-colors-darkbrown h-[400px]' />
            <div className='flex flex-col items-start gap-5 justify-between'>
              <Typography className='text-colors-darkbrown'>
                {t("excursions.steps.discoverYayèmeVillage")}
              </Typography>
              <Typography className='text-colors-darkbrown'>
                {t("excursions.steps.crossingTheSambiaForest")}
              </Typography>
              <Typography className='text-colors-darkbrown'>
                {t("excursions.steps.marketFimela")}
              </Typography>
              <Typography className='text-colors-darkbrown'>
                {t("excursions.steps.crossTheSimalBridge")}
              </Typography>
              <Typography className='text-colors-darkbrown'>
                {t("excursions.steps.sacredWellOfCheikh")}
              </Typography>
              <Typography className='text-colors-darkbrown'>
                {t("excursions.steps.relaxationInBolongs")}
              </Typography>
              <Typography className='text-colors-darkbrown'>
                {t("excursions.steps.discoverDjilor")}
              </Typography>
              <Typography className='text-colors-darkbrown'>
                {t("excursions.steps.backToNdangane")}
              </Typography>
            </div>
          </section>
        );
      case 6:
        return (
          <section className='flex '>
            <div className='border-r-4 mr-2 border-colors-darkbrown h-32' />
            <div className='flex flex-col items-start gap-4 justify-between'>
              <Typography className='text-colors-darkbrown'>
                {t("excursions.steps.discoverYayèmeVillage")}
              </Typography>
              <Typography className='text-colors-darkbrown'>
                {t("excursions.steps.crossingTheSambiaForestSunset")}
              </Typography>
              <Typography className='text-colors-darkbrown'>
                {t("excursions.steps.aperitifEntertainement")}
              </Typography>
            </div>
          </section>
        );
      default:
        return "pas de parcours";
    }
  };

  return (
    <section className='w-full flex'>
      <div className='flex-col flex tablet:flex-row'>
        <div className='tablet:w-1/2 w-full flex items-center flex-col mt-3 tablet:mt-10 tablet:px-10'>
          <Button
            href='/excursions'
            className='mr-auto ml-7 tablet:ml-0 uppercase text-colors-gray-50 hover:text-colors-middlebrown text-sm tablet:text-base'
          >
            <ArrowRightIcon className='h-6 rotate-180 mr-2 hidden tablet:block' />{" "}
            {t("common.back")}
          </Button>
          <Image
            quality={30}
            className=' left-10'
            width={500}
            height={500}
            src={excursionId?.imageDetail || ""}
            alt='excursion_detail'
          />

          <Typography className='w-full mb-4 text-base text-center text-colors-gray-50 tablet:text-start'>
            {t("excursions.ourStep")}
          </Typography>
          {getRenderSchema(excursionId?.id || 0)}
        </div>

        <div className='tablet:w-1/2 w-full'>
          <Reservations titleExcursion={excursionId?.title || ""} />
        </div>
      </div>
    </section>
  );
}
