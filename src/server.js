const sequelize = require("./config/database");
(async () => {
    await sequelize.authenticate();
    try {
        await sequelize.sync({ alter: true });
    } catch (error) {
        await sequelize.sync({ force: true });
    }
})();

const express = require("express");
const app = express();
app.use(require("helmet")());
app.use(require("cors")());
app.use(express.json());
app.use("/api", require("./routes/signedUrlRoutes"));
app.use("/api", require("./routes/startProcessingRoutes"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
