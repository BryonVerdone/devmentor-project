import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './layout';
import Homepage from './pages/homepage';
import AboutUS from './pages/about-us';
export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/'>
            <Homepage />
          </Route>
          <Route exact path='/about-us'>
            <AboutUS />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
