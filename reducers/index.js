import {combineReducers} from 'redux';
import appPrefs from '../core/common/apppref-reducer';
import userPrefs from'../core/common/userpref-reducer';
import appMenus from '../core/common/appmenu-reducer';
import status from '../core/status/status-reducer';

import member from '../member/member-reducer';
import session from '../member/session/session-reducer';


const rootReducer = combineReducers({appPrefs,appMenus,session,member,status,userPrefs});

export default rootReducer;
