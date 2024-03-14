import Typography from "@/components/ui/Typography";
import Image from "next/image";
import React from "react";

export default function Teams() {
  return (
    <section className='mx-5 tablet:px-20 '>
      <div className='flex justify-center flex-col items-center'>
        <Typography className='text-3xl text-center tablet:text-start tablet:text-4xl mt-10 font-black uppercase font-yeseva'>
          L&#39;équipes derriere Thiop Thiop Bike
        </Typography>
        <Typography className='max-w-2xl text-center mt-4'>
          Voici l&#39;équipe derrière le projet Thiop Thiop Bike. Spécialement
          composée de passionnés de la culture sénégalaise, chef en cuisine et
          en guide.
        </Typography>
      </div>

      <div className='flex flex-wrap justify-center'>
        <Image
          quality={50}
          width={800}
          height={800}
          className='z-10 absolute left-0 opacity-50'
          src='/assets/images/teams/montagne.png'
          alt='montagnes'
        />
        <Image
          quality={50}
          width={800}
          height={800}
          className='z-10 absolute right-0 opacity-20'
          src='/assets/images/teams/montagne.png'
          alt='montagnes'
        />
        <Image
          quality={50}
          width={300}
          height={300}
          className='z-10'
          src='/assets/images/teams/team.png'
          alt='team'
        />
        <Image
          quality={50}
          width={300}
          height={300}
          className='z-20'
          src='/assets/images/teams/team.png'
          alt='team'
        />
        <Image
          quality={50}
          width={300}
          height={300}
          className='z-10'
          src='/assets/images/teams/team.png'
          alt='team'
        />
        <Image
          quality={50}
          width={300}
          height={300}
          className='z-10'
          src='/assets/images/teams/team.png'
          alt='team'
        />
      </div>
    </section>
  );
}
