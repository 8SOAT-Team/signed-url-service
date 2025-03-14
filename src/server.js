const express = require('express');
const signedUrlRoutes = require('./routes/signedUrlRoutes');

const app = express();
app.use(express.json());
app.use('/api', signedUrlRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;