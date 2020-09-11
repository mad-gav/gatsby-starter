import React, { FunctionComponent } from 'react';

export type RichTextProps = {
    htmlString: string;
};

const PrismicRichText: FunctionComponent<RichTextProps> = ({ htmlString }) => {
    return <span dangerouslySetInnerHTML={{ __html: htmlString }} />;
};

export default PrismicRichText;
