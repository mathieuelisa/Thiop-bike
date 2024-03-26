"use client";

import Button from "@/components/ui/Button";
import Typography from "@/components/ui/Typography";
import {
  TCustomerFormSchema,
  customerSchema,
} from "@/entities/Contact.interface";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useConditionText } from "@/context/ConditionsTextContext";
import ConditionModal from "./ConditionModal";
import useClickOutside from "@/hooks/useClickOutside";
import { useTranslation } from "react-i18next";

type Props = {
  titleExcursion?: string;
};

export default function Reservations({ titleExcursion }: Props) {
  const { t } = useTranslation();
  const notify = () =>
    toast.success("Réservation envoyée !", { position: "bottom-right" });

  const { toggleCondition, isConditionOpen, setConditionOpen } =
    useConditionText();
  const conditionCheckRef = useRef<HTMLDivElement>(null);

  useClickOutside(
    isConditionOpen,
    () => setConditionOpen(false),
    conditionCheckRef
  );

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<TCustomerFormSchema>({
    resolver: zodResolver(customerSchema),
  });

  const onSubmit = async (data: any) => {
    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.status === 200) {
      notify();
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        excursions: "",
        nbOfParticipants: "",
        allergy: "",
        additionalInfo: "",
        date: new Date(),
      });
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <>
      <section className=' mx-5 tablet:px-12 '>
        <div className='flex  flex-col items-start'>
          <Typography className='text-3xl text-colors-gray-50 w-full text-center tablet:text-4xl mt-10 font-black uppercase font-yeseva'>
            {t(titleExcursion || "")}
            <br />
            <span className='text-colors-lightbrown'>Réservation</span>
          </Typography>
        </div>
        <section className='flex justify-center w-full'>
          <form
            id='contact-form'
            className='flex mt-8 w-full gap-7'
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className='flex flex-col w-full gap-3'>
              <div className='w-full flex flex-col tablet:gap-7 tablet:flex-row'>
                {/* Lastname */}
                <div className='flex flex-col w-full'>
                  <label className='text-colors-gray-50'>
                    {t("inputs.label.lastname")}
                  </label>
                  <input
                    className={twMerge(
                      "border bg-colors-transparent text-colors-gray-50 w-full rounded-md min-h-9 p-2  mt-2",
                      errors.lastname && "border-colors-red-200"
                    )}
                    type='text'
                    {...register("lastname")}
                  />
                  {errors.lastname && (
                    <span className='text-colors-red-200'>
                      {errors.lastname.message}
                    </span>
                  )}
                </div>

                {/* Firstname */}
                <div className='flex flex-col w-full mt-2 tablet:mt-0'>
                  <label className='text-colors-gray-50'>
                    {t("inputs.label.firstname")}
                  </label>
                  <input
                    className={twMerge(
                      "border bg-colors-transparent text-colors-gray-50 w-full rounded-md min-h-9 p-2 mt-2 ",
                      errors.firstname && "border-colors-red-200"
                    )}
                    type='text'
                    {...register("firstname")}
                  />
                  {errors.firstname && (
                    <span className='text-colors-red-200'>
                      {errors.firstname.message}
                    </span>
                  )}
                </div>
              </div>

              {/* Phone */}
              <div className='w-full'>
                <label className='text-colors-gray-50'>
                  {t("inputs.label.phone")}
                </label>
                <input
                  className={twMerge(
                    "border bg-colors-transparent w-full text-colors-gray-50 rounded-md min-h-9 p-2 mt-2",
                    errors.phone && "border-colors-red-200"
                  )}
                  type='string'
                  {...register("phone")}
                />
                {errors.phone && (
                  <span className='text-colors-red-200'>
                    {errors.phone.message}
                  </span>
                )}
              </div>

              {/* Emails */}
              <div className='w-full'>
                <label className='text-colors-gray-50'>Email</label>
                <input
                  className={twMerge(
                    "border bg-colors-transparent text-colors-gray-50 w-full rounded-md min-h-9 p-2  mt-2",
                    errors.email && "border-colors-red-200"
                  )}
                  type='email'
                  {...register("email")}
                />
                {errors.email && (
                  <span className='text-colors-red-200'>
                    {errors.email.message}
                  </span>
                )}
              </div>

              {/* Excursions */}
              <div className='w-full'>
                <label className='text-colors-gray-50'>Excursions</label>
                <select
                  id='excursions'
                  {...register("excursions")}
                  className={twMerge(
                    "border bg-colors-transparent text-colors-gray-50  w-full rounded-md min-h-9 p-2  mt-2",
                    errors.excursions && "border-colors-red-200"
                  )}
                >
                  <option value='Journée - A la découverte de Djiffer et Palmarin'>
                    {t("inputs.discoveringDjifferDay")}
                  </option>
                  <option value='Demi journée - A la découverte de Palmarin'>
                    {t("inputs.discoveringDjifferHalfDay")}
                  </option>
                  <option value='Sur la route de Joal Fadiouth'>
                    {t("inputs.onTheRoadOfJoal")}
                  </option>

                  <option value='Journée - Au coeur des villages'>
                    {t("inputs.inTheHeartOfTheVillagesDay")}
                  </option>
                  <option value='Demi journée - Au coeur des villages'>
                    {t("inputs.inTheHeartOfTheVillagesHalfDay")}
                  </option>
                  <option value='Sambia dia à l&#39;heure du coucher du soleil'>
                    {t("inputs.sambiaDia")}
                  </option>
                </select>

                {errors.excursions && (
                  <span className='text-colors-red-200'>
                    {errors.excursions.message}
                  </span>
                )}
              </div>

              {/* Number of participants */}
              <div className='w-full'>
                <label className='text-colors-gray-50'>
                  {t("inputs.label.numberOfParticipant")}
                </label>
                <select
                  id='nbOfParticipants'
                  {...register("nbOfParticipants")}
                  className={twMerge(
                    "border bg-colors-transparent text-colors-gray-50 w-full rounded-md min-h-9 p-2 mt-2",
                    errors.nbOfParticipants && "border-colors-red-200"
                  )}
                >
                  <option value='1'>1 participant</option>
                  <option value='2 à 3'>2 à 3 participants</option>
                  <option value='4 à 5'>4 à 5 participants</option>
                  <option value='6 à 7'>6 à 7 participants</option>
                  <option value='8 à 9'>8 à 9 participants</option>
                  <option value='10'>10 participants</option>
                </select>

                {errors.nbOfParticipants && (
                  <span className='text-colors-red-200'>
                    {errors.nbOfParticipants.message}
                  </span>
                )}
              </div>

              {/* Date */}
              <div className='w-full'>
                <label className='text-colors-gray-50'>Date</label>
                <input
                  className={twMerge(
                    "border bg-colors-transparent w-full cursor-pointer text-colors-gray-50 rounded-md min-h-9 p-2 ",
                    errors.date && "border-colors-red-200"
                  )}
                  type='date'
                  {...register("date")}
                />
                {errors.date && (
                  <span className='text-colors-red-200'>
                    {errors.date.message}
                  </span>
                )}
              </div>

              {/* Allergies */}
              <div className='w-full flex-col gap-7 tablet:flex-row'>
                <div className='w-full'>
                  <label className='text-colors-gray-50'>Allergies</label>
                  <textarea
                    className={twMerge(
                      "border bg-colors-transparent w-full text-colors-gray-50 rounded-md min-h-11 p-2 mt-2",
                      errors.allergy && "border-colors-red-200"
                    )}
                    {...register("allergy")}
                  />
                  {errors.allergy && (
                    <span className='text-colors-red-200'>
                      {errors.allergy.message}
                    </span>
                  )}
                </div>

                {/* Additional informations */}
                <div className='w-full'>
                  <label className='text-colors-gray-50'>
                    {t("inputs.label.moreInformation")}
                  </label>
                  <textarea
                    className={twMerge(
                      "border bg-colors-transparent w-full text-colors-gray-50 rounded-md p-2 min-h-11 mt-2",
                      errors.additionalInfo && "border-colors-red-200"
                    )}
                    {...register("additionalInfo")}
                  />
                  {errors.additionalInfo && (
                    <span className='text-colors-red-200'>
                      {errors.additionalInfo.message}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </form>
        </section>
        <Button
          type='button'
          onClick={toggleCondition}
          className='text-sm mb-2 hover:text-colors-gray-50 px-0 ml-auto text-colors-darkgreen'
        >
          {t("prices.ourCGV")}
        </Button>
        <Typography className='text-xs text-end text-colors-darkgreen'>
          {t("prices.reservationProcessing")}
        </Typography>
        <Button
          type='submit'
          form='contact-form'
          color='primary'
          className='border uppercase ml-auto mt-3 w-full tablet:w-44 bg-colors-gray-50 text-colors-lightgreen hover:bg-colors-middlegreen hover:text-colors-gray-50'
        >
          {t("common.send")}
        </Button>
        <ToastContainer />
      </section>

      {isConditionOpen && (
        <section className='w-full flex justify-center items-center'>
          <ConditionModal type='' ref={conditionCheckRef} />
        </section>
      )}
    </>
  );
}
