let opcao = prompt ('Escolha\n 1- Gasolina\n 2- Alcool')

let escolha = parseInt(opcao)

switch (escolha) {
    case 1:
        alert('Opcao escolhida: Gasolina')
        let gas = parseFloat(prompt('Digite o total de litros: '))
        if(gas <= 20){
            let total = gas * 5.3
            alert('Desconto de 4%\n')
            
        }else{
            alert('')
        }
        break
    case 2:
        alert('Opcao escolhida: Álcool')
        let alc = parseFloat(prompt('Digite o total de litros: '))
        break
    default:
        alert('Opcao Inválida')
}
//litro gasolina = 5,30 
//