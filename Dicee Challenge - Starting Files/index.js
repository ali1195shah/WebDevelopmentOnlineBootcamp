let title = document.getElementsByTagName("h1")[0]
let playerOneDiceImg = document.querySelector(".img1")

let playerTwoDiceImg = document.querySelector(".img2")

let p1 = 0
let p2 = 0

playerOneDiceImg.addEventListener("click", function(){
    title.innerHTML = "Player 2 click"
    let num = Math.random(1) * 6 + 1
    num = Math.floor(num)
    playerOneDiceImg.src = `./images/dice${num}.png`
    console.log(playerOneDiceImg.src)
    p1 = num
    console.log(p1)
})

playerTwoDiceImg.addEventListener("click", function(){
    let num = Math.random(1) * 6 + 1
    num = Math.floor(num)
    playerTwoDiceImg.src = `./images/dice${num}.png`
    console.log(playerTwoDiceImg.src)
    p2 = num
    console.log(p2)

    if(p1 > p2){
        title.innerHTML="Player 1 wins"
    }
    else if (p1 < p2){
        title.innerHTML="player 2 wins"
    }
    else{
        title.innerHTML="It's a draw"
    }
})

// if(p1 > p2){
//     title.innerHTML="Player 1 wins"
// }
// else if (p1 < p2){
//     title.innerHTML="player 2 wins"
// }
// else{
//     title.innerHTML="It's a draw"
// }