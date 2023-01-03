import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';

import Produtor from './Produtor';
import useProdutores from '../../../hooks/useProdutores'


export default function Produtores({topo: Topo}){
    const [titulo, lista] = useProdutores();
    
    const TopoLista = () => {
        return <>
            <Topo />
            <Text style={estilos.titulo}>{titulo}</Text>
        </>
    }

    return <FlatList 
         /**DATA - LISTA */
         data={lista}
         /**PARA RENDERIZAR O QUE ESTÁ DENTRO DA LISTA */
         renderItem={({item }) => <Produtor {...item} />}
         /**DECLARA QUAL A KEY DA LISTA */
         keyExtractor={({nome}) => nome}
         /**HEADER ONDE IRÁ COMPOR O TITULO DA LISTA */
         ListHeaderComponent={TopoLista} />

}

/**ESTILOS */

const estilos = StyleSheet.create({
    titulo: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        color: "#464646",
        fontWeight: "bold"

    }
})


