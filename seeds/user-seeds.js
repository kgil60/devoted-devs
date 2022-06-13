const { User } = require('../models');

const userData = [
    {
        username: "Bret",
        email: 'sincere@april.biz',
        password: 'leannegraham'
    },
    {
        username: 'antonette',
        email: 'shanna@melissa.tv',
        password: 'ervinhowell'
    },
    {
        username: 'Samantha',
        email: 'nathan@yesenia.net',
        password: 'clementinebauch'
    },
    {
        username: 'Karianne',
        email: 'julianne.oconner@kory.org',
        password: 'patricialebsack'
    },
    {
        username: 'Kamren',
        email: 'lucio_hettinger@annie.ca',
        password: 'chelseydietrich'
    },
    {
        username: 'Leopoldo_Corkery',
        email: 'karley_dach@jasper.info',
        password: 'dennisshulist'
    },
    {
        username: 'Elwyn.Skiles',
        email: 'telly.hoeger@billy.biz',
        password: 'kurtisweissnat'
    },
    {
        username: 'Maxime_Nienow',
        email: 'sherwood@rosamond.me',
        password: 'nicholasrunofsdottir'
    },
    {
        username: 'Delphine',
        email: 'chaim_mcdermott@dana.io',
        password: 'glennareichert'
    },
    {
        username: 'Moriah.Stanton',
        email: 'rey.padberg@karina.biz',
        password: 'clementinadubuque'
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;