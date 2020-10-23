import { takeLatest, call, all, put } from 'redux-saga/effects';
import { auth, handleUserProfile, getCurrentUser, GoogleProvider } from './../../firebase/utils';

import userTypes from './user.types';
import { signInSuccess, userError, signOutUserSuccess } from './user.actions';

export function* getSnapshotFromUserAuth(user) {
    try {
        const userRef = yield call(handleUserProfile, { userAuth: user });
        //update redux store with user info
        const snapshot = yield userRef.get();
        yield put (
            signInSuccess({
                id: snapshot.id,
                ...snapshot.data()
            })
        );
    } catch (err) {
        console.log(err);
    }
}

export function* emailSignIn({ payload: { email, password } }) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user);
    } catch (err) {
        console.log(err);
    }
}

export function* onEmailSignInStart() {
    yield takeLatest(userTypes.EMAIL_SIGN_IN_START, emailSignIn);
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser;
        if (!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth);
    } catch (err) {
        //console.log(err);
    }
}

export function* onCheckUserSession() {
    yield takeLatest(userTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* signOutUser() {
    try {
        yield auth.signOut();
        //update redux store:
        yield put (
            signOutUserSuccess()
        )
    } catch (err) {
        console.log(err);
    }
}

export function* onSignOutUserStart() {
    yield takeLatest(userTypes.SIGN_OUT_USER_START, signOutUser);
}

export function* signUpUser({ payload: {
    displayName,
    email,
    password,
    confirmationPassword
}}) {
     //validation:
    if (password !== confirmPassword) {
        const err = ['Password Don\'t match!'];
        yield put(
            userError(err)
        )
    }

    try {
        const { user } = yield auth.createUserWithEmailAndPassword(email, password);
        yield call(handleUserProfile, user, (user, { displayName }));
        dispatch({
            type: userTypes.SIGN_UP_SUCCESS,
            payload: true
        });
    } catch (err) {
        console.log(err);
    }
}

export function* onSignUpUserStart() {
    takeLatest(userTypes.SIGN_UP_USER_START, signUpUser)
}

export default function* userSagas() {
    yield all([
            call(onEmailSignInStart), 
            call(onCheckUserSession), 
            call(onSignOutUserStart),
            call(onSignUpUserStart),
        ]);
}