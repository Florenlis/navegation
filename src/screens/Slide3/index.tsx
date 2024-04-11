import React from "react";
import { ImageBackground, Image, View, TouchableOpacity, Text } from "react-native"
import { styles } from "../../screens/Slide3/styles";
import { styleContainer } from "../../styles/globalstyle";
import { Ipagina } from "../../../App"
import { Botao } from "../../components/Botao"
import {MenuStackTypes} from "../../navigation/MenuStack.navigation";

export function Slide3({ navigation, setpageI }: MenuStackTypes) {
   const Fs = require('../../assets/fundoslidetres.png')
   const Fss = require('../../assets/sonserina.png')
    return (
      <ImageBackground source={Fs} style={styleContainer.container}>
          <View style={styles.legacy}>
            <Image source={Fss}></Image>
            <View style={styles.butao}>        
      <Botao onPress={() => setpageI(1)} />
      <Botao onPress={() => setpageI(2)} />
      <Botao onPress={() => setpageI(3)} />
      </View>
      <TouchableOpacity style={styles.butao} 
         onPress={() => navigation.push("Slide4")}
      >  
          <Text>Próxima</Text>
      </TouchableOpacity>  
      </View>
   </ImageBackground>

    )
}






