import { slice } from './slices';

export type ContentPageData = {
    data: { prismicContentPage: { data: { body: slice[] } } };
};
