function showText(elementId) {
    const texto = document.querySelector(`div.texto#${elementId}`);
    texto.classList.contains("active") ?
    texto.classList.remove("active") : 
    texto.classList.add("active");
}