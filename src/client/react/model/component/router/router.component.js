import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import {Landing as PublicLanding} from 'client/react/model/component/subsystems/public/landing/landing.component';

export default class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="*" component={PublicLanding}/>
      </BrowserRouter>
    );
  }
};
