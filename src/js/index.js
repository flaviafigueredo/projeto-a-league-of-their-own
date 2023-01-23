const btnDetalhes = document.querySelector("#btn-detalhes")
const containerHome = document.querySelector("#home")
const containerDetalhes = document.querySelector("#detalhes")
const botaoTrailer = document.querySelector(".botao-trailer")
const botaoFecharModal = document.querySelector(".fechar-modal")
const modal = document.querySelector(".modal")
const video = document.getElementById("video")
const linkDoVideo = video.src

btnDetalhes.addEventListener("click", () => {
    containerHome.classList.add('esconder')
    containerDetalhes.classList.add('mostrar')    
})

function alternarModal() {
    modal.classList.toggle("aberto")
}

botaoTrailer.addEventListener("click", () => {
    alternarModal()
    video.setAttribute("src", linkDoVideo)
})

botaoFecharModal.addEventListener("click", () => {
    alternarModal()
    video.setAttribute("src", "")
})