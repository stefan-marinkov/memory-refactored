// document.addEventListener('DOMContentLoaded', () => {
///card options
const cardArray = [
	{
		name: 'slika1',
		img: 'images/slika1.png',
	},
	{
		name: 'slika2',
		img: 'images/slika2.png',
	},
	{
		name: 'slika3',
		img: 'images/slika3.png',
	},
	{
		name: 'slika4',
		img: 'images/slika4.png',
	},
	{
		name: 'slika5',
		img: 'images/slika5.png',
	},
	{
		name: 'slika6',
		img: 'images/slika6.png',
	},
];

const duplicateArray = [...cardArray, ...cardArray];

duplicateArray.sort(() => 0.5 - Math.random());

const grid = document.querySelector('.grid');
const resultDisplay = document.querySelector('#result');
let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];
let imgArr;
///create game board

imgArr = duplicateArray.map(
	(element, index) => `<img src='images/blanck.png' id='${index}' />`
);

grid.innerHTML = imgArr;

//check for matches
const checkForMatch = () => {
	const optionOneId = cardsChosenId[0];
	const optionTwoId = cardsChosenId[1];
	if (cardsChosen[0] === cardsChosen[1]) {
		document.getElementById(`${optionOneId}`).src = `images/white.png`;
		document.getElementById(`${optionTwoId}`).src = 'images/white.png';
		cardsWon.push(cardsChosen);
	} else {
		document.getElementById(`${optionOneId}`).src = 'images/blanck.png';
		document.getElementById(`${optionTwoId}`).src = 'images/blanck.png';
	}
	cardsChosen = [];
	cardsChosenId = [];
	resultDisplay.textContent = cardsWon.length;
	if (cardsWon.length === duplicateArray.length / 2) {
		document.getElementById('winningModal').style.display = 'block';
	}
};

//flip your card

imgArr.forEach((e, i) => {
	const imgElement = document.getElementById(`${i}`);
	imgElement.onclick = function (event) {
		document.getElementById(`${i}`).src = `${
			duplicateArray[event.target.id].img
		}`;
		cardsChosen.push(duplicateArray[event.target.id].name);
		cardsChosenId.push(event.target.id);
		if (cardsChosen.length === 2) {
			setTimeout(checkForMatch, 350);
		}
	};
});
