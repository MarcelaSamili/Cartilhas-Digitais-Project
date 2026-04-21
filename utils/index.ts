/*Constantes gerais */

type gridItems = {
  id: number;
  title: string;
  href: string;
  className: string;
  url: string;
};

export const gridItems = [
  {
    id: 1,
    title: 'Tecnologia e Sustentabilidade',
    href: '/cartilhas/tecnologia-sustentabilidade',
    className:
      'bg-[#0F6466] lg:col-span-2 lg:row-span-2 col-span-3 row-span-2 ',
    url: "url('/icons1cartil/img1.png')",
  },
  {
    id: 2,
    title: 'Segundo Semestre',
    href: '/cartilhas/emconstrucao',
    className: 'bg-[#D8B08C] col-span-3 row-span-1 lg:col-span-1 lg:row-span-2',
    url: "url('')",
  },
  {
    id: 3,
    title: 'Terceito semestre',
    href: '/cartilhas/emconstrucao',
    className: 'bg-[#FFCB9A] col-span-3',
    src: '/icons/implementacao.png',
    url: "url('')",
  },
  {
    id: 4,
    title: 'Quarto semestre',
    href: '/cartilhas/emconstrucao',
    className: 'bg-[#D2E8E3] col-span-3 row-span-2',
    url: "url('')",
  },
  {
    id: 5,
    title: 'Quinto semestre',
    href: '/cartilhas/emconstrucao',
    className: 'bg-[#2C3532] col-span-3',
    url: "url('')",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: '',
    alt: 'git',
  },
];

export const socials = {
  portifol: 'https://full-stack-developer-sandy.vercel.app/',
  github: 'https://github.com/MarcelaSamili',
  linkedin: 'https://www.linkedin.com/in/marcela-samili-999919197/',
};
