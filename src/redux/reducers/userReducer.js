import {
	USER_GET,
	USER_GET_SUCCESS,
	USER_GET_ERROR,
} from '@src/redux/actions';

const initialState = {
    isLoadUser: false,
    dataUser: null,
    error: null,
};

export default (state = initialState, action) => {
	switch (action.type) {

	case USER_GET:
		return {
			...state,
            isLoadUser: true,
		};
	case USER_GET_SUCCESS:
		return {
			...state,
			dataUser: action.data,
            isLoadUser: false,
		};
	case USER_GET_ERROR:
		return {
			...state,
            isLoadUser: false,
            error: action.error,
		};
	default:
		return state;
	}
};
