'use client';

import { useRef, useState } from 'react';

import Image from 'next/image';
import gsap from 'gsap';
import Botao_home from '@/app/components/Botao_home';
const Page = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const totalSections = 6;

  const goToSection = (newIndex: number) => {
    if (!containerRef.current) return;

    gsap.to(containerRef.current, {
      x: -window.innerWidth * newIndex,
      duration: 0.8,
      ease: 'power3.inOut',
    });

    setIndex(newIndex);
  };

  const next = () => {
    if (index < totalSections - 1) {
      goToSection(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      goToSection(index - 1);
    }
  };

  return (
    <div className="relative overflow-hidden">
      <Botao_home />
      {/* BOTÃO ESQUERDA */}
      <button
        onClick={prev}
        className="fixed left-5 top-1/2 -translate-y-1/2 z-50"
      >
        <img
          src="/icons1cartil/seta.png"
          className="w-10 rotate-180 opacity-80 hover:scale-110 transition"
        />
      </button>

      {/* BOTÃO DIREITA */}
      <button
        onClick={next}
        className="fixed right-5 top-1/2 -translate-y-1/2 z-50"
      >
        <img
          src="/icons1cartil/seta.png"
          className="w-10 opacity-80 hover:scale-110 transition"
        />
      </button>
      {/* CONTAINER */}
      <div ref={containerRef} className="flex w-[600vw] h-screen ">
        {/* ===== SEÇÃO 1 ===== */}
        <section className="w-screen h-screen relative flex items-center justify-center overflow-hidden">
          {/* IMAGEM DE FUNDO */}
          <Image
            src="/icons1cartil/img1.png"
            alt="bg-img1"
            fill
            className="object-cover z-0"
          />

          {/* OVERLAY ESCURO (melhora leitura) */}
          <div className="absolute inset-0 bg-black/40 z-10" />

          {/* TEXTO */}
          <h1 className="z-20 text-white text-3xl text-center font-comic px-4 ">
            TECNOLOGIA E <br /> SUSTENTABILIDADE
          </h1>
        </section>

        {/* ===== SEÇÃO 2 ===== */}
        <section className="relative w-screen h-screen bg-[#3C9478] flex items-center justify-center">
          <div className="z-20 leading-20 xl:leading-30 xl:text-2xl bg-cyan-800 text-white p-4 text-justify rounded-2xl">
            <p>O que é Tecnologia Sustentável ? --------- 03</p>
            <p>Impactos da Tecnologia ------------------- 04</p>
            <p>Soluções Sustentáveis --------------------- 05</p>
            <p>O que você pode fazer? ------------------- 06</p>
            <p>Conclusão</p>
          </div>
          <Image
            src="/icons1cartil/icon-carga.png"
            alt="icon-carga"
            width={230}
            height={230}
            className="absolute left-2 bottom-5 md:left-5 xl:size-70 xl:left-20 xl:bottom-20 "
          />
        </section>

        {/* ===== SEÇÃO 3 ===== */}
        <section className="relative w-screen h-screen bg-[#3c9478] flex flex-col items-center justify-center">
          <h1 className="z-20 text-white text-2xl xl:text-3xl">
            O que é Tecnologia Sustentável?
          </h1>
          <p className="z-20 text-justify text-wrap text-white xl:text-2xl p-30 ">
            A tecnologia sustentável é o desenvolvimento e uso de soluções
            tecnológicas com o objetivo de reduzir os impactos ambientais e
            promover o uso consciente dos recursos naturais. Ela busca
            equilibrar inovação com responsabilidade, criando produtos e
            sistemas que consumam menos energia, gerem menos resíduos e tenham
            maior durabilidade.
            <br />
            <br />
            Esse conceito envolve desde a criação de dispositivos mais
            eficientes até o uso de energias limpas, contribuindo para um futuro
            mais sustentável sem abrir mão do avanço tecnológico.
          </p>
          <Image
            src="/icons1cartil/icon3.png"
            alt="icon-carga"
            width={300}
            height={300}
            className="absolute left-5 bottom-10"
          />
          <Image
            src="/icons1cartil/icon3.2.png"
            alt="icon-carga"
            width={300}
            height={300}
            className="absolute right-20 top-10"
          />
        </section>
        {/* ===== SEÇÃO 4 ===== */}
        <section className="relative w-screen h-screen bg-[#3C9478] flex flex-col items-center justify-center">
          <h1 className="z-20 text-white text-2xl xl:text-3xl">
            Soluções Sustentáveis
          </h1>
          <p className="z-20 text-justify text-wrap text-white xl:text-2xl p-30 ">
            Para minimizar esses impactos, diversas soluções sustentáveis vêm
            sendo adotadas. O uso de energias renováveis, como solar e eólica, é
            uma das principais alternativas para reduzir a dependência de fontes
            poluentes.
            <br />
            <br />
            Outra prática importante é a reciclagem de eletrônicos, que permite
            reaproveitar materiais e diminuir a extração de recursos naturais.
            Além disso, o incentivo ao consumo consciente — comprando apenas o
            necessário e optando por produtos duráveis — é fundamental para
            reduzir o desperdício.
            <br />
            <br />
            Empresas também têm investido em tecnologias mais eficientes e
            processos produtivos menos agressivos ao meio ambiente.
          </p>
          <Image
            src="/icons1cartil/icon4.png"
            alt="icon-carga"
            width={300}
            height={300}
            className="absolute right-20 top-10"
          />
          <Image
            src="/icons1cartil/icon4.2.png"
            alt="icon-carga"
            width={300}
            height={300}
            className="absolute left-5 bottom-10"
          />
        </section>
        {/* ===== SEÇÃO 5 ===== */}
        <section className="relative w-screen h-screen bg-[#3C9478] flex flex-col items-center justify-center">
          <h1 className="z-20 text-white text-2xl xl:text-3xl">
            O que você pode fazer?
          </h1>
          <p className="z-20 text-justify text-wrap text-white xl:text-2xl p-30 ">
            Cada pessoa pode contribuir para um mundo mais sustentável por meio
            de pequenas atitudes no dia a dia. Desligar aparelhos eletrônicos
            quando não estiverem em uso ajuda a economizar energia.
            <br />
            <br />
            Também é importante descartar corretamente resíduos eletrônicos em
            locais apropriados para reciclagem. Evitar compras desnecessárias e
            priorizar produtos de empresas comprometidas com a sustentabilidade
            faz toda a diferença.
            <br />
            <br />
            Além disso, compartilhar conhecimento e conscientizar outras pessoas
            amplia ainda mais o impacto positivo dessas ações.
          </p>
          <Image
            src="/icons1cartil/iconn5.png"
            alt="icon-carga"
            width={200}
            height={200}
            className="absolute right-20 top-10"
          />
          <Image
            src="/icons1cartil/icon5.2.png"
            alt="icon-carga"
            width={300}
            height={300}
            className="absolute left-5 bottom-10"
          />
        </section>

        {/* ===== SEÇÃO 6 ===== */}
        <section className="relative w-screen h-screen bg-[#3C9478] flex flex-col items-center justify-center">
          <h1 className="z-20 text-white text-2xl xl:text-3xl">Conclusão</h1>
          <p className="z-20 text-justify text-wrap text-white xl:text-2xl p-30 ">
            A tecnologia sustentável é essencial para garantir o equilíbrio
            entre desenvolvimento e preservação ambiental. Ao adotar práticas
            mais conscientes e apoiar iniciativas sustentáveis, é possível
            reduzir significativamente os impactos negativos da tecnologia no
            planeta.
            <br />
            <br />O futuro depende das escolhas que fazemos hoje. Pequenas
            mudanças de hábito, quando somadas, têm o poder de transformar o
            mundo em um lugar mais saudável e sustentável para todos.
          </p>
          <Image
            src="/icons1cartil/icon6.png"
            alt="icon-carga"
            width={300}
            height={300}
            className="absolute left-5 bottom-10"
          />
          <Image
            src="/icons1cartil/icon6.2.png"
            alt="icon-carga"
            width={300}
            height={300}
            className="absolute right-20 top-10"
          />
        </section>
      </div>
    </div>
  );
};

export default Page;
