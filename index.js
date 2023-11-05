const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json());

app.use("/users", require("./routes/users"));
app.use("/categories", require("./routes/categories"));
app.use("/games", require("./routes/games"));
app.use("/orders", require("./routes/orders"));
app.use("/reviews", require("./routes/reviews"));

app.listen(PORT, () => console.log("Server started at port " + PORT));
