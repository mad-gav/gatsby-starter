// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const pages = await graphql(`
        {
            allPrismicContentPage {
                edges {
                    node {
                        id
                        uid
                    }
                }
            }
        }
    `);

    const pageTemplates = {
        contentPage: path.resolve('./src/templates/contentPage.tsx'),
    };

    pages.data.allPrismicContentPage.edges.forEach((edge) => {
        createPage({
            path: `/content/${edge.node.uid}`,
            component: pageTemplates.contentPage,
            context: {
                uid: edge.node.uid,
                id: edge.node.uid,
                $uid: edge.node.uid,
            },
        });
    });
};
