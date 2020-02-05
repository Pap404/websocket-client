import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './reducer/rootReducer';
import wsMiddleware from './middleware/middleware';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import * as serviceWorker from './serviceWorker';

const middleware = [reduxThunk, wsMiddleware];
const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
);
// const Root = ({ store }) => (
    // <Router>
    //     <Provider store={store}>
    //         <Route path="/" component={App} />
    //     </Provider>
    // </Router>
// );

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
