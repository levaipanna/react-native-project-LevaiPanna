import { useState, useMemo } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

import Bejegyzes from '../3feladatsor/components/Bejegyzes';
import useBejegyzesek from './hooks/useBejegyzesek';

export default function App() {
  const { bejegyzesek, ujBejegyzesHozzaadasa, kedvencValtas } = useBejegyzesek();

  const [ujCim, setUjCim] = useState('');
  const [ujHely, setUjHely] = useState('');
  const [kereses, setKereses] = useState('');
  const [szuro, setSzuro] = useState('osszes');

  const kedvencekSzama = bejegyzesek.filter((bejegyzes) => bejegyzes.kedvenc).length;

  const szurtBejegyzesek = useMemo(() => {
    const keresettSzoveg = kereses.trim().toLowerCase();

    return bejegyzesek.filter((bejegyzes) => {
      const keresesEgyezik =
        bejegyzes.cim.toLowerCase().includes(keresettSzoveg) || bejegyzes.hely.toLowerCase().includes(keresettSzoveg);

      const szuroEgyezik =
        szuro === 'osszes' ||
        (szuro === 'kedvencek' && bejegyzes.kedvenc) ||
        (szuro === 'nemKedvencek' && !bejegyzes.kedvenc);

      return keresesEgyezik && szuroEgyezik;
    });
  }, [bejegyzesek, kereses, szuro]);

  function hozzaadas() {
    if (ujCim.trim() === '' || ujHely.trim() === '') {
      return;
    }

    ujBejegyzesHozzaadasa(ujCim.trim(), ujHely.trim());
    setUjCim('');
    setUjHely('');
  }

  return (
    <View>
      <Text>Útinapló</Text>
      <Text>Összes bejegyzés: {bejegyzesek.length}</Text>
      <Text>Kedvenc bejegyzések: {kedvencekSzama}</Text>
      <Text>Új bejegyzés hozzáadása:</Text>
      <TextInput placeholder="Bejegyzés címe" value={ujCim} onChangeText={setUjCim} />
      <TextInput placeholder="Helyszín" value={ujHely} onChangeText={setUjHely} />
      <Button title="Hozzáadás" onPress={hozzaadas} />

      <TextInput placeholder="Keresés cím vagy helyszín alapján" value={kereses} onChangeText={setKereses} />
      <Button title="Összes" onPress={() => setSzuro('osszes')} />
      <Button title="Kedvencek" onPress={() => setSzuro('kedvencek')} />
      <Button title="Nem kedvencek" onPress={() => setSzuro('nemKedvencek')} />
      <Text>Találatok száma: {szurtBejegyzesek.length}</Text>

      {szurtBejegyzesek.map((bejegyzes) => (
        <Bejegyzes
          key={bejegyzes.id}
          cim={bejegyzes.cim}
          hely={bejegyzes.hely}
          leiras={bejegyzes.leiras}
          kedvenc={bejegyzes.kedvenc}
          onKedvenc={() => kedvencValtas(bejegyzes.id)}
        />
      ))}
    </View>
  );
}
