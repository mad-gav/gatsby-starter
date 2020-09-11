import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import PrismicRichText from '../components/PrismicRichText';

type HomePageData = {
    data: {
        prismicHomePage: {
            data: {
                body_copy: {
                    html: string;
                };
            };
        };
    };
};

export const query = graphql`
    query getHomePageData {
        prismicHomePage {
            data {
                body_copy {
                    html
                }
            }
        }
    }
`;

const Header: FunctionComponent<HomePageData> = ({ data }) => {
    return (
        <div>
            <PrismicRichText htmlString={data.prismicHomePage.data.body_copy.html} />
        </div>
    );
};

export default Header;
