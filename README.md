# React Tic-Tac-Toe

A simple and interactive Tic-Tac-Toe game built with React. This project demonstrates the use of React components, state management, and event handling to create a fully functional game.

## Features

- **Two-player gameplay**: Players take turns marking squares on a 3x3 grid.
- **Dynamic player names**: Players can edit their names during the game.
- **Game log**: A log of all moves made during the game.
- **Win detection**: Automatically detects when a player wins or if the game ends in a draw.
- **Restart game**: Reset the game board and start a new match.


### Key Components

- **`App.jsx`**: The main component that manages the game state and renders the game board, players, and log.
- **`Player.jsx`**: Handles player name editing and highlights the active player.
- **`GameBoard.jsx`**: Renders the 3x3 grid and handles square selection.
- **`Log.jsx`**: Displays a log of all moves made during the game.
- **`GameOver.jsx`**: Displays the game-over screen with the winner or draw message.

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/react-tic-tac-toe.git
   cd react-tic-tac-toe
   
2. Install dependencies:
   ```bash
   npm install
   
3. Start the development server:
   ```bash
   npm run dev

4. Open the app in your browser at http://localhost:5173.


### How to Play

1. Enter player names by clicking the "Edit" button next to each player.
2. Players take turns selecting squares on the grid.
3. The game ends when one player wins or all squares are filled (draw).
4. Click "Play Again" to restart the game.

   
### Technologies Used

**`React`**: For building the user interface.
**Vite`**: For fast development and build tooling.
**CSS`**: For styling the application.
