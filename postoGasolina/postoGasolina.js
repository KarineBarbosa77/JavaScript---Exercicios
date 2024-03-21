let opcao = prompt ('Escolha\n 1- Gasolina\n 2- Alcool')

let escolha = parseInt(opcao)

switch (escolha) {
    case 1:
        alert('Opcao escolhida: Gasolina')
        let L = parseFloat(prompt('Digite o total de litros: '))
        if(L <= 20){
            alert('Desconto de 4%\n')
            let valor = L * 5.30
            let desconto = (4 / 100) * valor
            let valorTotal = valor - desconto
            alert('Desconto de R$' + desconto.toFixed(2))
            alert('Totalizando R$' + valorTotal.toFixed(2))
            
        }else{
            alert('Desconto de 6%')
            let valor = L * 5.30
            let desconto = (6 / 100) * valor
            let valorTotal = valor - desconto
            alert('Desconto de R$' + desconto.toFixed(2))
            alert('Totalizando R$' + valorTotal.toFixed(2))
        }
        break
    case 2:
        alert('Opcao escolhida: Álcool')
        let L2 = parseFloat(prompt('Digite o total de litros: '))
        if(L2 <= 20){
            alert('Desconto de 3%')
            let valor = L2 * 4.9
            let desconto = (3/100) * valor
            let valorTotal = valor - desconto
            alert('Desconto de R$' + desconto.toFixed(2))
            alert('Totalizando R$' + valorTotal.toFixed(2))
        }else{
            alert('Desconto de 5%')
            let valor = L2 * 4.9
            let desconto = (5/100) * valor
            let valorTotal = valor - desconto
            alert('Desconto de R$' + desconto)
            alert('Totalizando R$' + valorTotal)
        }
        break
    default:
        alert('Opcao Inválida')
}
//litro gasolina = 5,30 
//litro alcool = 4,90

// Gasolina se for até 20L = desconto de 4% por litro
// se for mais de 20L = desconto de 6% por litro

//Alcool se for até 20L = desconto de 3% por litro
// se for mais de 20L = desconto de 5% por litro

// Escolha Gasolina ou Alcool
// Selecionar a quantidade de litros que o usuario deseja
// switch case para gasolina e alcool
// Mostrar a quantidade de desconto se for alcool ou gasolina