import {
	LESSON_CREATE,
	LESSON_CREATE_SUCCESS,
	LESSON_CREATE_ERROR,
} from '@src/redux/actions';

const initialState = {
    isLoadLesson: false,
    dataLesson: null,
    error: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
	case LESSON_CREATE:
		return {
			...state,
            isLoadLesson: true,
		};
	case LESSON_CREATE_SUCCESS:
		return {
			...state,
			dataLesson: action.data,
            isLoadLesson: false,
		};
	case LESSON_CREATE_ERROR:
		return {
			...state,
            isLoadLesson: false,
            error: action.error,
		};
	default:
		return state;
	}
};
