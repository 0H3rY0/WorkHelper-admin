// app.js

const express = require("express");
const cors = require("cors");
const obiektyRoutes = require("./routes/objectsRoutes");
const laptopRoutes = require("./routes/laptopRoutes");
const PCRoutes = require("./routes/PCRoutes");
const cameraRoutes = require("./routes/cameraRoutes");
const alarmRoutes = require("./routes/alarmRoutes");
const antennaRoutes = require("./routes/antennaRoutes");
const NVRRoutes = require("./routes/NVRRoutes");
const remainingRoutes = require("./routes/remainingRoutes");
const routerRoutes = require("./routes/routerRoutes");
const softwareRoutes = require("./routes/softwareRoutes");

const groupRoutes = require("./routes/group.route");
const usersRoutes = require("./routes/userRoutes");
const clientRoutes = require("./routes/client.route");

const raportRoutes = require("./routes/raport.route");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", obiektyRoutes);
app.use("/api", laptopRoutes);
app.use("/api", PCRoutes);
app.use("/api", cameraRoutes);
app.use("/api", alarmRoutes);
app.use("/api", antennaRoutes);
app.use("/api", NVRRoutes);
app.use("/api", remainingRoutes);
app.use("/api", routerRoutes);
app.use("/api", softwareRoutes);

app.use("/api", groupRoutes);
app.use("/api", usersRoutes);
app.use("/api", clientRoutes);

app.use("/api/raport", raportRoutes);

app.listen(3000, () => console.log("App listening on port 3000"));
