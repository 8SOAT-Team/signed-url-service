const sequelize = require("./config/database");
(async () => {
    await sequelize.authenticate();
    await sequelize.sync();
})();

const signedUrlRoutes = require("./routes/signedUrlRoutes");
const startProcessingRoutes = require("./routes/startProcessingRoutes");

const cors = require("cors");
const express = require("express");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", signedUrlRoutes);
app.use("/api", startProcessingRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
