import { useState, useEffect } from 'react';

const MINTA_BEJEGYZESEK = [
  { id: '1', cim: 'elso', hely: 'Budapest', leiras: 'johely', kedvenc: true },
  { id: '2', cim: 'masodik', hely: 'Eger', leiras: '', kedvenc: false },
  { id: '3', cim: 'harmadik', hely: 'Mátra', leiras: '', kedvenc: true },
];

export default function useBejegyzesek() {
  const [bejegyzesek, setBejegyzesek] = useState([]);
  const [betoltes, setBetoltes] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBejegyzesek(MINTA_BEJEGYZESEK);
      setBetoltes(false);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  function ujBejegyzesHozzaadasa(cim, hely) {
    const ujBejegyzes = {
      id: Date.now().toString(),
      cim,
      hely,
      leiras: '',
      kedvenc: false,
    };

    setBejegyzesek((b) => [...b, ujBejegyzes]);
  }

  function kedvencValtas(id) {
    setBejegyzesek((b) =>
      b.map((bejegyzes) => (bejegyzes.id === id ? { ...bejegyzes, kedvenc: !bejegyzes.kedvenc } : bejegyzes)),
    );
  }

  return { bejegyzesek, betoltes, ujBejegyzesHozzaadasa, kedvencValtas };
}
