import React from 'react';
import './app.css';
import { Header } from './components/header'
import { Page } from './components/page'
import styled from 'styled-components';

const PageWrapper = styled(Page)`
  height: 100vh;
`;

const App = () => {
  return (
    <>
      <Header />
      <PageWrapper>
        <p>Hello, world!</p>
      </PageWrapper>
    </>
  );
}

export default App;
