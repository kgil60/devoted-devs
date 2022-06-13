const { Post } = require('../models');

const postData = [
    {
        title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        post_url: 'http://www.example.org/#bed',
        user_id: 1
    },
    {
        title: 'qui est esse',
        post_url: 'https://www.example.com/?amount=berry&afterthought=acoustics',
        user_id: 2
    },
    {
        title: 'https://www.example.com/?amount=berry&afterthought=acoustics',
        post_url: 'http://www.example.org/bed',
        user_id: 1
    },
    {
        title: 'eum et est occaecati',
        post_url: 'http://www.example.com/',
        user_id: 10
    },
    {
        title: 'nesciunt quas odio',
        post_url: 'http://example.org/book',
        user_id: 3
    },
    {
        title: 'dolorem eum magni eos aperiam quia',
        post_url: 'https://aftermath.example.com/?bottle=agreement&basket=arch',
        user_id: 2
    },
    {
        title: 'magnam facilis autem',
        post_url: 'http://example.com/brother.aspx',
        user_id: 9
    },
    {
        title: 'dolorem dolore est ipsam',
        post_url: 'https://advertisement.example.com/',
        user_id: 5
    },
    {
        title: 'nesciunt iure omnis dolorem tempora et accusantium',
        post_url: 'http://www.example.com/belief/arithmetic',
        user_id: 3
    },
    {
        title: 'optio molestias id quia eum',
        post_url: 'https://example.com/',
        user_id: 6
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;