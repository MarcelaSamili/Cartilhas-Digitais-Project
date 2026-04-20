import React from 'react';
import Image from 'next/image';
import Botao_home from '@/app/components/Botao_home';
const page = () => {
  return (
    <div className="relative min-h-screen flex justify-center items-center bg-blue-300 text-2xl text-white">
      <Botao_home />
      <Image
        src="/icons/implementacao.png"
        alt="Em construcao"
        className="absolute"
        width={300}
        height={300}
      ></Image>
    </div>
  );
};

export default page;
