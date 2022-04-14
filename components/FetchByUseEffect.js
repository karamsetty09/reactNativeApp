import React, {useState, useCallback, useEffect} from 'react';
import {Views, Text, FlatList, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native';

const FetchByUseEffect = () => {
    const [facts, setFacts] = useState([]);
    const handleFetchCatFacts = useCallback( async () => {
        const result = await fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=4');
        const facts = await result.json();
        if(result.ok){
            setFacts(facts);
        }
    });

    useEffect(()=>{handleFetchCatFacts()}, []);
  return (
      <SafeAreaView>
            <Text style={styles.box}>FetchByUseEffect</Text>
            <FlatList
                data={facts}
                keyExtractor={item => item._id}
                renderItem={({ item }) => <Text style={styles.text}>{item.text}</Text>}
            />
      </SafeAreaView>
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
    list: {
        marginTop: 40,
        padding: 10,
        flex: 1,
      },
      text: {
        marginBottom: 20,
        fontSize: 16
      }
});
export default FetchByUseEffect