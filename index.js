

let cards = []
let sum = 0


let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")

function randomCard() {
    let randomNumber = Math.floor(Math.random() * 13 + 1)
    if ( randomNumber > 10 ) {
        return 10
    } else if ( randomNumber === 1 ) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = randomCard()
    let secondCard = randomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    
    // for (let a = 0; a < cards.length; a++) {
    //     sum += cards[a];
    // }
    sumEl.textContent = "Sum: " + sum
   
    cardsEl.textContent = "Cards: " + cards.join(" ")

    if (sum <= 20) {
    message = "Do you want to draw a new card? "
        } else if (sum === 21) {
            message = "Wohoo! You've got Blackjack!"
            hasBlackJack = true
            } else {
                message = "You're out of the game!"
                isAlive = false
            }
    messageEl.textContent = message

}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let thirdCard = randomCard()
        cards.push(thirdCard)
        sum += thirdCard
        renderGame()

    }
    
}