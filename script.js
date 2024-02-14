const buttonNo = document.querySelector("#nop")
const buttonYes = document.querySelector("#obv")

let fontSize = 2
let fontSize2 = 2
let currentIndex = 0
let mess = [
    "No me parece 😑","Piénsalo again 😢","Segura? 😭"," ño 😠"
]
buttonNo.addEventListener('click',()=> {
    fontSize=fontSize+0.7
    fontSize2=fontSize2-0.3
    buttonYes.style.fontSize= `${fontSize}rem`
    buttonNo.style.fontSize= `${fontSize2}rem`
    buttonNo.textContent= mess[currentIndex];
    currentIndex++;
    if (currentIndex > mess.length) {
        buttonNo.style.display = 'none'
        buttonYes.textContent="Obvio"
    }
})
buttonYes.addEventListener('click', () => {
    document.querySelector('#message').style.display = 'flex'
  })
