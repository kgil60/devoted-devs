const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');
const seedLikes = require('./like-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('------------------');
    await seedUsers();
    console.log('--------USERS SEEDED----------');

    await seedPosts();
    console.log('--------POSTS SEEDED----------');

    await seedComments();
    console.log('--------COMMENTS SEEDED----------');

    await seedLikes();
    console.log('--------LIKES SEEDED----------');

    process.exit(0);
};

seedAll();