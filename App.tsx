import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FAB from './components/FAB';
import { useState } from 'react';

export default function App() {
  const [counter, setCounter] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.textHuge}>{counter}</Text>
      <Text>Las neas y las niggas</Text>

      <FAB
        label="+1"
        onPress={() => setCounter(counter + 1)}
        onLongPress={() => setCounter(0)}
        position="right"
      />

      <FAB label="Reset" onPress={() => setCounter(0)} position="left" />

      <StatusBar style="dark" />
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

  textHuge: {
    fontSize: 120,
    fontWeight: '100',
  },
});
