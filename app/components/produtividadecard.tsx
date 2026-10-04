import { cardcontent_cartil2, criacaoerevisao } from '@/utils';
export const Produtividadecard = () => {
  return (
    <>
      {cardcontent_cartil2.map(item => (
        <div key={item.id}>
          <div className="bg-blue-200 border rounded-2xl p-2 border-blue-300">
            <h3 className="font-bold text-[12px]">{item.title}</h3>
            <div className="bg-slate-900 text-slate-100 p-3 rounded-lg font-mono text-[11px] space-y-2 mb-4">
              <p>{item.text}</p>
            </div>
          </div>
          <p className="text-[9px]">{item.span}</p>
        </div>
      ))}
    </>
  );
};

export const CriacaoeRevisao = () => {
  return (
    <>
      {criacaoerevisao.map(item => (
        <div key={item.id}>
          <div className="bg-emerald-100 border rounded-2xl p-2 border-emerald-50">
            <h3 className="font-bold text-[12px]">{item.title}</h3>
            <div className="bg-slate-900 text-slate-100 p-3 rounded-lg font-mono text-[11px] space-y-2 mb-4">
              <p>{item.text}</p>
            </div>
          </div>
          <p className="text-[9px]">{item.span}</p>
        </div>
      ))}
    </>
  );
};
