// app.js

const express = require("express");
const cors = require("cors");
const obiektyRoutes = require("./routes/objectsRoutes");
const laptopRoutes = require("./routes/laptopRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Używamy tras dla obiektów
app.use("/api", obiektyRoutes);
app.use("/api", laptopRoutes);

app.listen(3000, () => console.log("App listening on port 3000"));
