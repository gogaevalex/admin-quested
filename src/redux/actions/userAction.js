export const USER_GET = 'USER_GET';
export const USER_GET_SUCCESS = 'USER_GET_SUCCESS';
export const USER_GET_ERROR = 'USER_GET_ERROR';

export const userGet = (data) => ({
	type: USER_GET,
	data,
});

export const userGetSuccess = (data) => ({
	type: USER_GET_SUCCESS,
	data,
});

export const userGetError = (error) => ({
	type: USER_GET_ERROR,
	error,
});
