import { Card } from '../components/card';
import { gridItems } from '@/utils';
import Footer from '../components/Footer';
const HomePage = () => {
  return (
    <div className="min-h-screen bg-blue-300 text-white  flex flex-col">
      {/* HEADER */}
      <header className="p-6">
        <h1 className="font-comic-neue text-2xl md:text-3xl xl:text-4xl">
          Cartilhas Digitais
        </h1>
      </header>

      {/* GRID */}
      <main className="flex-1 flex justify-center items-center p-6 ">
        <div className="grid grid-cols-3 gap-4 w-full max-w-6xl auto-rows-[150px] ">
          {gridItems.map(item => (
            <Card
              key={item.id}
              title={item.title}
              href={item.href}
              className={item.className}
              url={item.url}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
