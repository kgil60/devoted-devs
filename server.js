const express = require('express');
// const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection.js');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);

// const sess = {
//     secret: 'supersecretsecret',
//     cookie: {},
//     resave: false,
//     saveUninitialized: true,
//     store: new SequelizeStore({ db: sequelize })
// };

// app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
})