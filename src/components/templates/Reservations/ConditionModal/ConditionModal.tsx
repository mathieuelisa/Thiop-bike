"use client";

import React, { ForwardedRef, forwardRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Typography from "@/components/ui/Typography";
import Button from "@/components/ui/Button";
import CloseIcon from "@/components/ui/Icons/CloseIcon";
import { useConditionText } from "@/context/ConditionsTextContext";
import { useTranslation } from "react-i18next";

type TrailerModalProps = {
  type: string;
};

const ConditionModal = forwardRef(
  ({ type }: TrailerModalProps, ref: ForwardedRef<HTMLDivElement>) => {
    const { t } = useTranslation();

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
              <Typography className='font-yeseva text-2xl uppercase'>
                {t("excursions.cgv.title")}
              </Typography>
              <div className='my-8'>
                <Typography className='text-md'>
                  {t("excursions.cgv.underFirstTitle")}
                </Typography>
                <Typography className='text-sm mt-5 max-w-[600px]'>
                  {t("excursions.cgv.underFirstDescription")}
                </Typography>
              </div>

              <div>
                <Typography className='text-md'>
                  {t("excursions.cgv.secondTitle")}
                </Typography>
                <Typography className='text-sm mt-5 max-w-[600px]'>
                  {t("excursions.cgv.underSecondDescription")}
                </Typography>
              </div>
            </div>
          ) : (
            <div>
              <Typography className='font-yeseva text-2xl uppercase'>
                {t("excursions.cgu.title")}
              </Typography>

              <Typography className='text-sm my-7 max-w-[600px]'>
                {t("excursions.cgu.description")}
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
