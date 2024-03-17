"use client";

import React, { ForwardedRef, forwardRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Typography from "@/components/ui/Typography";
import Button from "@/components/ui/Button";
import CloseIcon from "@/components/ui/Icons/CloseIcon";
import { useConditionText } from "@/context/ConditionsTextContext";

type TrailerModalProps = {
  type: string;
};

const ConditionModal = forwardRef(
  ({ type }: TrailerModalProps, ref: ForwardedRef<HTMLDivElement>) => {
    const [isShowOtherCondition, setIsShowOtherCondition] = useState(false);
    const { setConditionOpen } = useConditionText();

    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        ref={ref}
        className='bg-colors-gray-50 justify-between rounded-lg gap-7 left-0 w-full  min-h-[550px] tablet:min-h-[350px] absolute bottom-0 z-50 flex p-5 tablet:flex-row flex-col'
      >
        <section className='text-colors-gray-600 flex flex-col w-full'>
          <Button
            type='button'
            onClick={() => setConditionOpen(false)}
            className='w-full flex justify-end'
          >
            <CloseIcon className='h-6 fill-colors-gray-600 w-6' />
          </Button>
          {isShowOtherCondition ? (
            <div>
              <Typography className='font-yeseva text-2xl'>
                CONDITIONS GÉNÉRALES DE VENTE
              </Typography>
              <div className='my-8'>
                <Typography className='text-md'>
                  Conditions de réservation et modalités de paiement
                </Typography>
                <Typography className='text-sm mt-5 max-w-[600px]'>
                  Un acompte de 25% du montant total de l’excursion choisie est
                  demandé afin de confirmer la réservation. Les 75% restant
                  seront à payer la veille du rendez-vous. Les règlements sont à
                  effectuer par Wave, Sendwave ou Orange Money. Les coordonnées
                  de notre compte vous seront transmises lors de la réservation.
                  Les frais de transferts restent à votre charge.
                </Typography>
              </div>

              <div>
                <Typography className='text-md'>
                  Conditions de réservation et modalités de paiement
                </Typography>
                <Typography className='text-sm mt-5 max-w-[600px]'>
                  En cas d’annulation, l’acompte de 25% est conservé par THIOP
                  THIOP BIKE.
                </Typography>
              </div>
            </div>
          ) : (
            <div>
              <Typography className='font-yeseva text-2xl'>
                CONDITIONS GENERALES D’UTILISATION DU SITE INTERNET
              </Typography>

              <Typography className='text-sm my-7 max-w-[600px]'>
                Les marques, logos, signes ainsi que tous les contenus du site
                (textes, images, son…) font l&#39;objet d&#39;une protection par
                le Code de la propriété intellectuelle et plus particulièrement
                par le droit d&#39;auteur. <br />
                <br /> L&#39;Utilisateur doit solliciter l&#39;autorisation
                préalable du site pour toute reproduction, publication, copie
                des différents contenus. Il s&#39;engage à une utilisation des
                contenus du site dans un cadre strictement privé, toute
                utilisation à des fins commerciales et publicitaires est
                strictement interdite. Toute représentation totale ou partielle
                de ce site par quelque procédé que ce soit, sans l’autorisation
                expresse de l’exploitant du site Internet constituerait une
                contrefaçon. Il est rappelé que l’Utilisateur qui reproduit,
                copie ou publie le contenu protégé doit citer l’auteur et sa
                source.
              </Typography>
            </div>
          )}

          <Button
            type='button'
            onClick={() => setIsShowOtherCondition((prev) => !prev)}
            className='flex items-end justify-end hover:text-colors-lightBrown'
          >
            {isShowOtherCondition ? "LIRE NOS CGU" : "LIRE NOS CGV"}
          </Button>
        </section>
      </motion.div>
    );
  }
);

ConditionModal.displayName = "ConditionModal";

export default ConditionModal;
