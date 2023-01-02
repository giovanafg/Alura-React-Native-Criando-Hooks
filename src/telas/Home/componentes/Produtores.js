import React, { useEffect, useState } from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';

import { carregaProdutores } from '../../../servicos/carregaDados';


export default function Produtores({topo: Topo}){
    const [titulo, setTitulo] = useState('');
    const [lista, setLista] = useState('');
    
    /**USEREFFECT É UMA FUNÇÃO DENTRO DO REACT, ONDE ELE FAZ UM EFEITO QUANDO O COMPONENTE FOR CARREGADO*/
    useEffect(() => {
        const retorno = carregaProdutores();
        setTitulo(retorno.titulo);
        setLista(retorno.lista);
        console.log(retorno)
    }, []);

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
         renderItem={({item: {nome}}) => <Text>{nome}</Text>}
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


