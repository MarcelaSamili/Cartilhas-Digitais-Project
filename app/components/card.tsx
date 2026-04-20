import Link from 'next/link';

type CardProps = {
  title: string;
  href: string;
  className?: string;
  url: string;
};

export const Card = ({ title, href, className, url }: CardProps) => {
  return (
    <Link
      href={href}
      className={`relative overflow-hidden rounded-2xl p-6 text-white font-semibold text-sm lg:text-lg xl:text-2xl flex flex-col justify-end hover:scale-[1.02] transition ${className}`}
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: url }}
      />

      {/* Overlay opcional (melhora leitura do texto) */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Conteúdo */}
      <span className="relative z-10">{title}</span>
    </Link>
  );
};
