import {fork, all} from 'redux-saga/effects';
import userSaga from './userSaga'
import lessonSaga from './lessonSaga'
import adminSaga from './adminSaga';

export default function* root() {
	yield all([
		fork(userSaga),
		fork(lessonSaga),
		fork(adminSaga),
	]);
}
