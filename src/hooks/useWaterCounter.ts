import { useState } from 'react';

export const useWaterCounter = () => {
  const [copos, setCopos] = useState(0);
  const [meta, setMeta] = useState(8);

  const adicionarCopo = () => {
    setCopos(prev => prev + 1);
  };

  const repor = () => {
    setCopos(0);
  };

  const definirMeta = (novaMeta: number): boolean => {
    if (!isNaN(novaMeta) && novaMeta > 0) {
      setMeta(novaMeta);
      return true;
    }
    return false;
  };

  const objetivoAtingido = copos >= meta;
  const percentual = Math.min((copos / meta) * 100, 100);

  return {
    copos,
    meta,
    adicionarCopo,
    repor,
    definirMeta,
    objetivoAtingido,
    percentual,
  };
};
