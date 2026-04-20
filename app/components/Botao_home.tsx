import React from 'react';
import Link from 'next/link';
const botao_home = () => {
  return (
    <div>
      {/*BOTAO DE HOME PAGE*/}
      <Link
        href="/home"
        className="absolute text-1xl text-white z-40 bg-blue-400 p-2 rounded-4xl top-5 left-3"
      >
        <img src="/icons/casa.png" alt="Inicio" />
      </Link>
    </div>
  );
};

export default botao_home;
