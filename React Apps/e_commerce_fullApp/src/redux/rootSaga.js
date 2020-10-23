import { all, call } from 'redux-saga';
import userSagas from './User/user.sagas';

export default function* rootSaga() {
    yield all([call(userSagas)]);
}