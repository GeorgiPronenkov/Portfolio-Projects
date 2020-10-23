import { takeLatest, call, all, put } from 'redux-saga/effects';
import userTypes from './user.types';
import { signInSuccess } from './user.actions';

export function* emailSignIn({ payload: { email, password } }) {
    try {
        await auth.signInWithEmailAndPassword(email, password);
        dispatch({ 
            type: userTypes.SIGN_IN_SUCCESS,
            payload: true
        }); 
    } catch (err) {
        console.log(err);
    }
}

export function* onEmailSignInStart() {
    yield takeLatest(userTypes.EMAIL_SIGN_IN_START, emailSignIn);
}

export default function* userSagas() {
    yield all([call(onEmailSignInStart)]);
}