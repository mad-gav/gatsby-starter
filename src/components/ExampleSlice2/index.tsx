import React, { FunctionComponent } from 'react';
import { StyledExampleSlice2 } from './styled';
import { ExampleSlice2Props } from '../../types/slices';

const ExampleSlice2: FunctionComponent<ExampleSlice2Props> = ({ border_colour }) => (
    <StyledExampleSlice2 borderColour={border_colour}>
        <p>Example slice 2</p>
    </StyledExampleSlice2>
);

export default ExampleSlice2;
