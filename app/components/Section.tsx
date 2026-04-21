import Image from 'next/image';

/*para criar uma arrow function use o atalho -> rafce*/
type sectionstext = {
  title: string;
  text1: string;
  text2: string;
  src1: string;
  className1: string;
  src2: string;
  className2: string;
};
const Sectiontest = ({
  title,
  text1,
  text2,
  src1,
  className1,
  src2,
  className2,
}: sectionstext) => {
  return (
    <section className="relative w-screen h-screen bg-[#3c9478] flex flex-col items-center justify-center">
      <h1 className="z-20 text-white text-sm xl:text-3xl">{title}</h1>
      <p className="z-20 text-justify text-white text-sm xl:text-2xl ml-10 mr-10 mt-5 ">
        {text1}
        <br></br>
        <br></br>
        {text2}
      </p>
      <Image
        src={src1}
        alt="icon-carga"
        width={300}
        height={300}
        className={className1}
      />
      <Image
        src={src2}
        alt="icon-carga"
        width={300}
        height={300}
        className={className2}
      />
    </section>
  );
};

export default Sectiontest;
