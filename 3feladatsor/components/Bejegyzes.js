import { View, Text, Button, StyleSheet } from 'react-native';

export default function Bejegyzes({ cim, hely, leiras, kedvenc, onKedvenc }) {
  return (
    <View style={[styles.kartya, kedvenc && styles.kedvenc]}>
      <Text style={[styles.cim]}>Cím: {cim}</Text>
      <Text style={[styles.helyszin]}>Hely: {hely}</Text>
      {leiras ? <Text numberOfLines={2}>Leírás: {leiras}</Text> : null}
      <Text>{kedvenc ? 'Kedvenc: Igen' : 'Kedvenc: Nem'}</Text>
      <Button title={kedvenc ? 'Eltávolítás a kedvencekből' : 'Kedvencekhez adás'} onPress={onKedvenc} />
    </View>
  );
}

const styles = StyleSheet.create({
  kartya: {
    padding: 16,
    margin: 10,
    borderRadius: 10,
    borderWidth: 2,
  },
  fejlec: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cim: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 24,
  },
  helyszin: {
    color: 'grey',
  },
  kedvenc: {
    borderLeftWidth: 5,
    borderLeftColor: 'orange',
  },
});
