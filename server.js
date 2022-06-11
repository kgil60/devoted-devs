const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection.js');;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(require('./controllers'));


sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
})