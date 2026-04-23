'use client';

import Sectiontest from '@/app/components/Section';
import Image from 'next/image';
import Botao_home from '@/app/components/Botao_home';
import { sectionstext } from '@/utils';
import { useSlider } from '@/hooks/useSlider';
import { useSwipe } from '@/hooks/useSwipe';

const Page = () => {
  const totalSections = 2 + sectionstext.length;

  const { containerRef, next, prev } = useSlider(totalSections);
  const swipe = useSwipe(next, prev);

  return (
    <div className="relative overflow-hidden">
      <Botao_home />

      {/* BOTÕES (esconde no mobile se quiser) */}
      <button
        onClick={prev}
        className="bg-emerald-200 p-2 rounded-2xl hidden md:block fixed left-5 top-1/2 -translate-y-1/2 z-50"
      >
        ←
      </button>

      <button
        onClick={next}
        className="bg-emerald-200 p-2 rounded-2xl hidden md:block fixed right-5 top-1/2 -translate-y-1/2 z-50"
      >
        →
      </button>

      {/* CONTAINER */}
      <div ref={containerRef} {...swipe} className="flex w-full h-screen">
        {/* SEÇÃO 1 */}
        <section className="min-w-full h-screen relative flex items-center justify-center">
          <Image
            src="/icons1cartil/img1.png"
            alt="bg-img1"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <h1 className="z-10 text-white text-2xl md:text-4xl text-center px-4">
            TECNOLOGIA E <br /> SUSTENTABILIDADE
          </h1>
        </section>

        {/* SEÇÃO 2 */}
        <section className="min-w-full h-screen bg-[#3C9478] flex items-center justify-center p-4">
          <div className="bg-cyan-800 text-white p-10 md:p-40 rounded-2xl leading-10 text-sm md:text-lg md:leading-20">
            <p>O que é Tecnologia Sustentável--01</p>
            <p>Impactos da Tecnologia ----------02</p>
            <p>Soluções Sustentáveis ------------03</p>
            <p>O que você pode fazer? ----------04</p>
          </div>
        </section>

        {/* DINÂMICAS */}
        {sectionstext.map(item => (
          <div key={item.id} className="min-w-full h-screen">
            <Sectiontest {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
