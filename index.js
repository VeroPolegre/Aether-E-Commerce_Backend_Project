const express = require("express");
const app = express();
const { typeError } = require("./middleware/errors");
const cors = require("cors");
const PORT = 8080;

app.use(express.json());
app.use(cors());

app.use("/users", require("./routes/users"));
app.use("/categories", require("./routes/categories"));
app.use("/games", require("./routes/games"));
app.use("/orders", require("./routes/orders"));
app.use("/reviews", require("./routes/reviews"));

app.use(typeError);

app.listen(PORT, () => console.log("Server started at port " + PORT));
module.exports = app;
