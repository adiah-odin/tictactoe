// Create the layout for the board
const boardSpaces = [null, null, null, null, null, null, null, null, null];

const gameBoard = document.getElementById('gameBoard')

boardSpaces.forEach(space => {
	const button = document.createElement('button');
	button.className = ('game-board__button');
	gameBoard.append(button);
})