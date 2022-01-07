const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const app = express();

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
const PORT = process.env.PORT || 2020;

io.on("connection", (socket) => {
  console.log("connection established");

  socket.emit("message", { name: "sir wisdom", profession: "Data Analyst" });
  socket.on("disconnect", () => console.log("Socket have disconnected"));
});

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
