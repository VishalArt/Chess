const express = require("express");
const socket = require("socket.io");
const { Chess } = require("chess.js"); 
const http = require("http");
const path = require("path"); 

const app = express();
const server = http.createServer(app);
const io = socket(server);

const chess = new Chess(); 
let players = {};
let chessPlayer = "W";

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("index",{title:"Chess Game"});
});

io.on("connection",function(uniquesocket){
    console.log("connected...")
});

server.listen(3000, () => {
    console.log("Server is running on port 3000...");
});
