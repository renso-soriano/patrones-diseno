function isPalindrome(x: number): boolean {
    let number = x.toString()
    let inverse = number.split('').reverse().join('')

         console.log(number)

    if (number === inverse) {
        return true
    }
    return false
};


//isPalindrome(-121)

function romanToInt(s?: string): any {

   const arreglo = [
        { symbol: 'I', value: 1 },
        { symbol: 'V', value: 5 },
        { symbol: 'X', value: 10 },
        { symbol: 'L', value: 50 },
        { symbol: 'C', value: 100 },
        { symbol: 'D', value: 500 },
        { symbol: 'M', value: 1000 },
      ]; // { A: 'First', B: 'Second', C: 'Third' }
      let valorTotal = 0;

      for (const producto of arreglo) {
        // Calculamos el valor del producto (precio * cantidad)
        const valorProducto = producto.value 

        if (valorProducto > valorProducto - 1) {
            producto.symbol 
        }
    
        // Sumamos el valor del producto al valor total
        valorTotal += valorProducto;
    
        // Imprimimos información sobre cada producto
        console.log(
            `Producto: ${producto.symbol}, Precio: $${producto.value}, Valor: $${valorProducto}`
        );
}};

romanToInt()