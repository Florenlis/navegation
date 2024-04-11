import React from "react";
import { ImageBackground, Image, View } from "react-native"
import { styles } from "../../screens/Slide4/styles";
import { styleContainer } from "../../styles/globalstyle";

import { Botao } from "../../components/Botao"

export function Slide4() {
   const Fl = require('../../assets/fundoslidequatro.png')
   const Fll = require('../../assets/lufalufa.png')
    return (
      <ImageBackground source={Fl} style={styleContainer.container}>
          <View style={styles.legacy}>
            <Image source={Fll}></Image>
         </View>
 </ImageBackground>

    )
}
