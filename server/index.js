// app.js

const express = require("express");
const cors = require("cors");
const obiektyRoutes = require("./routes/objectsRoutes");
const laptopRoutes = require("./routes/laptopRoutes");
const PCRoutes = require("./routes/PCRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", obiektyRoutes);
app.use("/api", laptopRoutes);
app.use("/api", PCRoutes);

app.listen(3000, () => console.log("App listening on port 3000"));
