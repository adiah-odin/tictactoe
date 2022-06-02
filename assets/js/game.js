const titleScreen = document.getElementById('title');
const gameBoard = document.getElementById('gameBoard');

// Create the layout for the board
const boardSpaces = [null, null, null, null, null, null, null, null, null];

boardSpaces.forEach((space, index) => {
	const button = document.createElement('button');
	button.className = ('game-board__button');
	gameBoard.append(button);
})

// Switch to the gameboard when icon is clicked
// const playerSelectors = titleScreen.getElementsByClassName('icon');
const playerSelectors = [...titleScreen.getElementsByClassName('icon')];

playerSelectors.forEach(selector => {
	selector.onclick = startGame;
})

function startGame() {
	titleScreen.classList.add('title-screen--exit');

	titleScreen.addEventListener('animationend', () => {
		titleScreen.style.display = 'none';
		titleScreen.classList.remove('title-screen--exit');

		gameBoard.style.display = 'flex';

	}, {once: true});
}