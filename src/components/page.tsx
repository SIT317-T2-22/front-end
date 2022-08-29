import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useFlags } from '../settings/flags-provider';
import styled from 'styled-components';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const Root = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  & > *{
    flex: 1;
  }
`;


export const Page = (props:{children:React.ReactElement}) => {
  let { getFlags } = useFlags();
  return (
    <ThemeProvider theme={getFlags().theme === "dark" ? darkTheme :  lightTheme}>
    <Root className="App">
      {props.children}
    </Root>
    </ThemeProvider>
  )
}
