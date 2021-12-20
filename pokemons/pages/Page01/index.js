import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import style from './style.js'
export default function Home({ navigation, route }) {

    const { nome } = route.params;
    const [pokemons, setPokemons] = useState([])
    const [poke, setPoke] = useState([])
    const [abilidades, setAbilidades] = useState([])

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/" + nome, {
            "method": "GET",
            "headers": {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(resp => {
            return resp.json()
        }).then(data => {

            setPoke(data);
            setPokemons(data.sprites);
            setAbilidades(data.abilities);
            //console.log(data.sprites)
            //console.log(pokemons)
        }).catch(err => {
        });
    }, []);


    return (
        <View style = {style.tela}>

            {
                <View>

                    <Image style={style.img} source={pokemons.back_default}></Image>
                    <Text style = {style.text}>{nome}</Text>

                    <Text style = {style.title}>Abilidades</Text>

                    {
                        abilidades.map((item,index) => {
                        return(
                            <Text key = {index} style = {style.abilidades}>{item.ability.name}</Text>
                        )
                     })

                    }

                </View>
                //
               
                //console.log(pokemons)

               
            }
          
        </View>
    )
}