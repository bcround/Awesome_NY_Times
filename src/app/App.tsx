import React from 'react';
import { ArticleSearch } from '@/pages';
import styled from 'styled-components';

const AppMain = styled.main``;

const App: React.FC = () => {
  return (
    <AppMain>
      <ArticleSearch />
    </AppMain>
  );
};

export default App;
