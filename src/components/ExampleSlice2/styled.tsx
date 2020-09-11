import { ReactNode } from 'react';
import styled from 'styled-components';

type StyledExampleSlice2Props = {
    children: ReactNode;
    borderColour: string;
};

export const StyledExampleSlice2 = styled.div<StyledExampleSlice2Props>`
    border: ${({ borderColour }) => `2rem solid ${borderColour}`};
    width: 100%;
    text-align: center;
    padding: 6rem 0;
`;
