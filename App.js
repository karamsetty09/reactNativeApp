import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView >
      <View style={styles.container}>
        <Text style={styles.text}>Here are some boxes of different colours</Text>
        <View style={[styles.cyan, styles.box]}>
          <Text style={styles.boxText}>Cyan #2aa198</Text>
        </View>
        <View style={[styles.blue, styles.box]}>
          <Text style={styles.boxText}>Blue #268bd2</Text>
        </View>
        <View style={[styles.magenta, styles.box]}>
          <Text style={styles.boxText}>Magento #d33682</Text>
        </View>
        <View style={[styles.orange, styles.box]}>
          <Text style={styles.boxText}>Orange #cb4b16</Text>
        </View>
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
  cyan: {
    backgroundColor: '#2aa198',
  },
  blue: {
    backgroundColor: '#268bd2',
  },
  magenta: {
    backgroundColor: '#d33682',
  },
  orange: {
    backgroundColor: '#cb4b16',
  },
  box: {
    padding: 10,
    // below two for making center.
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  boxText: {
    color: 'white',
    fontWeight: 'bold',
  }
});
