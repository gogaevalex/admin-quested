import {memo} from 'react';
import {
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
import {Lessons} from '@src/pages/Lessons';
import {Signup} from '@src/pages/Signup';
import {Login} from '@src/pages/Login';
import {WaitForAdmin} from '@src/layouts/WaitForAdmin';
import {MainLayout} from '@src/layouts/MainLayout';

const RootRouter = () => (
    <MainLayout>
        <WaitForAdmin>
            {(adminIsAuth) => (
                <Switch>
                    <Route path={[
                        '/login',
                        '/signup',
                    ]} >
                        <Switch>
                            {adminIsAuth && (
                                <Redirect to="/"/>
                            )}
                            <Route path={'/login'} component={Login} exact/>
                            <Route path={'/signup'} component={Signup} exact/>
                        </Switch>
                    </Route>
                    <Route path={[
                        '/',
                    ]} >
                        <Switch>
                            {!adminIsAuth && (
                                <Redirect to="/login"/>
                            )}
                            <Route path={'/'} component={Lessons} exact/>
                        </Switch>
                    </Route>
                </Switch>
            )}
        </WaitForAdmin>
    </MainLayout>
);

RootRouter.propTypes = {
};

export default memo(RootRouter);


