const foto = document.getElementById('foto-pessoal')

let angle = 

function moviment(e) {

    const distanceTop = 10
    const distanceMoviment = 10
    const movimentSpeed = 0.5
    
    const m = distanceTop + Math.sin(angle) * distanceMoviment

    e.foto.style.top = `${m}px`

}