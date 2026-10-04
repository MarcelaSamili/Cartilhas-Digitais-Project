/*Constantes gerais */

import { text } from 'stream/consumers';

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
    href: '/cartilhas/ia-publicogeral',
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

type sectionstext = {
  id: number;
  title: string;
  text1: string;
  text2: string;
  src1: string;
  src2: string;
  className1: string;
  className2: string;
};

export const sectionstext = [
  {
    id: 1,
    title: 'O que é Tecnologia Sustentável?',
    text1:
      'A tecnologia sustentável é o desenvolvimento e uso de soluções tecnológicas com o objetivo de reduzir os impactos ambientais e promover o uso consciente dos recursos naturais. Ela busca equilibrar inovação com responsabilidade, criando produtos e sistemas que consumam menos energia, gerem menos resíduos e tenham maior durabilidade.',
    text2:
      'Esse conceito envolve desde a criação de dispositivos mais eficientes até o uso de energias limpas, contribuindo para um futuro mais sustentável sem abrir mão do avanço tecnológico.',
    src1: '/icons1cartil/icon3.png',
    src2: '/icons1cartil/icon3.2.png',
    className1: 'absolute right-10 top-10',
    className2: 'absolute left-5 bottom-0',
  },
  {
    id: 2,
    title: 'Impactos da Tecnologia',
    text1:
      'A tecnologia impacta positivamente o meio ambiente ao promover eficiência energética (LED, veículos elétricos), energias renováveis (solar, eólica), agricultura de precisão (otimização de insumos) e monitoramento ambiental em tempo real (satélites e IA). Ferramentas digitais facilitam a redução de papel, gestão de resíduos e cidades inteligentes. ',
    text2:
      'Principais Impactos Positivos da Tecnologia no Meio Ambiente:Energia Limpa e Eficiência, Agricultura de Precisão, Monitoramento Ambiental, Sustentabilidade Digital,Economia Circular e Gestão de Resíduos e Redução da Pegada de Carbono. ',
    src1: '/icons1cartil/iconn5.png',
    src2: '/icons1cartil/icon6.2.png',
    className1: 'absolute right-10 top-10',
    className2: 'absolute left-5 bottom-0',
  },
  {
    id: 3,
    title: 'Soluções Sustentáveis',
    text1:
      'Para minimizar esses impactos, diversas soluções sustentáveis vêm sendo adotadas. O uso de energias renováveis, como solar e eólica, é uma das principais alternativas para reduzir a dependência de fontes poluentes.',
    text2:
      'Outra prática importante é a reciclagem de eletrônicos, que permite reaproveitar materiais e diminuir a extração de recursos naturais. Além disso, o incentivo ao consumo consciente — comprando apenas o necessário e optando por produtos duráveis — é fundamental para reduzir o desperdício. Empresas também têm investido em tecnologias mais eficientes e processos produtivos menos agressivos ao meio ambiente.',
    src1: '/icons1cartil/icon4.png',
    src2: '/icons1cartil/icon4.2.png',
    className1: 'absolute right-10 top-10',
    className2: 'absolute left-5 bottom-0',
  },
  {
    id: 4,
    title: 'O que você pode fazer?',
    text1:
      'Cada pessoa pode contribuir para um mundo mais sustentável por meio de pequenas atitudes no dia a dia. Desligar aparelhos eletrônicos quando não estiverem em uso ajuda a economizar energia.',
    text2:
      'Também é importante descartar corretamente resíduos eletrônicos em locais apropriados para reciclagem. Evitar compras desnecessárias e priorizar produtos de empresas comprometidas com a sustentabilidade faz toda a diferença. Além disso, compartilhar conhecimento e conscientizar outras pessoas amplia ainda mais o impacto positivo dessas ações.',
    src1: '/icons1cartil/iconn5.png',
    src2: '/icons1cartil/icon5.2.png',
    className1: 'absolute right-10 top-10',
    className2: 'absolute left-5 bottom-0',
  },
  {
    id: 5,
    title: 'Conclusão',
    text1:
      ' A tecnologia sustentável é essencial para garantir o equilíbrio entre desenvolvimento e preservação ambiental. Ao adotar práticas mais conscientes e apoiar iniciativas sustentáveis, é possível reduzir significativamente os impactos negativos da tecnologia no planeta.',
    text2:
      'O futuro depende das escolhas que fazemos hoje. Pequenas mudanças de hábito, quando somadas, têm o poder de transformar o mundo em um lugar mais saudável e sustentável para todos.',
    src1: '/icons1cartil/icon6.png',
    src2: '/icons1cartil/icon6.2.png',
    className1: 'absolute left-5 bottom-0',
    className2: 'absolute right-10 top-10',
  },
];

type cardcontent_cartil2 = {
  id: number;
  title: string;
  text: string;
  span: string;
};

export const cardcontent_cartil2 = [
  {
    id: 1,
    title: '1. Escrever uma Mensagem',
    text: '"Escreva uma mensagem educada pedindo informações sobre um curso. Quero saber horário, valor e inscrição. Até 80 palavras."',
    span: 'Confira: Exprime o que você deseja? Adapte o tom à sua forma natural de falar e confirme dados.',
  },
  {
    id: 2,
    title: '2. Estudar sem Deixar de Aprender',
    text: '"Explique o ciclo da água em linguagem simples. Depois, crie três perguntas. Espere minhas respostas antes de corrigir."',
    span: 'Confira: Compare com o livro didático. Responda sozinho para fixar e siga as regras da sua escola.',
  },
  {
    id: 3,
    title: '3. Organizar Pequeno Negócio',
    text: '"Com base nesta lista fictícia de tarefas, monte uma tabela de atendimento com prioridades. Não invente horários."',
    span: 'Confira: O plano cabe na sua rotina? Preços, prazos e estoques devem vir de registros reais.',
  },
  {
    id: 4,
    title: '4. Resumir um Texto com Cuidado',
    text: '"Resuma o texto abaixo em 5 tópicos. Use apenas o conteúdo fornecido. Preserve datas, condições e avisos."',
    span: 'Confira: Leia o original e certifique-se de que nenhum aviso importante foi omitido.',
  },
];
type criacaoerevisao = {
  id: number;
  title: string;
  text: string;
  span: string;
};
export const criacaoerevisao = [
  {
    id: 1,
    title: ' Gerar uma Imagem Sintética',
    text: 'Exemplo: "Crie uma ilustração simples de uma biblioteca comunitária, com pessoas de diferentes idades lendo. Use cores suaves, sem logotipos e sem texto escrito."',
    span: 'Análise Crítica: Observe mãos, rostos e possíveis estereótipos. Textos dentro de imagens costumam sair errados; prefira adicionar textos usando editores gráficos.',
  },
  {
    id: 2,
    title: 'Transcrever e Organizar Áudios',
    text: 'Prompt: "Transcreva este áudio. Indique os trechos que não conseguir entender e não complete falas por suposição. Depois, liste assuntos e tarefas citadas."',
    span: 'Antes: Peça autorização de quem fala e evite áudios com segredos ou dados pessoais. Depois: Ouça novamente e confira nomes próprios, valores e números. Sotaques e ruídos causam erros de interpretação.',
  },
];
type verificacoes = {
  id: number;
  title: string;
  text: string;
};
export const verificacoes = [
  {
    id: 1,
    title: '1. Origem',
    text: 'Existe uma fonte original identificável, confiável e reconhecida sobre o assunto?',
  },
  {
    id: 2,
    title: '2. Conteúdo',
    text: 'Ao abrir os links e documentos originais, eles realmente confirmam o que a IA afirmou?',
  },
  {
    id: 3,
    title: '3. Data',
    text: 'A informação continua válida e atualizada no contexto presente?',
  },
  {
    id: 4,
    title: '4. Comparação',
    text: 'Outras fontes independentes de prestígio atestam o mesmo ponto principal?',
  },
];
