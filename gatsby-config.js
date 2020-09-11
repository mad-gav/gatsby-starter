module.exports = {
    plugins: [
        { resolve: `gatsby-plugin-layout` },
        {
            resolve: `gatsby-source-prismic`,
            options: {
                repositoryName: `great-state-gatsby-starter`,
                accessToken: `MC5YMWoxb2hJQUFDZ0FUVkJm.77-977-977-9Eu-_ve-_vS0beu-_vXjvv73vv73vv70w77-9H--_ve-_vQzvv70o77-977-9Ie-_vUfvv73vv73vv71H77-9`,
                schemas: {
                    home_page: require('./src/schema/home_page.json'),
                    content_page: require('./src/schema/content_page.json'),
                },
                linkResolver: () => (doc) => {
                    switch (doc.type) {
                        case 'content_page':
                            return `content/${doc.uid}`;
                        default:
                            return '/';
                    }
                },
            },
        },
    ],
};
