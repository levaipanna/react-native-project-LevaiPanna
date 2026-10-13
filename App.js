import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View>
      <Text>Ez az én React Native alkalmazásom.</Text>
      <Text>Név: Lévai Panna</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
