// A tic tac toe game
// need to store the current game state
// have a way for players to make moves and track whose turn
// is next
// needs to check if a winner exists after each round
// needs a game loop that loops after each turn



// Need a Gameboard object that has a gameboard array inside of it.
// Since there is one gameboard it can be a module.

// Player factory function
const Player = icon => {
	return {
		icon,
	}
}

const Gameboard = (function() {
	// An array of the available spots to play
	let gameboard = [
		[null, null, null],
		[null, null, null],
		[null, null, null]
	]

	// let availableMoves = [

	// ]
	return {
		gameboard,
	}

})();

// Object that controls the game flow
const gameController = (function() {
	// game status: menu, play state, end
	// gameState = 'start';
	// current turn
	currentTurn = 'X';

})();


const displayController = (function() {
	// Logic for deciding which screens to show
})();