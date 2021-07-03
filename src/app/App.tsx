import React from 'react';
import { ArticleSearch, Favorites, PageNotFound } from '@/pages';
import { Header } from '@/components';
import styled from 'styled-components';
import { Redirect, Route, Switch } from 'react-router-dom';

const AppMain = styled.main``;

const App: React.FC = () => {
  return (
    <>
      <Header />
      <AppMain>
        <Switch>
          <Route path="/" exact component={ArticleSearch} />
          <Route path="/favorites" exact component={Favorites} />
          <Route path="/page-not-found" component={PageNotFound} />
          <Redirect to="/page-not-found" />
        </Switch>
      </AppMain>
    </>
  );
};

export default App;
