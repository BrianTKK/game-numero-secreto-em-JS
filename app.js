alert('Boas vindas ao jogo do número secreto');

let chute;
console.log('Valor do chute:', chute);

let tentativas = 1;
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);

console.log('Resultado da comparação:', chute == numeroSecreto);

while (chute != numeroSecreto) {
    chute = prompt(`Digite um número de 1 a ${numeroMaximo}:`);
    if (chute == numeroSecreto) {
        break;
    } else {
        if (numeroSecreto > chute) {
            alert(`O número secreto é maior que ${chute}`);
        } else {
            alert(`O número secreto é menor que ${chute}`);    
        }
        tentativas++;
    }
}

let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Você acertou! O número secreto é ${numeroSecreto}. Com ${tentativas} ${palavraTentativas}.`);