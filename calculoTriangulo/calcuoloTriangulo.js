let ladoA = '2'
let ladoB = '2'
let ladoC = '2'

ladoA = parseFloat(ladoA);
ladoB = parseFloat(ladoB);
ladoC = parseFloat(ladoC);


if(ladoA == ladoB && ladoA == ladoC && ladoC == ladoB){
    console.log('Triangulo EQUILATERO')
} else if(ladoA != ladoB && ladoC != ladoB && ladoA != ladoC){
    console.log('Triangulo ESCALENO')
}else{
    console.log('Triangulo ISOSCELES')
}