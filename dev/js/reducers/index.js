//Represent reducers
//To combine all reducers
import {combineReducers} from 'redux';
import IssueReducer from './reducer-issues';
import ActiveIssueReducer from './reducer-active-issue';

const allReducers = combineReducers({
    issues: IssueReducer,
    active: ActiveIssueReducer
});
export default allReducers;