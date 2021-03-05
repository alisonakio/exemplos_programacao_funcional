const atualizaNome = (funcionario: object): object => (
    {...funcionario, nome: 'José da Silva'})
const atualizaGenero = (funcionario: object): object => (
    {...funcionario, genero: 'Masculino'})
const atualizaCargo = (funcionario: object): object => (
    {...funcionario, cargo: 'Engenheiro de Software'})
const atualizaSalarioMensal = (funcionario: object): object => (
    {...funcionario, salarioMensal: 1000})
const atualizaSalarioAnual = (funcionario: object): object => (
    {...funcionario, salarioAnual: funcionario['salarioMensal'] * 12})

const atualizaFuncionario = (): object => {
    let funcionario: object = {
        id: 1,
        ativo: true,
    }
    const funcoesAtualizadorasArray: Array<Function> = [
        atualizaNome,
        atualizaGenero,
        atualizaCargo,
        atualizaSalarioMensal,
        atualizaSalarioAnual,
    ]    
    funcoesAtualizadorasArray.forEach(
        funcaoAtualizadora => funcionario = funcaoAtualizadora(funcionario))
    return funcionario
}

console.log(atualizaFuncionario())
