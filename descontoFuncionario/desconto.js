let opcao = prompt('Escolha a opção\n 1- Funcionario\n 2- Cliente\n 3- Vip')

let f = (10/100)*valorTotal
let c = valorTotal
let v = (5/100)*valorTotal
let escolha = parseInt(opcao)


switch (escolha) {
    case 1:
        alert('Funcionario\nDesconto de 10%')
        prompt('Digite o total da compra: ' + valorTotal)
        alert('Total: ' + f)
        
        break
    case 2:
        alert('Cliente\nSem desconto')
        prompt('Digite o total da compra: ' + valorTotal)
        alert('Total: ' + c)
        break
    case 3:
        alert('Vip\nDesconto de 5%')
        prompt('Digite o total da compra: ' + valorTotal)
        alert('Total: ' + v)
    default:
        alert('Opção invalida')

}

