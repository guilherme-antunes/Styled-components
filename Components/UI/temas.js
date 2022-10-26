import {fundoClaro, conteudoClaro, textoFundoClaro, conteudoEscuro, textoFundoEscuro} from './variaveis';
import { fundoEscuro } from './variaveis';

export const temaClaro ={
    body: fundoClaro,
    inside: conteudoClaro,
    text: textoFundoClaro,    
};
export const temaEscuro = {
    body: fundoEscuro,
    inside: conteudoEscuro,
    text: textoFundoEscuro,
    filter: "invert(100%)",
};