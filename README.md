Chess Game 

A real-time multiplayer chess game built with Node.js, Express, Socket.io, and chess.js, featuring an interactive UI with drag-and-drop functionality.

*******************************************

Features ----

🎮 Real-time Multiplayer Chess – Play against an opponent or spectate live games.

🕹 Drag and Drop Support – Move pieces with an intuitive interface.

🔄 Turn-Based Logic – Ensures only valid moves and correct turn sequences.

📡 WebSockets with Socket.io – Updates moves instantly for all players.

📜 FEN Notation Support – Tracks board state in standard chess format.

🎨 EJS and Tailwind CSS – Clean, responsive UI with templating support.

🚀 One-Click Localhost Live – Click the link to start the game instantly on localhost.

****************************

installation

1. Clone the repository:--

git clone https://github.com/yourusername/chess-game.git
cd chess-game

2. Install dependencies:--

npm install

3. Start the server:--

node app.js

4. Open your browser and visit:--

http://localhost:3000

****************************************************************

Tech Stack ----

> Backend: Node.js, Express.js, Socket.io

> Frontend: HTML, CSS, JavaScript, EJS, Tailwind CSS

> Game Logic: chess.js

> Real-time Communication: WebSockets via Socket.io

How It Works ----

> The server assigns White and Black roles to the first two players who connect.

> If the game is full, additional users can join as spectators.

> Moves are validated using chess.js, ensuring legal play.

> The game board updates instantly for all connected users.

Folder Structure ----

/chess-game

│── /public          # Static files (CSS, images, client-side JS)
│── /views           # EJS templates for rendering UI
│── app.js           # Main server file (Express + Socket.io)
│── package.json     # Dependencies & scripts
│── README.md        # Project documentation

****************************************

Dependencies ----

> chess.js – Chess game rules and validation

> express – Web server framework

> socket.io – Real-time communication

> ejs – Templating engine

> tailwindcss – Styling

**************************************

Contributing ----

> Fork the repository

> Create a new branch: git checkout -b feature-branch

> Make your changes

> Commit and push: git commit -m "Your changes"

> Open a pull request

