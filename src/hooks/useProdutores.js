import { useState, useEffect } from "react";

import { carregaProdutores } from '../servicos/carregaDados';


export default function useProdutores(){
    const [titulo, setTitulo] = useState('');
    const [lista, setLista] = useState([]);

     /**USEREFFECT É UMA FUNÇÃO DENTRO DO REACT, ONDE ELE FAZ UM EFEITO QUANDO O COMPONENTE FOR CARREGADO*/
     useEffect(() => {
        const retorno = carregaProdutores();
        setTitulo(retorno.titulo);
        setLista(retorno.lista);
        console.log(retorno)
    }, []);
    
    return [titulo, lista]
}