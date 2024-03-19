let opcao = prompt('Escolha a opção\n 1- Funcionario\n 2- Cliente\n 3- Vip')

let escolha = parseInt(opcao)

switch (escolha) {
    case 1:
        alert('Funcionario\nDesconto de 10%')
        
        break
    case 2:
        alert('Cliente\nSem desconto')
        break
    case 3:
        alert('Vip\nDesconto de 5%')
       
    default:
        alert('Opção invalida')

}
