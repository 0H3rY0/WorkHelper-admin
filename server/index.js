// app.js

const express = require("express");
const cors = require("cors");
const obiektyRoutes = require("./routes/objectsRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Używamy tras dla obiektów
app.use("/api", obiektyRoutes);

app.listen(3000, () => console.log("App listening on port 3000"));
