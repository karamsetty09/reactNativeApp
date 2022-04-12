import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container, styles.teal]}>
        <Text>Hello world !!!</Text>
      </View>
   </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  teal: {
    backgroundColor: 'pink',
  },
  container: {
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  safeArea: {
    flex: 2,
  }
});
