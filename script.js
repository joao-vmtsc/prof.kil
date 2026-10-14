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

    alert("Cadastro finalizado com sucesso!");
}