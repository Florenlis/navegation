import React from "react";
import { ImageBackground, Image, View } from "react-native"
import { styles } from "../../screens/Slide1/styles";
import { styleContainer } from "../../styles/globalstyle";
import { Ipagina } from "../../../App"
import { Botao } from "../../components/Botao"

export function Slide1({ setpageI }: Ipagina) {
   const Rw = require('../../assets/hogwarts.png')
   const sg = require('../../assets/harry.png')
    return (
      <ImageBackground source={Rw} style={styleContainer.container}>
         <View style={styles.legacy}>
            <Image source={sg}></Image>
         </View>
      <View style={styles.ball}>    
      <Botao onPress={() => setpageI(1)} />
      <Botao onPress={() => setpageI(2)} />
      <Botao onPress={() => setpageI(3)} />
</View>
 </ImageBackground>

    )
}