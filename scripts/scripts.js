let oldelementId;
let oldText;
function showText(elementId) {
    const texto = document.querySelector(`div.texto#${elementId}`);
    if (oldelementId != null && oldelementId != elementId) {
        oldText = document.querySelector(`div.texto#${oldelementId}`);
        oldText.classList.remove("active");
        oldelementId = null;
    }
        texto.classList.contains("active")?
        texto.classList.remove("active"):
        texto.classList.add("active");
        oldelementId = elementId;
}