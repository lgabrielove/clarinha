const text = `
Minha Clarinha, até que enfim você chegou. Eu te esperei tanto, mas sempre com a certeza de que, um dia, iria te encontrar. Ao te ver pela primeira vez, tive ciência de que tudo isso era muito simples: sempre foi você, e sempre será. És a melhor escolha que fiz em tanto tempo, e a cada dia, hora, minuto e segundo continuo te escolhendo e me apaixonando por cada detalhe seu novamente. Descobri que nada se compara à leveza que sinto ao lembrar do seu sorriso, à forma como isso ilumina meus dias, e à sensação de que tudo se torna perfeito quando estou ao seu lado, a mais nova descoberta estatística diz que se felicidade fosse um boxplot, eu seria o maior dos outliers enquanto estamos juntinhos. Escrevo esta para dizer que te amo, pra te mostrar o quanto te acho incrível, linda, inteligente e, sobretudo, que és alguém que me faz extremamente feliz. Se algum dia tiver qualquer dúvida sobre isso, volte aqui e leia estas palavras sinceras de alguém que te ama e te admira profundamente, o seu Luquinhas.\n\n
Eu te amo mais que tudo, coisa linda.\n\n
Desde 12/06, te tornaste o meu ponto de paz, trouxeste os meus melhores momentos e, naturalmente, assumiste o posto de ser minha melhor amiga, minha maior confidente e minha companhia inseparável. Já que podes ser tanta coisa, o que acha de ser...
`;

const formattedText = text.replaceAll('\n', '<br>');
const paragraph = text.split("");
let i = 0;

function dashOut(arr) {
    if (i < arr.length) {
        document.querySelector(".textCont").childNodes[0].textContent += arr[i];
        i++;
        setTimeout(function () {
            dashOut(arr);
        }, interval(arr[i]));
    } else {
        // Mostrar o botão quando o texto for finalizado
        document.querySelector(".red-button").style.display = "block";
    }
}

function interval(letter) {
    if (letter == ";" || letter == "." || letter == ",") {
        return Math.floor(Math.random() * 500 + 500);    
    } else {
        return Math.floor(Math.random() * 130 + 5);
    }
} 

function startFromBegin() {
    i = 0;
    document.querySelector(".textCont").childNodes[0].textContent = ""; // Limpa o conteúdo antes de começar
    dashOut(paragraph);
}

startFromBegin();
