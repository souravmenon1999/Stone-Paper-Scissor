let options = ["stone", "paper", "scissor"]

let score = 0
let scoreText = document.querySelector(".result")





function change(player) {
    let ans = ""
    let computer = options[(Math.floor(Math.random() * 3))];
    
    if (computer == player) {
        ans = "TIE"
        
    } else if ((player == "stone" && computer == "scissor")) {
        ans = "YOU WIN"
        
        score += 1
    } else if (player == "scissor" && computer == "paper") {
        ans = "YOU WIN"
        
        score += 1
    } else if (player == "paper" && computer == "stone") {
        ans = "YOU WIN"
        
        score += 1
    } else {
        ans = "YOU LOST"
        
    }
    scoreText.innerHTML = score
    gameOver(player, computer, ans)
}

function gameOver(A, B, C) {


    document.querySelector(".box").innerHTML = `
            <div class="game-over">
                <div>
                    <div style="margin-bottom:20px; font-size:10px">YOU PICKED</div>
                    <button class="style style2 ${A}" style="cursor:default;"><img src="${A}.png" alt=""></button>
                </div>
                <div>
                    <div class="who-win">${C}</div>
                    <div class="who-win" style="font-size: 25px;">AGAINST PC</div>
                    <button class="try-again-2" onclick="playAgain()">PLAY AGAIN</button>
                </div>
                <div>
                    <div style="margin-bottom:20px; font-size:10px">PC PICKED</div>

                    <button class="style style2 ${B}" style="cursor:default;"><img src="${B}.png" alt=""></button>
                </div>
             </div>
`
    

}


function tryAgain() {
    
    scoreText.innerHTML = 0;
    score = 0;
}

function playAgain() {
    
    
    document.querySelector(".box").innerHTML = ` <div>
    <button class="scissor style" onclick="change('scissor')"><img src="scissor.png" alt=""></button>
    <button class="stone style" onclick="change('stone')"><img src="stone.png" alt=""></button></div>
<img src="line.png" alt="" class="line img1">
<img src="line.png" alt="" class="line img2">
<img src="line.png" alt="" class="line img3">
<div>
    <button class="paper style paper-margin" onclick="change('paper')"><img src="paper.png" alt=""></button>
</div>


<div class="try-again-1" onclick="tryAgain()">Try Again</div>
    `
}

function rules() {
    document.querySelector(".guidelines-popup").classList.toggle("guidelines-show")
}

function block() {
    document.querySelector(".guidelines-popup").classList.toggle("guidelines-show")
}

playAgain();
