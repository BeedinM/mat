export function criaListaQ(tamanhoQ) {
    const listaQ = [];
    for(let i = 1; i <= tamanhoQ; i++) {
        const lista = new Array(tamanhoQ).fill("-");
        listaQ.push(lista);
    }

    return listaQ;
};