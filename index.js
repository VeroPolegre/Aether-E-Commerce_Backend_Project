const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json());

app.use("/users", require("./routes/users"));
app.use("/games", require("./routes/games"));

app.listen(PORT, () => console.log("Server started at port " + PORT));
