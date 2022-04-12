import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import ColorBox from '../components/ColorBox';

const ColorPalette = ({ route }) => {
    const {colors, paletteName} = route.params;
  return (
    <SafeAreaView >
      <FlatList
          style={styles.container}
          // data from route.params
          data={colors}
          keyExtractor={item=>item.colorName}
          renderItem={({item}) => <ColorBox colorName={item.colorName} hexCode={item.hexCode}/>}
          ListHeaderComponent={<Text style={styles.text}>{paletteName}</Text>}
        />
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 10,
      paddingTop: 40,
      backgroundColor: 'white',
    },
    text: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
  });

export default ColorPalette;