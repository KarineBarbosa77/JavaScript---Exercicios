const b = "4"
const h = "4"
const A = "2"

if (A == b && b == h && A == h){
    console.log('É Equilatero')
}else if(A != b && A != h  && b != h){
    console.log('É Escaleno')
}else{
    console.log('É Isosceles')
}
