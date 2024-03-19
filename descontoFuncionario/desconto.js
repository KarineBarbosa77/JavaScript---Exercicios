let opcao = prompt('Escolha a opção\n 1- Funcionario\n 2- Cliente\n 3- Vip')

let escolha = parseInt(opcao)

switch (escolha) {
    case 1:
        alert('Funcionario\nDesconto de 10%')
        prompt('Digite o total da compra: '+ valorTotal)
        let valorDesconto = parseFloat (10/100)*valorTotal
        alert('Valor do desconto: R$' + valorDesconto)
        break
    case 2:
        alert('Cliente\nSem desconto')
        prompt('Digite o total da compra: ' + valorDesconto)
        
        break
    case 3:
        alert('Vip\nDesconto de 5%')
        prompt('Digite o total da compra: ' + valorDesconto)
        alert('Total: ')
    default:
        alert('Opção invalida')

}

//let valorTotalFuncionario = parseFloat(prompt('Digite o total da compra: '));
//let valorDesconto = 0.1 * valorTotalFuncionario; // 10% de desconto
//alert('Funcionario\nDesconto de 10%\nValor do desconto: R$' + valorDesconto);
//break