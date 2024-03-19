let opcao = prompt('Escolha a opção\n 1- Funcionario\n 2- Cliente\n 3- Vip')

let escolha = parseInt(opcao)

switch (escolha) {
    case 1:
        alert('Funcionario\nDesconto de 10%')
        let valorTotalFuncionario = parseFloat(prompt('Digite o total da compra: '));
        let valorDesconto1 = 0.10 * valorTotalFuncionario; // 10% de desconto
        alert('Valor do desconto R$' + valorDesconto1.toFixed(2));
        break
    case 2:
        alert('Cliente\nSem desconto')
        let valorTotalCliente = parseFloat(prompt('Digite o total da compra: '));
        alert('Valor do desconto R$' + valorTotalCliente.toFixed(2));
        
        break
    case 3:
        alert('Vip\nDesconto de 5%')
        let valorTotalVip = parseFloat(prompt('Digite o total da compra: '));
        let valorDesconto2 = 0.05 * valorTotalVip; // 10% de desconto
        alert('Valor do desconto R$' + valorDesconto2.toFixed(2));
    default:
        alert('Opção invalida')

}

//let valorTotalFuncionario = parseFloat(prompt('Digite o total da compra: '));
//let valorDesconto = 0.1 * valorTotalFuncionario; // 10% de desconto
//alert('Funcionario\nDesconto de 10%\nValor do desconto: R$' + valorDesconto);
//break