import {
	put, takeEvery, all, call,
} from 'redux-saga/effects';
import axios from 'axios';
import {
	ADMIN_REG,
	adminRegSuccess,
	adminRegError,

	ADMIN_LOGIN,
	adminLoginSuccess,
	adminLoginError,

	ADMIN_GET_CURRENT,
	adminGetCurrentSuccess,
	adminGetCurrentError,
} from '@src/redux/actions';
import $api from '../../http';

function* registration(data) {
	console.log('registr', data);
	try {
		const result = yield call(({adminId, email, password}) => $api.post('/registration/admin', {adminId, email, password}), data.params);

        console.log('result', result);
        localStorage.setItem('token', result.data.accessToken);
		yield put(adminRegSuccess(result.data));
	} catch (error) {
		console.log('error', error);
		yield put(adminRegError(error));
	}
}

function* login(data) {
	console.log('login', data);
	try {
		const result = yield call(({email, password}) => $api.post('/login/admin', {email, password}), data.params);

        console.log('result', result);
        localStorage.setItem('token', result.data.accessToken);
		yield put(adminLoginSuccess(result.data));
	} catch (error) {
		console.log('error', error);
		yield put(adminLoginError(error));
	}
}

function* getCurrentAdmin() {
	try {
		const result = yield call(() => $api.get('/refresh/admin'));
		console.log('getCurrentAdmin', result);
		localStorage.setItem('token', result.data.accessToken);

		yield put(adminGetCurrentSuccess(result.data));
	} catch (error) {
		yield put(adminGetCurrentError(error));
	}
}


export default function* adminSaga() {
	yield all([
		takeEvery(ADMIN_REG, registration),
		takeEvery(ADMIN_LOGIN, login),
		takeEvery(ADMIN_GET_CURRENT, getCurrentAdmin),
	]);
}
