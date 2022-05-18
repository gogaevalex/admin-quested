import {
	ADMIN_REG,
	ADMIN_REG_SUCCESS,
	ADMIN_REG_ERROR,

	ADMIN_LOGIN,
	ADMIN_LOGIN_SUCCESS,
	ADMIN_LOGIN_ERROR,

	ADMIN_GET_CURRENT,
	ADMIN_GET_CURRENT_SUCCESS,
	ADMIN_GET_CURRENT_ERROR,

	UPDATE_PROFILE,
	UPDATE_PROFILE_SUCCESS,
	UPDATE_PROFILE_ERROR,

	UPDATE_PASSWORD,
	UPDATE_PASSWORD_SUCCESS,
	UPDATE_PASSWORD_ERROR,

	LOGOUT,
} from '@src/redux/actions';
import {push} from 'picus';

const initialState = {
	_id: null,
	name: null,
	surname: null,
	isAuth: false,
	ident: null,
	avatar: null,
	level: null,
	mail: null,
	phone: null,
	loads: {
		isLoadAuth: false,
		isLoadGetCurrentAdmin: true,
		isLoadUpdateProfile: false,
		isLoadUpdatePassword: false,
	},
	errors: {
		isLoadAuthError: null,
		isLoadGetCurrentAdminError: null,
		updateProfileError: null,
		updatePasswordError: null,
	},
};

export default (state = initialState, action) => {
	switch (action.type) {
	case ADMIN_REG:
		return {
			...state,
			loads: {
				...state.loads,
				isLoadAuth: true,
			},
		};
	case ADMIN_REG_SUCCESS:
		return {
			...state,
			...action.data,
			loads: {
				...state.loads,
				isLoadAuth: false,
			},
			errors: {
				...state.errors,
				isLoadAuthError: null,
			},
			isAuth: true,
		};
	case ADMIN_REG_ERROR:
		push('error', 'Incorrect admin code or email or password');
		return {
			...state,
			loads: {
				...state.loads,
				isLoadAuth: false,
			},
			errors: {
				...state.errors,
				isLoadAuthError: action.error,
			},
			isAuth: false,
		};
	case ADMIN_LOGIN:
		return {
			...state,
			loads: {
				...state.loads,
				isLoadAuth: true,
			},
		};
	case ADMIN_LOGIN_SUCCESS:
		return {
			...state,
			...action.data,
			loads: {
				...state.loads,
				isLoadAuth: false,
			},
			errors: {
				...state.errors,
				isLoadAuthError: null,
			},
			isAuth: true,
		};
	case ADMIN_LOGIN_ERROR:
		push('error', 'Incorrect email or password');
		return {
			...state,
			loads: {
				...state.loads,
				isLoadAuth: false,
			},
			errors: {
				...state.errors,
				isLoadAuthError: action.error,
			},
			isAuth: false,
		};
	case ADMIN_GET_CURRENT:
		return {
			...state,
			loads: {
				...state.loads,
				isLoadGetCurrentAdmin: true,
			},
		};
	case ADMIN_GET_CURRENT_SUCCESS:
		return {
			...state,
			...action.data,
			loads: {
				...state.loads,
				isLoadGetCurrentAdmin: false,
			},
			isAuth: true,
		};
	case ADMIN_GET_CURRENT_ERROR:
		return {
			...state,
			errors: {
				...state.errors,
				isLoadGetCurrentAdminError: action.error,
			},
			loads: {
				...state.loads,
				isLoadGetCurrentAdmin: false,
			},
			isAuth: false,
		};
	case UPDATE_PROFILE:
		return {
			...state,
			loads: {
				...state.loads,
				isLoadUpdateProfile: true,
			},
		};
	case UPDATE_PROFILE_SUCCESS:
		push('success', 'Profile changed successfully');
		return {
			...state,
			...action.ADMIN,
			loads: {
				...state.loads,
				isLoadUpdateProfile: false,
			},
			errors: {
				...state.errors,
				updateProfileError: null,
			},
		};
	case UPDATE_PROFILE_ERROR:
		return {
			...state,
			loads: {
				...state.loads,
				isLoadUpdateProfile: false,
			},
			errors: {
				...state.errors,
				updateProfileError: action.error,
			},
		};
	case UPDATE_PASSWORD:
		return {
			...state,
			loads: {
				...state.loads,
				isLoadUpdatePassword: true,
			},
		};
	case UPDATE_PASSWORD_SUCCESS:
		push('success', 'PASSWORD changed successfully');
		return {
			...state,
			...action.ADMIN,
			loads: {
				...state.loads,
				isLoadUpdatePassword: false,
			},
			errors: {
				...state.errors,
				updatePasswordError: null,
			},
		};
	case UPDATE_PASSWORD_ERROR:
		push('error', 'Invalid password');
		return {
			...state,
			loads: {
				...state.loads,
				isLoadUpdatePassword: false,
			},
			errors: {
				...state.errors,
				updatePasswordError: action.error,
			},
		};
	case LOGOUT:
		return {
			...initialState,
			loads: {
				isLoadAuth: false,
				isLoadGetCurrentAdmin: false,
				isLoadUpdateProfile: false,
			},
		};
	default:
		return state;
	}
};
