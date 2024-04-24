import countReducer from "./reducers";

import {legacy_createStore as createStore} from 'redux'

const store = createStore(countReducer)

export default store