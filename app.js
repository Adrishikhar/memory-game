const cardArray = [
	//cardID also added as an attribute for each object in the loop
	{
		name: "fries",
		img: "images/fries.png",
	},
	{
		name: "cheeseburger",
		img: "images/cheeseburger.png",
	},
	{
		name: "hotdog",
		img: "images/hotdog.png",
	},
	{
		name: "ice-cream",
		img: "images/ice-cream.png",
	},
	{
		name: "milkshake",
		img: "images/milkshake.png",
	},
	{
		name: "pizza",
		img: "images/pizza.png",
	},
	{
		name: "fries",
		img: "images/fries.png",
	},
	{
		name: "cheeseburger",
		img: "images/cheeseburger.png",
	},
	{
		name: "hotdog",
		img: "images/hotdog.png",
	},
	{
		name: "ice-cream",
		img: "images/ice-cream.png",
	},
	{
		name: "milkshake",
		img: "images/milkshake.png",
	},
	{
		name: "pizza",
		img: "images/pizza.png",
	},
]

const gridDisplay = document.querySelector("#grid")
const moves = document.getElementById("moves")
const button = document.getElementById("play")
button.addEventListener("click", startGame)
cardsSelected = []

function startGame() {
	const existingCards = document.querySelectorAll(".game-card") // Select cards with the class "game-card"
	existingCards.forEach(function (existingCard) {
		existingCard.remove()
	})

	cardsSelected = []
	createBoard()
}

function createBoard() {
	cardArray.sort(() => 0.5 - Math.random()) //sorts the cardArray elements
	cardArray.forEach(function (cardData) {
		const card = createCard(cardData)
		card.addEventListener("click", () => flipCard(cardData, card))
		gridDisplay.appendChild(card)
	})
}

function createCard(cardData) {
	const card = document.createElement("img")
	card.setAttribute("src", "images/blank.png")
	card.setAttribute("name", cardData.name)
	card.classList.add("game-card")
	return card
}

function flipCard(cardData, card) {
	cardsSelected.push(card) // appended the selected card
	card.src = cardData.img // flipped the card for the user to see

	if (cardsSelected.length % 2 == 0) {
		moves.innerHTML = cardsSelected.length / 2
		setTimeout(checkMatch, 500)
	}
}

function checkMatch() {
	let lastCard = cardsSelected[cardsSelected.length - 1]
	let secondLastCard = cardsSelected[cardsSelected.length - 2]

	if (lastCard.name === secondLastCard.name) {
		alert("You have found a match ! 🤩", 1000)
		lastCard.src = "images/peach.png"
		secondLastCard.src = "images/peach.png"
	} else {
		lastCard.src = "images/blank.png"
		secondLastCard.src = "images/blank.png"
	}
}
