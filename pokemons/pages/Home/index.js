import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import style from './style.js'
export default function Home({ navigation }) {

    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon", {
            "method": "GET",
            "headers": {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(resp => {
            return resp.json()
        }).then(data => {
            setPokemons(data.results);
        }).catch(err => {
        });
    }, []);


    return (
        <View style={style.tela}style={style.item}>
                {
                    pokemons.map((item,index) => {
                        return(
                            <TouchableOpacity style={style.item} key = {index} onPress={() => { navigation.navigate('Pokemon Page01', {nome:item.name}) }}>
                                <Text style = {style.text}>{item.name}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
        </View>
    )
}