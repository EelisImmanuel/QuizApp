//Application entry point
import '../styles/style1.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import rootReducer from './reducers/index';

import ShowQuestions from './components/show_questions';
import AddQuestions from './components/add_questions';

const store = createStore(rootReducer)
ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
        <Switch>
            <Route path='/addnew' component={AddQuestions}/>
            <Route path='/' component={ShowQuestions}/>
        </Switch>
    </BrowserRouter>
</Provider>, document.getElementById('root'))
