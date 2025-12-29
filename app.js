alert('Boas vindas ao jogo do Número Secreto!');
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute = prompt('Escolha um número entre 1 e 10');

// se chute for igual ao número secreto 
if (numeroSecreto == chute) {
    console.log(`Isso ai! você descobriu o número secreto ${numeroSecreto}`);
} else{
    if(chute > numeroSecreto) {
        alert(`O número secreto é menor que ${chute}`);
    } else {
        alert(`O número secreto é maior que ${chute}`)
    }
}