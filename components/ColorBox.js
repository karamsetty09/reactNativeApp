import React from 'react'
import {View, Text, StyleSheet } from 'react-native';

const ColorBox = ({colorName, hexCode}) => {
    const boxColor = {
        backgroundColor: hexCode,
    }
    return(
        <View style={[boxColor, styles.box]}>
          <Text style={styles.boxText}>
              {colorName}: {hexCode}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
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
})

export default ColorBox;
