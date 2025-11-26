export const buscarElemento = (lista, elemento) => {
    for(let i=0; i < lista.length; i++){
        if(lista [i] === elemento){
            return true;
        }
    }
    return false;
}