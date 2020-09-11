import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import SliceGenerator from '../components/SliceGenerator';
import { ContentPageData } from '../types/pages';

export const query = graphql`
    query getContentPageData($uid: String!) {
        prismicContentPage(uid: { eq: $uid }) {
            data {
                body {
                    ... on PrismicContentPageBodyExampleSlice1 {
                        slice_type
                        primary {
                            background_colour
                        }
                    }
                    ... on PrismicContentPageBodyExampleSlice2 {
                        slice_type
                        primary {
                            border_colour
                        }
                    }
                }
            }
        }
    }
`;

const ContentPage: FunctionComponent<ContentPageData> = ({ data }) => {
    return <SliceGenerator slices={data.prismicContentPage.data.body} />;
};

export default ContentPage;
