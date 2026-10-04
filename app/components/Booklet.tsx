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

import { Produtividadecard, CriacaoeRevisao } from './produtividadecard';
import { verificacoes } from '@/utils';
import Botao_home from './Botao_home';

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
      <Botao_home />
      {/* Barra Superior / Header */}
      <div className="w-full max-w-4xl flex justify-between items-center mb-4 px-2 text-white">
        <div className="flex items-center space-x-2">
          <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400" />
          <h1 className="text-base sm:text-xl font-bold">
            Cartilha Digital IA no Cotidiano
          </h1>
        </div>

        {/* Contador de Páginas */}
        <span className="text-xs sm:text-sm font-medium text-slate-300 bg-slate-800 px-3 py-1 rounded-full">
          {currentPage + 1} / {totalPages || 8}
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
          <div className="bg-linear-to-br from-indigo-600 via-indigo-700 to-slate-900 text-white p-6 sm:p-8 flex flex-col justify-between h-full border-r border-indigo-500 select-none">
            <div className="space-y-3 sm:space-y-4">
              <span className="inline-block bg-indigo-200/30 text-indigo-200 text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-full border border-indigo-400/20">
                Cartilha Digital / Apresentação
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight">
                Uso de Ferramentas de Inteligência Artificial pelo Público em
                Geral
              </h1>
              <p className="text-indigo-200 text-xs sm:text-sm">
                Guia para aprender a usar IA no cotidiano com autonomia, senso
                crítico e segurança.
              </p>
            </div>

            <div className="space-y-3">
              <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10 text-xs">
                <strong>Para quem é:</strong> Estudantes, pequenos
                empreendedores, pessoas em busca de trabalho, pessoas idosas e
                qualquer pessoa que queira começar a usar ferramentas de IA no
                seu dia a dia. Não é necessário saber programar.
              </div>
              <div className="p-3 bg-emerald-200/10 rounded-xl backdrop-blur-sm border border-white/10 text-xs">
                <strong>O que você vai aprender:</strong> <br />
                - Entender o que a IA faz e seus limites
                <br />
                - Escolher a ferramenta e escrever um bom pedido
                <br />
                - Usar IA para textos, estudos e rotina
                <br />- Gerar imagens, transcrever áudios e conferir dados
              </div>
              <p className="text-[10px] sm:text-xs text-indigo-300 text-center">
                Deslize ou toque para folhear →
              </p>
            </div>
          </div>

          {/* Página 1: Conceitos */}
          <Page number={1}>
            <h2 className=" text-xl font-bold text-indigo-900 mb-3">
              01. Conceitos: Entenda a IA Antes de Usar
            </h2>
            <div className="grid grid-cols-2 gap-2">
              <div className="p-3 bg-emerald-200/10 rounded-xl backdrop-blur-sm border border-white/10 text-xs">
                <strong>O que é Inteligência Artificial?</strong> É um conjunto
                de tecnologias que utiliza dados e modelos computacionais para
                realizar tarefas como reconhecer padrões, interpretar textos e
                produzir respostas.
              </div>
              <div className="p-3 bg-blue-400/10 rounded-xl backdrop-blur-sm border border-white/10 text-xs">
                <strong>O que é um Assistente de IA?</strong> É uma ferramenta
                com a qual você interage por texto, voz ou áudio. Você faz um
                pedido, recebe uma resposta e solicita ajustes interativos.
              </div>

              <div className="p-3 bg-emerald-200/10 rounded-xl backdrop-blur-sm border border-white/10 text-xs">
                <strong>O que você vai aprender:</strong> <br />
                - Criar um rascunho de mensagem ou e-mail.
                <br />
                - Explicar um conceito novo com simplicidade.
                <br />
                - Sugerir um roteiro ou cronograma de estudos.
                <br />- Organizar listas de tarefas por prioridade.
                <br />
                - Resumir textos longos fornecidos por você.
                <br />- Apoiar a transcrição e resumo de áudios.
              </div>
              <div className="p-3 bg-amber-500/10 rounded-xl backdrop-blur-sm border border-white/10 text-xs">
                <strong>Quais são os limites:</strong> <br />
                - Sem acesso garantido a dados recentes.
                <br />
                - Pode interpretar mal o sentido do seu pedido.
                <br />
                - Pode reproduzir preconceitos dos dados.
                <br />- Pode omitir trechos essenciais em resumos.
                <br />- Não possui discernimento nem ética própria.
              </div>
              <div className="col-span-2 bg-amber-50 border-l-4 border-amber-500 p-3 mb-4 rounded-r-lg">
                <div className="flex items-start space-x-2">
                  <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-xs text-amber-800">
                      Resposta convincente não é garantia de verdade!
                    </h4>
                    <p className="text-[11px] text-amber-700">
                      A IA pode inventar informações, referências e detalhes
                      fictícios. Esse erro é chamado de alucinação. Boa escrita,
                      termos difíceis e tom de certeza não comprovam que uma
                      resposta seja verdadeira.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Page>

          {/* Página 2: Prompts */}
          <Page number={2}>
            <h2 className="text-xl font-bold text-indigo-900 mb-3">
              02. Primeiros Passos: Ferramentas e Pedidos
            </h2>
            <p className="text-xs text-slate-600 mb-4">
              Comece sempre pelo site ou aplicativo oficial. Confira as
              condições de acesso, privacy e requisitos de idade. Evite links
              patrocinados desconhecidos que prometem acesso "ilimitado".
            </p>
            <table className="text-[10px] ">
              <thead>
                <tr>
                  <th>Ferramenta</th>
                  <th>Exemplos de uso</th>
                  <th>Acesso Oficial</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-bold">Google Gemini</td>
                  <td>
                    Explicações, resumos e geração de imagens, conforme
                    disponibilidade.{' '}
                  </td>
                  <td>gemini.google.com</td>
                </tr>
                <tr>
                  <td className="font-bold">Microsoft Copilot</td>
                  <td>
                    Assistência de texto, integração com navegação e geração de
                    imagens.
                  </td>
                  <td>copilot.microsoft.com</td>
                </tr>
              </tbody>
            </table>
            <p className="text-[9px]  text-indigo-300 ">
              * Recursos gratuitos podem ter limites temporários. Não é
              necessário contratar planos pagos para acompanhar os exercícios
              desta cartilha.
            </p>

            <h2 className="font-bold text-indigo-900 mb-1">
              O que é um Prompt?
            </h2>
            <p className="text-xs text-slate-600 mb-4">
              Prompt é o pedido feito à IA. Um bom pedido especifica a tarefa, o
              contexto, o formato desejado e as regras que devem ser
              respeitadas.
            </p>
            <div className="bg-slate-900 text-slate-100 p-3 rounded-lg font-mono text-[11px] space-y-2 mb-4">
              <span className="text-emerald-400 font-bold">
                // Fórmulas de Prompt
              </span>
              <p>
                "Quero [TAREFA]. O contexto é [SITUAÇÃO]. O público é [QUEM
                LEIA]. Responda em [FORMATO] sem inventar dados."
              </p>
            </div>

            <div className="border border-indigo-100 bg-indigo-50/50 p-3 rounded-lg">
              <h4 className="font-bold text-xs text-indigo-900 mb-1">
                Dica de Ouro:
              </h4>
              <p className="text-[11px] text-indigo-700">
                Se o resultado não for ideal, peça ajustes:{' '}
                <em>"Simplifique"</em>, <em>"Dê um exemplo prático"</em> ou{' '}
                <em>"Refaça em formato de lista"</em>.
              </p>
            </div>
          </Page>
          {/* Página 3: Produtividade */}
          <Page number={3}>
            <h2 className="text-xl font-bold text-indigo-900 mb-3">
              03. Textos e Produtividade no Cotidiano
            </h2>
            <div className="grid grid-cols-2 gap-2">
              <Produtividadecard />
            </div>
          </Page>
          {/* Página 4: Imagens e Áudios: Criação e Revisão */}
          <Page number={4}>
            <h2 className="text-xl font-bold text-indigo-900 mb-3">
              04.Imagens e Áudios: Criação e Revisão
            </h2>
            <div className="grid grid-cols-1 gap-2">
              <CriacaoeRevisao />
            </div>
            <div className="col-span-2 bg-amber-50 border-l-4 border-amber-500 p-3 mb-4 rounded-r-lg">
              <div className="flex items-start space-x-2">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs text-amber-800">
                    Imagem gerada NÃO é prova documental!
                  </h4>
                  <p className="text-[11px] text-amber-700">
                    Nunca apresente uma imagem artificial como registro de um
                    evento real. Ao compartilhar conteúdos sintéticos que
                    lembrem fotos digitais, informe explicitamente que foram
                    criados com IA.
                  </p>
                </div>
              </div>
            </div>
          </Page>

          {/* Página 5: Privacidade e Respeito aos Dados */}
          <Page number={5}>
            <h2 className="text-xl font-bold text-indigo-900 mb-3">
              03. Privacidade e Respeito aos Dados
            </h2>
            <p className="text-[11px]">
              Antes de enviar qualquer arquivo, texto ou foto, pergunte-se: a
              ferramenta realmente precisa dessas informações para me ajudar? Se
              a resposta for não, remova-as!
            </p>
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

            <div className="p-3 bg-amber-500/10 rounded-xl backdrop-blur-sm border border-white/10 text-xs">
              <strong>Cuidados Fundamentais no Uso Ético:</strong> <br />-{' '}
              <strong>Configurações de Conta:</strong> Verifique se suas
              conversas podem ser usadas para treinar modelos de IA e ajuste os
              controles de privacidade.
              <br />- <strong>Respeito a Terceiros:</strong> Não crie
              falsificações de imagens ou vozes de pessoas nem exponha fotos sem
              autorização prévia.
              <br />- <strong>Proteção de Menores:</strong> Um responsável deve
              orientar o uso. Nunca compartilhe fotos identificáveis, escola ou
              rotina de crianças.
            </div>
          </Page>

          {/* Página 6: Verificação de Informações e Vieses*/}
          <Page number={7}>
            <h2 className="text-xl font-bold text-indigo-900 mb-3">
              Verificação de Informações e Vieses
            </h2>
            <div className="grid grid-cols-2 gap-2">
              {verificacoes.map(item => (
                <div key={item.id}>
                  <div className="bg-blue-200 border-1 border-blue-200 rounded-2xl p-2 text-[10px]">
                    <p>
                      <strong>{item.title}</strong>
                      <br />
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-span-2 bg-amber-50 border-l-4 border-amber-500 p-3 mb-4 rounded-r-lg">
              <div className="flex items-start space-x-2">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs text-amber-800">
                    Cuidado com Golpes por Clonagem (Deepfakes):
                  </h4>
                  <p className="text-[11px] text-amber-700">
                    Desconfie de mensagens urgentes solicitando dinheiro, PIX ou
                    senhas, mesmo com voz ou rosto conhecidos. Confirme sempre
                    por um canal de contato oficial e já conhecido antes de
                    agir.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-2 bg-purple-200 border-l-4 border-purple-300 p-3 mb-4 rounded-r-lg">
              <div className="flex items-start space-x-2">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs text-amber-800">
                    O que são Vieses em Sistemas de IA?
                  </h4>
                  <p className="text-[11px] text-amber-700">
                    São distorções estatísticas que podem favorecer ou
                    prejudicar determinados grupos. Por exemplo, associar
                    profissões de prestígio a um único gênero ou retratar
                    culturas de maneira estereotipada.
                  </p>
                  <p className="bg-purple-50 border-blue-50 p-3 rounded-2xl text-[10px]">
                    <strong>Exemplo de Revisão Crítica: </strong>Se a IA disser
                    que "idosos têm dificuldade com tecnologia", questione a
                    generalização. O correto é reconhecer que o acesso e o
                    interesse variam individualmente entre as pessoas.
                  </p>
                </div>
              </div>
            </div>
          </Page>

          {/* Página 4: Checklist Final */}
          <Page number={8}>
            <h2 className="text-xl font-bold text-indigo-900 mb-3">
              04. Checklist de Verificação
            </h2>

            <div className="col-span-2 bg-green-200 border-l-4 border-green-400 p-3 mb-4 rounded-r-lg">
              <div className="flex items-start space-x-2">
                <p className="text-[10-px]">
                  Atividade Prática para Começar Hoje mesmo:
                </p>
                <p className="bg-purple-50 border-blue-50 p-3 rounded-2xl text-[10px]">
                  - 1. Peça à IA: "Crie uma lista de materiais para uma roda de
                  leitura com 10 pessoas. Não inclua preços."
                  <br />- 2. Em seguida, peça: "Separe os itens essenciais dos
                  opcionais e explique o critério." Verifique se a resposta se
                  adapta à sua realidade.
                </p>
              </div>
            </div>
            <p className="text-xs text-slate-600 mb-4">
              Antes de compartilhar qualquer conteúdo gerado por IA:
            </p>

            <div className="space-y-2 text-xs">
              <label className="flex items-center space-x-2 p-2 bg-white rounded border border-slate-200 cursor-pointer hover:bg-slate-100">
                <input
                  type="checkbox"
                  className="rounded text-indigo-600 focus:ring-indigo-500"
                />
                <span>
                  Meu pedido explicou a tarefa, o contexto e o formato desejado?
                </span>
              </label>
              <label className="flex items-center space-x-2 p-2 bg-white rounded border border-slate-200 cursor-pointer hover:bg-slate-100">
                <input
                  type="checkbox"
                  className="rounded text-indigo-600 focus:ring-indigo-500"
                />
                <span>
                  Protegi dados pessoais, financeiros e informações
                  confidenciais?
                </span>
              </label>
              <label className="flex items-center space-x-2 p-2 bg-white rounded border border-slate-200 cursor-pointer hover:bg-slate-100">
                <input
                  type="checkbox"
                  className="rounded text-indigo-600 focus:ring-indigo-500"
                />
                <span>
                  Conferi fatos, datas, nomes próprios, números e fontes
                  originais?
                </span>
              </label>
              <label className="flex items-center space-x-2 p-2 bg-white rounded border border-slate-200 cursor-pointer hover:bg-slate-100">
                <input
                  type="checkbox"
                  className="rounded text-indigo-600 focus:ring-indigo-500"
                />
                <span>
                  Revisei possíveis preconceitos, erros de lógica e omissões?
                </span>
              </label>
              <label className="flex items-center space-x-2 p-2 bg-white rounded border border-slate-200 cursor-pointer hover:bg-slate-100">
                <input
                  type="checkbox"
                  className="rounded text-indigo-600 focus:ring-indigo-500"
                />
                <span>
                  Tenho autorização e permissão para usar todos os materiais
                  envolvidos?
                </span>
              </label>
            </div>
            <div className="col-span-2 bg-purple-200 border-l-4 border-purple-300 p-3 mb-4 rounded-r-lg">
              <div className="flex items-start space-x-2">
                <p className="bg-purple-50 border-blue-50 p-3 rounded-2xl text-[10px]">
                  <strong>Objetivo Final: </strong>Desenvolver sua autonomia no
                  uso das ferramentas sem depender cegamente da primeira
                  resposta gerada.
                </p>
              </div>
            </div>
            <div className=" text-[10px] text-slate-500">
              <p className="font-bold">Fontes de Referência Consultadas:</p>
              <p>
                • UNIP. Guia Prático da Ação de Extensão II. Bacharelado em
                Ciência da Computação, 2026.
                <br />• Google Gemini Apps Support (support.google.com/gemini)
                <br />• Microsoft Copilot Support(support.microsoft.com)
              </p>
            </div>
          </Page>

          {/* Contra-Capa Posterior */}
          <div className="bg-slate-900 text-white p-8 flex flex-col justify-between h-full border-l border-slate-800">
            <div className="text-center space-y-4 my-auto">
              <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto" />
              <h3 className="text-lg font-bold">Uso Responsável da IA</h3>
              <p className="text-xs text-slate-400">
                A decisão e a responsabilidade final pelo conteúdo continuam
                sendo humanas.
              </p>
            </div>

            <div className="text-center text-[10px] text-slate-200">
              Material Educativo — 2026
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
