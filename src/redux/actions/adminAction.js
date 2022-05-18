export const ADMIN_REG = `ADMIN_REG`;
export const ADMIN_REG_SUCCESS = `ADMIN_REG_SUCCESS`;
export const ADMIN_REG_ERROR = `ADMIN_REG_ERROR`;

export const adminReg = (params) => ({
	type: ADMIN_REG,
	params,
});

export const adminRegSuccess = (data) => ({
	type: ADMIN_REG_SUCCESS,
	data,
});

export const adminRegError = (error) => ({
	type: ADMIN_REG_ERROR,
	error,
});

export const ADMIN_LOGIN = `ADMIN_LOGIN`;
export const ADMIN_LOGIN_SUCCESS = `ADMIN_LOGIN_SUCCESS`;
export const ADMIN_LOGIN_ERROR = `ADMIN_LOGIN_ERROR`;

export const adminLogin = (params) => ({
	type: ADMIN_LOGIN,
	params,
});

export const adminLoginSuccess = (data) => ({
	type: ADMIN_LOGIN_SUCCESS,
	data,
});

export const adminLoginError = (error) => ({
	type: ADMIN_LOGIN_ERROR,
	error,
});

export const ADMIN_GET_CURRENT = `ADMIN_GET_CURRENT`;
export const ADMIN_GET_CURRENT_SUCCESS = `ADMIN_GET_CURRENT_SUCCESS`;
export const ADMIN_GET_CURRENT_ERROR = `ADMIN_GET_CURRENT_ERROR`;

export const adminGetCurrent = () => ({
	type: ADMIN_GET_CURRENT,
});

export const adminGetCurrentSuccess = (data) => ({
	type: ADMIN_GET_CURRENT_SUCCESS,
	data,
});

export const adminGetCurrentError = (error) => ({
	type: ADMIN_GET_CURRENT_ERROR,
	error,
});


export const UPDATE_PROFILE = `UPDATE_PROFILE`;
export const UPDATE_PROFILE_SUCCESS = `UPDATE_PROFILE_SUCCESS`;
export const UPDATE_PROFILE_ERROR = `UPDATE_PROFILE_ERROR`;

export const updateProfile = (data) => ({
	type: UPDATE_PROFILE,
	data,
});

export const updateProfileSuccess = (data) => ({
	type: UPDATE_PROFILE_SUCCESS,
	data,
});

export const updateProfileError = (error) => ({
	type: UPDATE_PROFILE_ERROR,
	error,
});

export const UPDATE_PASSWORD = `UPDATE_PASSWORD`;
export const UPDATE_PASSWORD_SUCCESS = `UPDATE_PASSWORD_SUCCESS`;
export const UPDATE_PASSWORD_ERROR = `UPDATE_PASSWORD_ERROR`;

export const updatePassword = (data) => ({
	type: UPDATE_PASSWORD,
	data,
});

export const updatePasswordSuccess = () => ({
	type: UPDATE_PASSWORD_SUCCESS,
});

export const updatePasswordError = (error) => ({
	type: UPDATE_PASSWORD_ERROR,
	error,
});


export const LOGOUT = 'LOGOUT';
export const logout = () => ({
	type: LOGOUT,
});
