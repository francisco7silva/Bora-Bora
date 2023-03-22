function preçoRamo(nrosas: number, ntulipas: number, preçorosas: number, preçotulipas: number): number {
    let preço: number;
    
    preço = nrosas * preçorosas + ntulipas * preçotulipas;

    return preço;
}
console.log (preçoRamo(3, 2, 1.7, 2.1));

export {preçoRamo}