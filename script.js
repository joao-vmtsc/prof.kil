let a = 10, b = 3;

    document.write("Soma: " + (a+b) + "<br>");
    document.write("Subtração: " + (a-b) + "<br>");
    document.write("Multiplicação: " + (a*b) + "<br>");
    document.write("Divisão: " + (a/b) + "<br>");
    document.write("Resto: " + (a % b) + "<br>");
    document.write("Potência: " + (a**b) + "<br>");


function Informacao() {
    
    let nome = prompt("Digite seu nome: ");
    alert("Bem-vindo, " + nome + "!");

    let idade = prompt("Digite sua idade: ");
    alert("Você tem " + idade + "anos.");

    let curso = prompt("Digite seu curso: ");
    alert("Seu curso é " + curso + ".");
    
    let cidade = prompt("Digite sua cidade: ");
    alert("Você mora em " + cidade + ".");

    let hobby = prompt("Digite seu hobby favorito: ");
    alert("Seu hobby favorito é " + hobby + ".");

    let salarioMensal = parseFloat(prompt("Digite seu salário mensal:"));
    alert("Seu salário é R$ " + salarioMensal.toFixed(2));

    let alimentacao = parseFloat(prompt("Digite seu gasto com alimentação mensal:"));
    alert("Seu gasto co alimentação é de R$" + alimentacao.toFixed(2));

    let saldo = salarioMensal - alimentacao;
    alert("Seu saldo final é R$" + saldo.toFixed(2));

    alert("Cadastro finalizado com sucesso!");
}