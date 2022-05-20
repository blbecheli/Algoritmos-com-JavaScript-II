const listaLivros = require('./array')

//Recursão. Eu posso chamar uma função dentro dela mesmo. 
//No caso a condição do if é que o tamanho da array (array.length) seja maior que 1. Assim na const parte 1 e 2, a função será constantemente chamada (mergeSort) até que a condição do if não seja mais atendida.
//Na recursão as variáveis não são substituidas como em um laço de repetição. Na recursão são criadas instâncias (níveis) onde cada vez que o código é iterado, é como se fosse uma nova função com novas variáveis e estas funções estão aninhadas
function mergeSort(array, nivelAninhamento=0) { //nivelAninhamento só estou usando para verificar as iterações. Ele não é necessário no código, em nenhuma parte (console.log, const, etc)

    console.log(`nível de aninhamento: ${nivelAninhamento}`);
    console.log(array);
    if (array.length > 1) {
        const meio = Math.floor(array.length / 2); //Math.floor arrendonda o valor para baixo
        const parte1 = mergeSort(array.slice(0, meio), nivelAninhamento++); //slice divide a array. No caso ele vai dividir do indice 0 até o meio (const indicada acima)
        const parte2 = mergeSort(array.slice(meio, array.length),nivelAninhamento++);// Neste caso vai dividir do meio até o final
        array = ordena(parte1, parte2)
    }
    return array
}

function ordena(parte1, parte2) {
    let posicaoAtualParte1 = 0;
    let posicaoAtualParte2 = 0;
    const resultado = []

    while (posicaoAtualParte1 < parte1.length && posicaoAtualParte2 < parte2.length) {
        let produtoAtualParte1 = parte1[posicaoAtualParte1]
        let produtoAtualParte2 = parte2[posicaoAtualParte2]

        if (produtoAtualParte1.preco < produtoAtualParte2.preco) {
            resultado.push(produtoAtualParte1);
            posicaoAtualParte1++
        } else{
            resultado.push(produtoAtualParte2);
            posicaoAtualParte2++
        }
}

return resultado.concat(posicaoAtualParte1 < parte1.length
    ?parte1.slice(posicaoAtualParte1)
    :parte2.slice(posicaoAtualParte2))
}

console.log(mergeSort(listaLivros));