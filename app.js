const playButton = document.getElementById("play")

playButton.addEventListener("click", () => {
    const sound = new Audio("testing.mp3")
    sound.play()
})