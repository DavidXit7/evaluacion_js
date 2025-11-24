export const generarTabla = (numero) => {
    let resultados = []

    for(let i = 0; i <= 10; i++){
        resultados.push(`${numero} x ${i} es igual a: ${numero * i}`)
    }
    return resultados
}