import user from './userReducer';
import lesson from './lessonReducer';
import admin from './adminReducer';

const rootReducer = {
    admin,
    user,
    lesson,
};

export default rootReducer;
