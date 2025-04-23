const sequelize = require("./config/database");
(async () => {
    await sequelize.authenticate();
    await sequelize.sync();
})();

const express = require("express");
const signedUrlRoutes = require("./routes/signedUrlRoutes");
const startProcessingRoutes = require("./routes/startProcessingRoutes");

const app = express();
app.use(express.json());
app.use("/api", signedUrlRoutes);
app.use("/api", startProcessingRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;