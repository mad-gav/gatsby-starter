export type slice = {
    slice_type: sliceType;
    primary: slicePrimary;
};

export type ExampleSlice1Props = {
    background_colour: string;
};

export type ExampleSlice2Props = {
    border_colour: string;
};

export type sliceType = 'example_slice_1' | 'example_slice_2';

export type slicePrimary = ExampleSlice1Props | ExampleSlice2Props;
