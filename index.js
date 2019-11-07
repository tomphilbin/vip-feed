const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

const generateData = require("./generate-data");

setInterval(() => {
  const highValueOrder = generateData();
  io.emit("HighValueOrder", highValueOrder);
  console.log(JSON.stringify(highValueOrder));
}, 5000);

http.listen(3001, function() {
  console.log("listening on *:3001");
});
