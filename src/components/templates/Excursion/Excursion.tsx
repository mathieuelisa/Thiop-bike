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

  console.log(typeof id);

  // Schema rendering
  const getRenderSchema = (id: number) => {
    switch (id) {
      case 1:
        return (
          <section className='flex '>
            <div className='border-r-4 mr-2 border-colors-darkbrown h-80' />
            <div className='flex flex-col items-start gap-5 justify-between'>
              <Typography className='text-colors-darkbrown'>
                Départ de Ndangane
              </Typography>
              <Typography className='text-colors-darkbrown'>
                Traversée de la forêt classée de Sambia Dia
              </Typography>
              <Typography className='text-colors-darkbrown'>
                Djiffer (arrivée des pecheurs)
              </Typography>
              <Typography className='text-colors-darkbrown'>
                Déjeuner
              </Typography>
              <Typography className='text-colors-darkbrown'>
                Détente et baignade dans les bolongs
              </Typography>
              <Typography className='text-colors-darkbrown'>
                Visite des puits de sel de Palmarin
              </Typography>
              <Typography className='text-colors-darkbrown'>
                Retour à Ndangane
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
                Départ de Ndangane
              </Typography>
              <Typography className='text-colors-darkbrown'>
                Traversée dela forêt de Samba Dia
              </Typography>
              <Typography className='text-colors-darkbrown'>
                Détente etbaignade dans les bolongs
              </Typography>
              <Typography className='text-colors-darkbrown'>
                Visite despuis de sel de Palmarin
              </Typography>
              <Typography className='text-colors-darkbrown'>
                Retour à Ndangane
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
                Départ de Ndangane
              </Typography>
              <Typography className='text-colors-darkbrown'>
                Traversée de la forêt classée de Sambia Dia
              </Typography>
              <Typography className='text-colors-darkbrown'>
                Joal (arrivée des pecheurs)
              </Typography>
              <Typography className='text-colors-darkbrown'>
                Visite guidée de l’île aux coquillages de Fadiouth
              </Typography>
              <Typography className='text-colors-darkbrown'>
                Déjeuner
              </Typography>
              <Typography className='text-colors-darkbrown'>
                Découverte du grand baobab sacré de Fadial
              </Typography>
              <Typography className='text-colors-darkbrown'>
                Visite des puits de sels de Palmarin
              </Typography>
              <Typography className='text-colors-darkbrown'>
                Retour à Ndangane
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
                Départ deNdangane
              </Typography>
              <Typography className='text-colors-darkbrown'>
                Découverte duvillage de Yayème
              </Typography>
              <Typography className='text-colors-darkbrown'>
                Visite de laForêt de Samba Dia
              </Typography>
              <Typography className='text-colors-darkbrown'>
                Traversée dupont de Simal
              </Typography>
              <Typography className='text-colors-darkbrown'>
                Puit sacré deCheikh Oumar Fouty Tall
              </Typography>
              <Typography className='text-colors-darkbrown'>
                Déjeuner
              </Typography>
              <Typography className='text-colors-darkbrown'>
                Baignade
              </Typography>
              <Typography className='text-colors-darkbrown'>
                Visite dumusée Mahicao
              </Typography>
              <Typography className='text-colors-darkbrown'>
                Retour à Ndangane
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
                Découverte du village de Yayème
              </Typography>
              <Typography className='text-colors-darkbrown'>
                Visite de la Forêt de Samba Dia
              </Typography>
              <Typography className='text-colors-darkbrown'>
                Visite de laForêt de Samba Dia
              </Typography>
              <Typography className='text-colors-darkbrown'>
                Traversée du pont de Simal
              </Typography>
              <Typography className='text-colors-darkbrown'>
                Découverte du puit sacré
                <br /> de Cheikh Oumar Fouty Tall
              </Typography>
              <Typography className='text-colors-darkbrown'>
                Baignade dans les bolongs
              </Typography>
              <Typography className='text-colors-darkbrown'>
                Découverte de Djilor
              </Typography>
              <Typography className='text-colors-darkbrown'>
                Retour à Ndangane
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
                Découverte du village de Yayème
              </Typography>
              <Typography className='text-colors-darkbrown'>
                Découverte de la Forêt de Samba Dia à l’heure du coucher du
                soleil
              </Typography>
              <Typography className='text-colors-darkbrown'>
                Apéritif, animation djembé et chants traditionnels
              </Typography>
            </div>
          </section>
        );
      default:
        return "ji";
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

          {/* <Typography className='text-center text-colors-gray-50 mt-5'> */}
          {/* {t(excursionId?.description || "")} */}
          <Typography className='w-full mb-4 text-base text-center tablet:text-start'>
            Nos étapes
          </Typography>
          {getRenderSchema(excursionId?.id || 0)}
          {/* </Typography> */}
        </div>

        <div className='tablet:w-1/2 w-full'>
          <Reservations titleExcursion={excursionId?.title || ""} />
        </div>
      </div>
    </section>
  );
}
