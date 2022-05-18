export const LESSON_CREATE = 'LESSON_CREATE';
export const LESSON_CREATE_SUCCESS = 'LESSON_CREATE_SUCCESS';
export const LESSON_CREATE_ERROR = 'LESSON_CREATE_ERROR';

export const lessonCreate = (data) => ({
	type: LESSON_CREATE,
	data,
});

export const lessonCreateSuccess = (data) => ({
	type: LESSON_CREATE_SUCCESS,
	data,
});

export const lessonCreateError = (error) => ({
	type: LESSON_CREATE_ERROR,
	error,
});
