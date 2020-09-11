import React, { FunctionComponent } from 'react';
import { ExampleSlice1Props } from '../../types/slices';
import { StyledExampleSlice1 } from './styled';

const ExampleSlice1: FunctionComponent<ExampleSlice1Props> = ({ background_colour }) => (
    <StyledExampleSlice1 backgroundColour={background_colour}>
        <p>Example slice 1</p>
    </StyledExampleSlice1>
);

export default ExampleSlice1;
