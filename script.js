const balloon = document.querySelector("p")

document.addEventListener('keydown', (e) => {
    e.preventDefault();
    let balloonSize = parseInt(window.getComputedStyle(balloon).fontSize);
    if(e.code === "ArrowUp"){
        balloonSize += 10
        balloon.style.fontSize = `${balloonSize}`+"px"
    }
    else if(e.code === "ArrowDown"){
        balloonSize -= 10
        balloon.style.fontSize = `${balloonSize}`+"px"
    }
    explodeCheck(balloonSize);
})
function explodeCheck(balloonSize){
    if(balloonSize>400){
        balloon.textContent = "💥";
        balloon.style.fontSize = "600px"
    }
}
