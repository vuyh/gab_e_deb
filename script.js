

const inicio = new Date(2025, 11, 9, 0, 0, 0);
function atualizarContador() {
    const agora = new Date();

    let anos = agora.getFullYear() - inicio.getFullYear();
    let meses = agora.getMonth() - inicio.getMonth();
    let dias = agora.getDate() - inicio.getDate();

    if (dias < 0) {
        meses--;
        const ultimoMes = new Date(
            agora.getFullYear(),
            agora.getMonth(),
            0
        );
        dias += ultimoMes.getDate();
    }

    if (meses < 0) {
        anos--;
        meses += 12;
    }

    const diferenca = agora - inicio;

    const horas = Math.floor(diferenca / 3600000) % 24;
    const minutos = Math.floor(diferenca / 60000) % 60;
    const segundos = Math.floor(diferenca / 1000) % 60;

    document.getElementById("anos").textContent = anos + " anos";
    document.getElementById("meses").textContent = meses + " meses";
    document.getElementById("dias").textContent = dias + " dias";
    document.getElementById("horas").textContent = horas + " horas";
    document.getElementById("minutos").textContent = minutos + " minutos";
    document.getElementById("segundos").textContent = segundos + " segundos";
}

atualizarContador();
setInterval(atualizarContador, 1000);