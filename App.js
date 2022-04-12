import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import ColorBox from './components/ColorBox';

export default function App() {
  return (
    <SafeAreaView >
      <View style={styles.container}>
        <Text style={styles.text}>Here are some boxes of different colours</Text>
        <ColorBox colorName="cyan" hexCode="#2aa198"/>
        <ColorBox colorName="blue" hexCode="#268bd2"/>
        <ColorBox colorName="magenta" hexCode="#d33682"/>
        <ColorBox colorName="orange" hexCode="#cb4b16"/>
      </View>
   </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 40,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
