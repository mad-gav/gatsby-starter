import React, { Fragment, FunctionComponent } from 'react';
import ExampleSlice1 from '../ExampleSlice1';
import ExampleSlice2 from '../ExampleSlice2';
import { slice, ExampleSlice1Props, ExampleSlice2Props } from '../../types/slices';

type SliceGeneratorProps = {
    slices: slice[];
};

const SliceGenerator: FunctionComponent<SliceGeneratorProps> = ({ slices }) => (
    <Fragment>
        {slices.map((slice, index: number) => {
            switch (slice.slice_type) {
                case 'example_slice_1':
                    return <ExampleSlice1 key={index} {...(slice.primary as ExampleSlice1Props)} />;
                case 'example_slice_2':
                    return <ExampleSlice2 key={index} {...(slice.primary as ExampleSlice2Props)} />;
                default:
                    return null;
            }
        })}
    </Fragment>
);

export default SliceGenerator;
