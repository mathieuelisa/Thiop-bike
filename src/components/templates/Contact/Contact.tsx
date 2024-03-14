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

export default function Contact() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TCustomerFormSchema>({
    resolver: zodResolver(customerSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      object: "",
      email: "",
      message: "",
    },
  });
  const onSubmit = (data: any) => {
    console.log("formulaire validé:", data);
  };

  // console.log(watch());

  return (
    <section className='h-screen mx-5 tablet:px-20 '>
      <div className='flex  flex-col items-start'>
        <Typography className='text-3xl text-center tablet:text-start tablet:text-4xl mt-10 font-black uppercase font-yeseva'>
          Votre petit message
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
              <label>Objet</label>
              <input
                className='border bg-colors-transparent w-full rounded-md min-h-9 p-2  mt-2'
                type='text'
                {...register("object")}
              />
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
              <label>Message</label>
              <textarea
                className='border bg-colors-transparent mt-2 w-full rounded-md min-h-36 p-2'
                {...register("message")}
              />
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
