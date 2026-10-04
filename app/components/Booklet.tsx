'use client';

import React, { useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  CheckCircle,
  ShieldAlert,
  AlertTriangle,
} from 'lucide-react';

// Tipagem das propriedades das páginas
interface PageProps {
  number: number;
  children: React.ReactNode;
}

// Wrapper individual de cada página física
const Page = React.forwardRef<HTMLDivElement, PageProps>(
  ({ number, children }, ref) => {
    return (
      <div
        ref={ref}
        className="bg-slate-50 border border-slate-200 shadow-inner p-6 sm:p-8 flex flex-col justify-between h-full select-none overflow-y-auto"
      >
        <div className="flex-1">{children}</div>
        <div className="pt-4 mt-auto border-t border-slate-200 flex justify-between items-center text-xs text-slate-400 font-sans">
          <span>IA no Cotidiano — Cartilha Educativa</span>
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

  const nextPage = () => {
    bookRef.current?.pageFlip()?.flipNext();
  };

  const prevPage = () => {
    bookRef.current?.pageFlip()?.flipPrev();
  };

  const onPage = (e: { data: number }) => {
    setCurrentPage(e.data);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 py-8 px-4 font-sans text-slate-800">
      {/* Controles do Topo / Barra de Ferramentas */}
      <div className="w-full max-w-4xl flex justify-between items-center mb-6 px-4 text-white">
        <div className="flex items-center space-x-2">
          <BookOpen className="w-6 h-6 text-indigo-400" />
          <h1 className="text-xl font-bold hidden sm:block">
            Cartilha Digital de IA no Cotidiano
          </h1>
        </div>

        {/* Navegação */}
        <div className="flex items-center space-x-4">
          <button
            onClick={prevPage}
            className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-white transition disabled:opacity-50"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-sm font-medium text-slate-300">
            Página {currentPage + 1}
          </span>
          <button
            onClick={nextPage}
            className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-white transition"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* O Livro / Cartilha com Flip 3D */}
      {/* @ts-ignore */}
      <HTMLFlipBook
        width={420}
        height={580}
        size="fixed"
        minWidth={300}
        maxWidth={500}
        minHeight={400}
        maxHeight={700}
        showCover={true}
        className="shadow-2xl rounded-lg overflow-hidden"
        ref={bookRef}
        onFlip={onPage}
      >
        {/* Capa Frontal */}
        <div className="bg-linear-to-br from-indigo-600 via-indigo-700 to-slate-900 text-white p-8 flex flex-col justify-between h-full border-r border-indigo-500">
          <div className="space-y-4">
            <span className="inline-block bg-indigo-500/30 text-indigo-200 text-xs font-semibold px-3 py-1 rounded-full border border-indigo-400/20">
              GUIA PRÁTICO
            </span>
            <h1 className="text-3xl font-extrabold tracking-tight leading-tight">
              Uso de Ferramentas de Inteligência Artificial
            </h1>
            <p className="text-indigo-200 text-sm">
              Aprenda a usar IA no cotidiano com autonomia, senso crítico e
              segurança.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10">
              <p className="text-xs text-indigo-100">
                <strong>Para quem é:</strong> Estudantes, pequenos
                empreendedores, pessoas em busca de emprego e público em geral.
              </p>
            </div>
            <p className="text-xs text-indigo-300">
              Clique na ponta da folha para virar →
            </p>
          </div>
        </div>

        {/* Página 1: Conceitos */}
        <Page number={1}>
          <h2 className="text-xl font-bold text-indigo-900 mb-3">
            01. Entenda a IA antes de usar
          </h2>
          <p className="text-xs text-slate-600 mb-4 leading-relaxed">
            A IA generativa cria textos e imagens com base em cálculos de
            probabilidade. Ela não possui consciência nem sentimentos.
          </p>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-3 mb-4 rounded-r-lg">
            <div className="flex items-start space-x-2">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-xs text-amber-800">
                  Cuidado com Alucinações
                </h4>
                <p className="text-[11px] text-amber-700">
                  Uma resposta fluente e convincente pode conter dados
                  totalmente inventados.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-bold text-slate-800">
              O que ela pode fazer:
            </h3>
            <ul className="text-xs text-slate-600 space-y-1 pl-4 list-disc">
              <li>Criar rascunhos e estruturar ideias</li>
              <li>Explicar conceitos difíceis em linguagem simples</li>
              <li>Resumir grandes volumes de texto</li>
            </ul>
          </div>
        </Page>

        {/* Página 2: Prompts */}
        <Page number={2}>
          <h2 className="text-xl font-bold text-indigo-900 mb-3">
            02. Como fazer um bom pedido
          </h2>
          <p className="text-xs text-slate-600 mb-4">
            O pedido feito à IA é chamado de <strong>Prompt</strong>. Quanto
            mais contexto e clareza você fornecer, melhor será a resposta.
          </p>

          <div className="bg-slate-900 text-slate-100 p-3 rounded-lg font-mono text-[11px] space-y-2 mb-4">
            <span className="text-emerald-400 font-bold">
              // Fórmulas de Prompt
            </span>
            <p>
              "Quero [TAREFA]. O contexto é [SITUAÇÃO]. O público é [QUEM LEIA].
              Responda em [FORMATO] sem inventar dados."
            </p>
          </div>

          <div className="border border-indigo-100 bg-indigo-50/50 p-3 rounded-lg">
            <h4 className="font-bold text-xs text-indigo-900 mb-1">
              Dica de Ouro:
            </h4>
            <p className="text-[11px] text-indigo-700">
              Se o resultado não for ideal, peça ajustes: <em>"Simplifique"</em>
              , <em>"Dê um exemplo prático"</em> ou{' '}
              <em>"Refaça em formato de lista"</em>.
            </p>
          </div>
        </Page>

        {/* Página 3: Privacidade */}
        <Page number={3}>
          <h2 className="text-xl font-bold text-indigo-900 mb-3">
            03. Proteção e Segurança
          </h2>
          <div className="flex items-center space-x-2 text-rose-600 mb-3">
            <ShieldAlert className="w-5 h-5" />
            <span className="font-bold text-xs">
              Nunca compartilhe com a IA:
            </span>
          </div>

          <ul className="text-xs text-slate-700 space-y-2 mb-4">
            <li className="flex items-center space-x-2 bg-rose-50 p-2 rounded border border-rose-100">
              <span>🚫 Senhas, dados bancários e senhas de acesso</span>
            </li>
            <li className="flex items-center space-x-2 bg-rose-50 p-2 rounded border border-rose-100">
              <span>🚫 Documentos pessoais (CPF, RG, Certidões)</span>
            </li>
            <li className="flex items-center space-x-2 bg-rose-50 p-2 rounded border border-rose-100">
              <span>🚫 Informações de saúde e prontuários médicos</span>
            </li>
          </ul>

          <p className="text-[11px] text-slate-500 italic">
            Substitua dados reais por dados fictícios antes de colar qualquer
            texto em plataformas de IA públicas.
          </p>
        </Page>

        {/* Página 4: Checklist Final */}
        <Page number={4}>
          <h2 className="text-xl font-bold text-indigo-900 mb-3">
            04. Checklist de Verificação
          </h2>
          <p className="text-xs text-slate-600 mb-4">
            Antes de compartilhar qualquer conteúdo gerado por IA:
          </p>

          <div className="space-y-2 text-xs">
            <label className="flex items-center space-x-2 p-2 bg-white rounded border border-slate-200 cursor-pointer hover:bg-slate-100">
              <input
                type="checkbox"
                className="rounded text-indigo-600 focus:ring-indigo-500"
              />
              <span>Conferi os fatos em fontes confiáveis?</span>
            </label>
            <label className="flex items-center space-x-2 p-2 bg-white rounded border border-slate-200 cursor-pointer hover:bg-slate-100">
              <input
                type="checkbox"
                className="rounded text-indigo-600 focus:ring-indigo-500"
              />
              <span>Removi dados pessoais e sigilosos?</span>
            </label>
            <label className="flex items-center space-x-2 p-2 bg-white rounded border border-slate-200 cursor-pointer hover:bg-slate-100">
              <input
                type="checkbox"
                className="rounded text-indigo-600 focus:ring-indigo-500"
              />
              <span>Verifiquei possíveis preconceitos/vieses?</span>
            </label>
            <label className="flex items-center space-x-2 p-2 bg-white rounded border border-slate-200 cursor-pointer hover:bg-slate-100">
              <input
                type="checkbox"
                className="rounded text-indigo-600 focus:ring-indigo-500"
              />
              <span>Revisei a coerência do texto final?</span>
            </label>
          </div>
        </Page>

        {/* Contra-Capa Posterior */}
        <div className="bg-slate-900 text-white p-8 flex flex-col justify-between h-full border-l border-slate-800">
          <div className="text-center space-y-4 my-auto">
            <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto" />
            <h3 className="text-lg font-bold">Uso Responsável da IA</h3>
            <p className="text-xs text-slate-400">
              A decisão e a responsabilidade final pelo conteúdo continuam sendo
              humanas.
            </p>
          </div>
          <div className="text-center text-[10px] text-slate-500">
            Material Educativo — 2026
          </div>
        </div>
      </HTMLFlipBook>
    </div>
  );
}
