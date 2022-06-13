const { Comment } = require('../models');

const commentData = [
    {
        comment_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        user_id: 7,
        post_id: 9
    },
    {
        comment_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        user_id: 1,
        post_id: 9
    },
    {
        comment_text: 'Justo laoreet sit amet cursus sit amet dictum.',
        user_id: 10,
        post_id: 1
    },
    {
        comment_text: 'Quis lectus nulla at volutpat.',
        user_id: 5,
        post_id: 2
    },
    {
        comment_text: 'Et magnis dis parturient montes nascetur ridiculus mus. Sapien nec sagittis aliquam malesuada bibendum.',
        user_id: 8,
        post_id: 7
    },
    {
        comment_text: 'Duis ut diam quam nulla porttitor. Orci porta non pulvinar neque laoreet suspendisse.',
        user_id: 8,
        post_id: 10
    },
    {
        comment_text: 'Et malesuada fames ac turpis egestas sed tempus urna. Ut morbi tincidunt augue interdum velit euismod in.',
        user_id: 4,
        post_id: 1
    },
    {
        comment_text: 'Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet.',
        user_id: 9,
        post_id: 3
    },
    {
        comment_text: 'Aliquet enim tortor at auctor urna nunc. Imperdiet dui accumsan sit amet nulla facilisi.',
        user_id: 3,
        post_id: 7
    },
    {
        comment_text: 'Commodo odio aenean sed adipiscing diam donec adipiscing tristique risus. Diam quis enim lobortis scelerisque fermentum dui faucibus in.',
        user_id: 10,
        post_id: 8
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;