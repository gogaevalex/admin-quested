import {
	put, takeEvery, all, call, delay
} from 'redux-saga/effects';
import {
	LESSON_CREATE,
	lessonCreateSuccess,
	lessonCreateError,
} from '@src/redux/actions';
import $api from '../../http';

function* createLessonControl(data) {
	console.log('createLessonControl', data)
	try {
		const result = yield call((data) => $api.post('/lesson/create', data), data.data);

        console.log('result', result);
		yield put(lessonCreateSuccess(result.data));
	} catch (error) {
		console.log('error', error);
		yield put(lessonCreateError(error));
	}
}

export default function* postsSaga() {
	yield all([
		takeEvery(LESSON_CREATE, createLessonControl),
	]);
}
