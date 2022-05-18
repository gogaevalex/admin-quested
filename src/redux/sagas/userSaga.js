import {
	put, takeEvery, all, call, delay
} from 'redux-saga/effects';
import axios from 'axios';
import {
	USER_GET,
	userGetSuccess,
	userGetError,
} from '@src/redux/actions';

function* getUserControl({data}) {
	const getUserRequest = (userId) => axios({
		method: 'get',
		url: `https://jsonplaceholder.typicode.com/users/${userId}`,
	});
	try {
		const result = yield call(getUserRequest, data.userId);
		yield delay(500);
		yield put(userGetSuccess(result.data));
	} catch (error) {
		yield put(userGetError(error.response));
	}
}

export default function* userSaga() {
	yield all([
		takeEvery(USER_GET, getUserControl),
	]);
}
