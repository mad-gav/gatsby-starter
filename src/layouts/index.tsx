import React, { FunctionComponent } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import GlobalStyling from '../styles/global';
import Header from '../components/Header';

const Layout: FunctionComponent = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyling />
            <Header />
            {children}
        </ThemeProvider>
    );
};

export default Layout;
