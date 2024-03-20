let opcao = prompt ('Escolha\n 1- Gasolina\n 2- Alcool')
let gas = "Gasolina"
let alc = "Alcool"

let escolha = parseInt(opcao)

switch (escolha) {
    case 1:
        alert('Opcao escolhida: Gasolina')
        break
    case 2:
        alert('Opcao escolhida: Álcool')
        break
    default:
        alert('Opcao Inválida')
}