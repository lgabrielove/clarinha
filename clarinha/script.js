// Adiciona transição suave ao sair da página
document.querySelectorAll('.link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Impede o comportamento padrão do link
        document.body.classList.add('fade-out'); // Adiciona a classe de fade-out

        // Redireciona após a transição
        setTimeout(() => {
            window.location = this.href; // Muda para a nova página
        }, 500); // Tempo igual à duração da transição
    });
});


// Função do contador de tempo
function countdownTimer() {
    var countDownDate = new Date("Oct 20, 2024 18:00:00").getTime();

    var countdown = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("countdown-timer").innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";

        if (distance < 0) {
            clearInterval(countdown);
            document.getElementById("countdown-timer").innerHTML = "O grande dia chegou!";
        }
    }, 1000);
}

// Inicializar o contador quando a página carregar
window.onload = function () {
    document.body.classList.add('fade-in')
    countdownTimer();
};

document.querySelectorAll('.link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Impede o comportamento padrão do link
        document.body.classList.add('fade-out'); // Adiciona a classe de fade-out

        // Redireciona após a transição
        setTimeout(() => {
            window.location = this.href; // Muda para a nova página
        }, 500); // Tempo igual à duração da transição
    });
});
