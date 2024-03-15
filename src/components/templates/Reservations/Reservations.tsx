"use client";

import Button from "@/components/ui/Button";
import Typography from "@/components/ui/Typography";
import {
  TCustomerFormSchema,
  customerSchema,
} from "@/entities/Contact.interface";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {
  titleExcursion: string;
};

export default function Reservations({ titleExcursion }: Props) {
  const notify = () =>
    toast.success("Réservation envoyée !", { position: "top-right" });

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<TCustomerFormSchema>({
    resolver: zodResolver(customerSchema),
  });
  const onSubmit = (data: any) => {
    console.log("formulaire validé:", data);
    notify();
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        nbOfParticipants: "",
        allergy: "",
        additionalInfo: "",
      });
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <section className=' mx-5 tablet:px-12 '>
      <div className='flex  flex-col items-start'>
        <Typography className='text-3xl w-full text-center tablet:text-4xl mt-10 font-black uppercase font-yeseva'>
          {titleExcursion}
          <br />
          <span className='text-colors-lightbrown'>Reservation</span>
        </Typography>
      </div>
      <section className='flex justify-center w-full'>
        <form
          id='contact-form'
          className='flex mt-8 w-full gap-7'
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className='flex flex-col w-full gap-3'>
            <div className='w-full flex gap-7 '>
              <div className='flex flex-col w-full'>
                <label>Prénom</label>
                <input
                  className={twMerge(
                    "border bg-colors-transparent w-full rounded-md min-h-9 p-2 mt-2 ",
                    errors.email && "border-colors-red-200"
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
              <div className='flex flex-col w-full'>
                <label>Nom</label>
                <input
                  className={twMerge(
                    "border bg-colors-transparent w-full rounded-md min-h-9 p-2  mt-2",
                    errors.email && "border-colors-red-200"
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
            </div>
            <div className='w-full'>
              <label>Téléphone</label>
              <input
                className={twMerge(
                  "border bg-colors-transparent w-full rounded-md min-h-9 p-2  mt-2",
                  errors.email && "border-colors-red-200"
                )}
                type='text'
                {...register("phone")}
              />
              {errors.phone && (
                <span className='text-colors-red-200'>
                  {errors.phone.message}
                </span>
              )}
            </div>
            <div className='w-full'>
              <label>Email</label>
              <input
                className={twMerge(
                  "border bg-colors-transparent w-full rounded-md min-h-9 p-2  mt-2",
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
            <div className='w-full'>
              <label>Excursions</label>
              <select
                id='excursions'
                {...register("excursions")}
                className={twMerge(
                  "border bg-colors-transparent w-full rounded-md min-h-9 p-2  mt-2",
                  errors.excursions && "border-colors-red-200"
                )}
              >
                <option value='Journée - A la découverte de Djiffer et Palmarin'>
                  Journée - A la découverte de Djiffer et Palmarin
                </option>
                <option value='Demi journée - A la découverte de Djiffer et Palmarin'>
                  Demi journée - A la découverte de Djiffer et Palmarin
                </option>
                <option value='Sur la route de Joal Fadiouth'>
                  Sur la route de Joal Fadiouth
                </option>

                <option value='Journée - Au coeur des villages'>
                  Journée - Au coeur des villages
                </option>
                <option value='Demi journée - Au coeur des villages'>
                  Demi journée - Au coeur des villages
                </option>
                <option value='Sambia dia à l&#39;heure du coucher du soleil'>
                  Sambia dia à l&#39;heure du coucher du soleil
                </option>
              </select>

              {errors.excursions && (
                <span className='text-colors-red-200'>
                  {errors.excursions.message}
                </span>
              )}
            </div>
            <div className='w-full'>
              <label>Nombre de participants</label>
              <select
                id='nbOfParticipants'
                {...register("nbOfParticipants")}
                className={twMerge(
                  "border bg-colors-transparent w-full rounded-md min-h-9 p-2  mt-2",
                  errors.nbOfParticipants && "border-colors-red-200"
                )}
              >
                <option value='1'>1 participant</option>
                <option value='2 à 3'>2 à 3 participants</option>
                <option value='4 à 5'>4 à 5 participants</option>
                <option value='6 à 7'>6 à 7 participants</option>
                <option value='8 à 9'>8 à 9 participants</option>
                <option value='10 à 11'>10 à 11 participants</option>
                <option value='plus de 12'>plus de 12 participants</option>
              </select>

              {errors.nbOfParticipants && (
                <span className='text-colors-red-200'>
                  {errors.nbOfParticipants.message}
                </span>
              )}
            </div>
            <div className='w-full flex gap-7 '>
              <div className='w-full'>
                <label>Allergies</label>
                <textarea
                  className={twMerge(
                    "border bg-colors-transparent w-full rounded-md min-h-11  p-2  mt-2",
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
              <div className='w-full'>
                <label>Info. complémentaires</label>
                <textarea
                  className={twMerge(
                    "border bg-colors-transparent w-full rounded-md  p-2 min-h-11  mt-2",
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
        type='submit'
        form='contact-form'
        color='primary'
        className='border ml-auto mt-3 w-44 bg-colors-gray-50 text-colors-lightgreen hover:bg-colors-middlegreen hover:text-colors-gray-50'
      >
        ENVOYER
      </Button>
      <ToastContainer />
    </section>
  );
}
