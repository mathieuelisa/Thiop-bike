"use client";

import Button from "@/components/ui/Button";
import Typography from "@/components/ui/Typography";
import {
  TCustomerFormSchema,
  customerSchema,
} from "@/entities/Contact.interface";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";

export default function Reservations() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TCustomerFormSchema>({
    resolver: zodResolver(customerSchema),
  });
  const onSubmit = (data: any) => {
    console.log("formulaire validé:", data);
  };

  return (
    <section className='h-screen mx-5 tablet:px-20 '>
      <div className='flex  flex-col items-start'>
        <Typography className='text-3xl text-center tablet:text-start tablet:text-4xl mt-10 font-black uppercase font-yeseva'>
          Votre reservation
        </Typography>
        {/* <Typography className='max-w-2xl text-center mt-4'>
          Voici l&#39;équipe derrière le projet Thiop Thiop Bike. Spécialement
          composée de passionnés de la culture sénégalaise, chef en cuisine et
          en guide.
        </Typography> */}
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
              <label>Telephone</label>
              <input
                className={twMerge(
                  "border bg-colors-transparent w-full rounded-md min-h-9 p-2  mt-2",
                  errors.email && "border-colors-red-200"
                )}
                type='text'
                {...register("phoneNumber")}
              />
              {errors.phoneNumber && (
                <span className='text-colors-red-200'>
                  {errors.phoneNumber.message}
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
              <input
                className={twMerge(
                  "border bg-colors-transparent w-full rounded-md min-h-9 p-2  mt-2",
                  errors.nbOfParticipants && "border-colors-red-200"
                )}
                type='text'
                {...register("nbOfParticipants")}
              />
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
                <label>Informations complémentaires</label>
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
        className='border ml-auto mt-3 w-44 bg-colors-middlegreen'
      >
        ENVOYER
      </Button>
    </section>
  );
}
