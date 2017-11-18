import registerServiceWorker from './registerServiceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import PostsIndex from './components/posts_index';
import reducers from './reducers';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ReduxPromise from 'redux-promise';
import PostsNew from './components/posts_new';
import PostsComment from './components/posts_comment';

import './App.css';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/comment" component={PostsComment} />
          <Route path="/new" component={PostsNew} />
          <Route path="/" component={PostsIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
