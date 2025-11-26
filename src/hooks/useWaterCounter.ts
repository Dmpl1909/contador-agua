import { useState, useEffect } from 'react';

interface HistoryEntry {
  date: string;
  count: number;
  goal: number;
}

export const useWaterCounter = () => {
  const [copos, setCopos] = useState(0);
  const [meta, setMeta] = useState(8);
  const [lastAddedTime, setLastAddedTime] = useState<number | undefined>(undefined);
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [lastDate, setLastDate] = useState(new Date().toDateString());

  const adicionarCopo = () => {
    setCopos(prev => prev + 1);
    setLastAddedTime(Date.now());
  };

  const repor = () => {
    setCopos(0);
  };

  const salvarDiaAtual = () => {
    if (copos > 0) {
      const today = new Date();
      const dateString = today.toLocaleDateString('pt-PT', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      });
      
      setHistory(prev => [
        { date: dateString, count: copos, goal: meta },
        ...prev.slice(0, 6)
      ]);
      
      setCopos(0);
    }
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
    history,
    lastAddedTime,
    adicionarCopo,
    repor,
    salvarDiaAtual,
    definirMeta,
    objetivoAtingido,
    percentual,
  };
};
