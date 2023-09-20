const fetch = require('node-fetch');

module.exports = {
    getPosts: async (req, res) => {
        // Fetch por defecto ejecuta un GET request al enpoint que le pasemos por parámetro
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const posts = await response.json();

            res.render('postList', { posts })
        } catch (error) {
            console.error(error);
        }
    },
    getDetail: async (req, res) => {
        try {
            // Fetcheamos API detalle de post
            const postResponse = await fetch('https://jsonplaceholder.typicode.com/posts/' + req.params.id)
            const post = await postResponse.json();

            // Fetcheamos API comentarios de post
            const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${req.params.id}/comments`);
            const comments = await commentsResponse.json();

            // Fetcheamos API users
            const usersReponse = await fetch(`https://randomuser.me/api/?results=${comments.length}`);
            const users = await usersReponse.json();

            // Renderizamos el EJS enviando posteo, comentarios y usuarios
            res.render('postDetail', { post, comments, users});
        } catch (error) {
            console.error(error);
        }
    }
}