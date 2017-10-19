import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form'

import reducer_questions from './reducer_questions';

const rootReducer = combineReducers({questions: reducer_questions, form: formReducer});

export default rootReducer;