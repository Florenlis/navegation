import {TouchableOpacity,TouchableOpacityProps} from "react-native"
import {styles} from "./style"

export function Botao(rest:TouchableOpacityProps) {
    return(
        <TouchableOpacity style={styles.butao} {...rest}/>
    )
}