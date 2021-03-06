import React, {useState, useCallback, useEffect} from 'react';
import { FlatList, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import PalettePreview from '../components/PalettePreview';
import Counter from '../components/Counter';
import FetchByUseEffect from '../components/FetchByUseEffect';

const Home = ({navigation, route }) => {
    const [colorPalettes, setColorPalettes] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const newColorPalette = route.params ? route.params.newColorPalette : undefined ;

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        fetchColors();
        // intentionally setting timeout for display.
        setTimeout(()=>{setRefreshing(false);},1000)
        
    }, []);

    const fetchColors = useCallback(async () => {
        const result = await fetch('https://color-palette-api.kadikraman.vercel.app/palettes');
        
        if(result.ok){
            const palettes = await result.json();
            setColorPalettes(palettes);
        }
    }, []);

    useEffect(() => {
        fetchColors()
    },[]);

    useEffect(() => {
        if(newColorPalette){
            setColorPalettes(palettes => [newColorPalette, ...palettes])
        }
    },[newColorPalette]);

    return (
        <SafeAreaView>
            <FlatList
                style={styles.list}
                data={colorPalettes}
                keyExtractor={item => item.paletteName}
                renderItem={({ item }) => (
                    <PalettePreview
                        handlePress={()=>{
                            navigation.navigate('ColorPalette', item)
                        }}
                        colorPalette={item}
                    />
                )}
               
                refreshing={refreshing}
                onRefresh ={onRefresh}      
                ListHeaderComponent={
                    <TouchableOpacity onPress={() => {navigation.navigate('ColorPaletteModal')}}>
                        <Text style={styles.buttonText}>Add a color scheme</Text>
                    </TouchableOpacity>
                }
            />
            <Counter />
            <FetchByUseEffect style={styles.box}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    list: {
        padding: 20,
        backgroundColor: 'white'
    },
    box: {
        height: 200,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'teal',
        marginBottom: 10,
    }
})

export default Home;
