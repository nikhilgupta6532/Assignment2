import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PostsIndex from './components/posts_index';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={PostsIndex} />
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
