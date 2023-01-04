import { useState, useEffect } from "react";

import { carregaProdutores } from '../servicos/carregaDados';


export default function useProdutores(melhoresProdutores){
    const [lista, setLista] = useState([]);

     /**USEREFFECT É UMA FUNÇÃO DENTRO DO REACT, ONDE ELE FAZ UM EFEITO QUANDO O COMPONENTE FOR CARREGADO*/
     useEffect(() => {
        const retorno = carregaProdutores();
        retorno.lista.sort(
            (produtor1, produtor2) => produtor1.distancia - produtor2.distancia,
        );
        let novaLista = retorno.lista;

        if (melhoresProdutores){
            novaLista = novaLista.filter(
                (produtor) => produtor.estrelas > 3
            );
        }
        setLista(novaLista);
    }, []);
    
    return [titulo, lista]
}