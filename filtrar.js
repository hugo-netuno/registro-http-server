var campoFiltro = document.querySelector("#search");
campoFiltro.addEventListener("input", function() {
    var registros = document.querySelectorAll("p");

    if (this.value.length > 0) {
        for (var i = 0; i < registros.length; i++) {
            var registro = registros[i];
            var conteudo = registro.textContent;
            var expressao = new RegExp(this.value, "i");

            if (!expressao.test(conteudo)) {
                registro.classList.add("invisivel");
            } else {
                registro.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < registros.length; i++) {
            var registro = registros[i];
            registro.classList.remove("invisivel");
        }
    }
});
