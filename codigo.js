const fotosMarcadas = 0;

function marcar(evt) {
    if(evt.target.dataset.marcada == undefined) {
        evt.target.style.filter = "sepia()";
        evt.target.dataset.marcada = true;
        fotosMarcadas++;
    } else {
        evt.target.style.filter = "";
        evt.target.dataset.marcada = false;
        fotosMarcadas--;
    }
    document.getElementById("marcadas").value = fotosMarcadas;
}

const fotos = document.querySelectorAll("#fotografias img")
for (const foto of fotos) {
    foto.addEventListener("clic", marcarFoto);
}