let container = document.getElementById("container")
let img1 = document.getElementById("img-1")
let img2 = document.getElementById("img-2")

img1.addEventListener("click", () => {
    container.innerHTML = ' <img id="img-1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiYQads3tY3F00vzt8sgQiWFPyKoOC5NmNZw&s" alt="">'
})


img2.addEventListener("click", () => {
    container.innerHTML = '<img id="img-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqTK_N9QV2PY4r9IOtkhkwKN1h_gNHxjuu5g&s" alt="">'
})

