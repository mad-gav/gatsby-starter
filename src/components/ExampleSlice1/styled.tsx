import { ReactNode } from 'react';
import styled from 'styled-components';

type StyledExampleSlice1Props = {
    children: ReactNode;
    backgroundColour: string;
};

export const StyledExampleSlice1 = styled.div<StyledExampleSlice1Props>`
    background-color: ${({ backgroundColour }) => backgroundColour};
    width: 100%;
    text-align: center;
    padding: 6rem 0;
`;
