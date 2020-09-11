import { ReactNode } from 'react';
import styled from 'styled-components';

type StyledHeaderProps = {
    children: ReactNode;
};

export const StyledHeader = styled.header<StyledHeaderProps>`
    background-color: ${({ theme }) => theme.colours.green};
    color: ${({ theme }) => theme.colours.white};
    padding: 2rem;
    font-size: 4rem;
`;
