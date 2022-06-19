import React, {useContext} from 'react';
import {Route} from 'react-router-dom'
import {Routes} from 'react-router'
import { Context } from '../index';
import  {publicRouter, authRouter }from '../routes'
import {SHOP_ROUTE} from '../utils/consts'
import {observer} from "mobx-react-lite";


const AppRouter = observer(() => {
    const {user} = useContext(Context)

    console.log(user)
    return (
        <Routes>
            {user.isAuth && authRouter.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            {publicRouter.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            <Route to={SHOP_ROUTE}/>
        </Routes>
    );
});

export default AppRouter;
