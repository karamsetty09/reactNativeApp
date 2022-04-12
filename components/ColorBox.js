import React from 'react'
import {View, Text, StyleSheet } from 'react-native';

const ColorBox = ({colorName, hexCode}) => {
    const boxColor = {
        backgroundColor: hexCode,
    };
    const textColor = {
        color: parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1 ? 'black' : 'white',
    };
    return(
        <View style={[boxColor, styles.box]}>
          <Text style={[styles.boxText, textColor]}>
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
