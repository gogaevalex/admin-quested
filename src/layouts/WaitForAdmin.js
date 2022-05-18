import {
	useEffect,
	memo,
} from 'react';
import {
	useSelector,
	useDispatch,
} from 'react-redux';
import {adminGetCurrent} from '@src/redux/actions';

export const WaitForAdmin = memo(({
	children,
}) => {
	const dispatch = useDispatch();
	const admin = useSelector((state) => state.admin);
	useEffect(() => {
		console.log('admin11111111', admin);
		dispatch(adminGetCurrent());
	}, []);
	if (admin.loads.isLoadGetCurrentAdmin) return 'Загрузка admin';
	return children(admin.isAuth);
});

WaitForAdmin.propTypes ={
	children: pt.func.isRequired,
};
