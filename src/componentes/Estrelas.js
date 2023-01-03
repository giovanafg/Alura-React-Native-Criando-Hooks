import React from "react";
import { View, Image, StyleSheet} from 'react-native';

import estrela from '../../assets/estrela.png';
import estrelaCinza from  '../../assets/estrelaCinza.png'

export default function Estrelas({
    quantidade: quantidadeAntiga,
    editavel = false,
    grande = false,
}) {
    const estilos = estilosFuncao(grande);
    return <View style={estilos.estrelas}>
        <Image style={estilos.estrela} source={estrela} />
        <Image style={estilos.estrela} source={estrela} />
    </View>
}

/**ESTILOS */
const estilosFuncao = (grande) => StyleSheet.create({
    estrelas: {
        flexDirection: "row",
        marginRight: 2,
    },
    estrela: {
        width: grande ? 36 : 12,
        height: grande ? 36 : 12
    }
})