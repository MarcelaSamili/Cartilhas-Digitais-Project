'use client';

import React, { useRef, useState, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  CheckCircle,
  ShieldAlert,
  AlertTriangle,
} from 'lucide-react';

interface PageProps {
  number: number;
  children: React.ReactNode;
}

// Componente Wrapper para cada Página
const Page = React.forwardRef<HTMLDivElement, PageProps>(
  ({ number, children }, ref) => {
    return (
      <div
        ref={ref}
        className="bg-slate-50 border border-slate-200 shadow-inner p-5 sm:p-8 flex flex-col justify-between h-full select-none overflow-y-auto"
      >
        <div className="flex-1 space-y-3">{children}</div>
        <div className="pt-3 mt-auto border-t border-slate-200 flex justify-between items-center text-[10px] sm:text-xs text-slate-400 font-sans">
          <span>IA no Cotidiano</span>
          <span>Pág. {number}</span>
        </div>
      </div>
    );
  }
);

Page.displayName = 'Page';

export default function Booklet() {
  const bookRef = useRef<any>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [bookDimensions, setBookDimensions] = useState({
    width: 380,
    height: 550,
  });

  // Detecta alteração de tamanho de tela para responsividade
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);

      if (mobile) {
        // Cálculo de dimensão para mobile (1 página ocupando quase a largura da tela)
        const width = Math.min(window.innerWidth - 32, 380);
        const height = Math.min(window.innerHeight - 180, 580);
        setBookDimensions({ width, height });
      } else {
        // Dimensão para Desktop (Duas páginas lado a lado)
        setBookDimensions({ width: 420, height: 580 });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextPage = () => {
    bookRef.current?.pageFlip()?.flipNext();
  };

  const prevPage = () => {
    bookRef.current?.pageFlip()?.flipPrev();
  };

  const onPage = (e: { data: number }) => {
    setCurrentPage(e.data);
  };

  const onInit = () => {
    if (bookRef.current) {
      setTotalPages(bookRef.current.pageFlip()?.getPageCount() || 0);
    }
  };

  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-slate-900 py-4 px-2 sm:px-6 font-sans text-slate-800">
      {/* Barra Superior / Header */}
      <div className="w-full max-w-4xl flex justify-between items-center mb-4 px-2 text-white">
        <div className="flex items-center space-x-2">
          <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400" />
          <h1 className="text-base sm:text-xl font-bold">
            Cartilha Digital IA
          </h1>
        </div>

        {/* Contador de Páginas */}
        <span className="text-xs sm:text-sm font-medium text-slate-300 bg-slate-800 px-3 py-1 rounded-full">
          {currentPage + 1} / {totalPages || 6}
        </span>
      </div>

      {/* ÁREA DO LIVRO / FLIPBOOK */}
      <div className="flex-1 flex items-center justify-center w-full my-auto overflow-hidden">
        {/* @ts-ignore */}
        <HTMLFlipBook
          key={isMobile ? 'mobile' : 'desktop'} // Re-renderiza o componente ao mudar de dispositivo
          width={bookDimensions.width}
          height={bookDimensions.height}
          size="fixed"
          minWidth={280}
          maxWidth={450}
          minHeight={400}
          maxHeight={700}
          showCover={true}
          usePortrait={isMobile} // Ativa modo retrato (1 página por vez no mobile)
          startPage={0}
          drawShadow={true}
          className="shadow-2xl rounded-lg overflow-hidden"
          ref={bookRef}
          onFlip={onPage}
          onInit={onInit}
        >
          {/* Capa */}
          <div className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-slate-900 text-white p-6 sm:p-8 flex flex-col justify-between h-full border-r border-indigo-500 select-none">
            <div className="space-y-3 sm:space-y-4">
              <span className="inline-block bg-indigo-500/30 text-indigo-200 text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-full border border-indigo-400/20">
                GUIA PRÁTICO
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight">
                Uso de Ferramentas de IA
              </h1>
              <p className="text-indigo-200 text-xs sm:text-sm">
                Aprenda a usar IA no cotidiano com autonomia, senso crítico e
                segurança.
              </p>
            </div>

            <div className="space-y-3">
              <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10 text-xs">
                <strong>Para quem é:</strong> Estudantes, pequenos
                empreendedores e público em geral.
              </div>
              <p className="text-[10px] sm:text-xs text-indigo-300 text-center">
                Deslize ou toque para folhear →
              </p>
            </div>
          </div>

          {/* Página 1 */}
          <Page number={1}>
            <h2 className="text-lg sm:text-xl font-bold text-indigo-900">
              01. O que é IA Generativa
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              A IA generativa cria conteúdos (textos, imagens) com base em
              padrões de dados. Ela calcula probabilidades, mas não possui
              inteligência real.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-3 rounded-r-lg">
              <div className="flex items-start space-x-2">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs text-amber-800">
                    Atenção às Alucinações
                  </h4>
                  <p className="text-[11px] text-amber-700">
                    A IA pode inventar dados e citações com tom de certeza.
                  </p>
                </div>
              </div>
            </div>
          </Page>

          {/* Página 2 */}
          <Page number={2}>
            <h2 className="text-lg sm:text-xl font-bold text-indigo-900">
              02. Como fazer um Prompt
            </h2>
            <p className="text-xs text-slate-600">
              Um prompt é o comando enviado à IA. Seja específico sobre a tarefa
              e contexto.
            </p>

            <div className="bg-slate-900 text-slate-100 p-3 rounded-lg font-mono text-[11px] space-y-1">
              <span className="text-emerald-400 font-bold">
                // Exemplo de Prompt
              </span>
              <p>
                "Quero [TAREFA]. O contexto é [SITUAÇÃO]. Responda em [FORMATO]
                sem inventar dados."
              </p>
            </div>
          </Page>

          {/* Página 3 */}
          <Page number={3}>
            <h2 className="text-lg sm:text-xl font-bold text-indigo-900">
              03. Privacidade
            </h2>
            <div className="flex items-center space-x-2 text-rose-600 mb-2">
              <ShieldAlert className="w-4 h-4" />
              <span className="font-bold text-xs">Nunca compartilhe:</span>
            </div>

            <ul className="text-xs text-slate-700 space-y-1.5">
              <li className="bg-rose-50 p-2 rounded border border-rose-100">
                🚫 Senhas e dados bancários
              </li>
              <li className="bg-rose-50 p-2 rounded border border-rose-100">
                🚫 Documentos pessoais (CPF/RG)
              </li>
              <li className="bg-rose-50 p-2 rounded border border-rose-100">
                🚫 Prontuários e exames de saúde
              </li>
            </ul>
          </Page>

          {/* Página 4 */}
          <Page number={4}>
            <h2 className="text-lg sm:text-xl font-bold text-indigo-900">
              04. Checklist
            </h2>
            <p className="text-xs text-slate-600">
              Antes de publicar ou enviar:
            </p>

            <div className="space-y-2 text-xs">
              <label className="flex items-center space-x-2 p-2 bg-white rounded border border-slate-200">
                <input type="checkbox" className="rounded text-indigo-600" />
                <span>Verifiquei fontes oficiais?</span>
              </label>
              <label className="flex items-center space-x-2 p-2 bg-white rounded border border-slate-200">
                <input type="checkbox" className="rounded text-indigo-600" />
                <span>Removi dados pessoais?</span>
              </label>
              <label className="flex items-center space-x-2 p-2 bg-white rounded border border-slate-200">
                <input type="checkbox" className="rounded text-indigo-600" />
                <span>Revisei o resultado final?</span>
              </label>
            </div>
          </Page>

          {/* Contracapa */}
          <div className="bg-slate-900 text-white p-6 sm:p-8 flex flex-col justify-between h-full border-l border-slate-800 select-none">
            <div className="text-center space-y-3 my-auto">
              <CheckCircle className="w-10 h-10 text-emerald-400 mx-auto" />
              <h3 className="text-base font-bold">Uso Responsável</h3>
              <p className="text-xs text-slate-400">
                A responsabilidade pelo conteúdo final é sempre humana.
              </p>
            </div>
          </div>
        </HTMLFlipBook>
      </div>

      {/* Controles do Rodapé / Navegação Touch Amigável */}
      <div className="w-full max-w-xs flex justify-between items-center mt-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 0}
          className="flex items-center space-x-1 px-4 py-2 rounded-full bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Anterior</span>
        </button>

        <button
          onClick={nextPage}
          disabled={currentPage >= totalPages - 1}
          className="flex items-center space-x-1 px-4 py-2 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <span>Próxima</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
