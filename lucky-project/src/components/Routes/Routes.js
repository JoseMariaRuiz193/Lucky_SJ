import React, { Profiler } from 'react';
import { Switch, Route } from 'react-router-dom';

import WelcomePage from '../../components/WelcomePage/WelcomePage';
import Register from '../Log-Register/Register';
import RecoverPass from '../Log-Register/RecoverPass';
import Home from '../Home/Home';
import OnBoarding from '../OnBoarding/OnBoarding';
import Login from '../Log-Register/LoginUser';
import Profile from '../Profile/UserProfile';
import SelectLogin from '../Log-Register/SelectLogin';
import Menu from '../Menu/Menu';

export default function Routes (){
    return(
        <Switch>
            <Route exact path = '/' component={WelcomePage}/>
            <Route exact path = '/home' component={Home}/>
            <Route exact path = '/onboarding' component={OnBoarding}/>
            <Route exact path = '/login' component={SelectLogin}/>
            <Route exact path = '/login-user' component={Login}/>
            <Route exact path = '/registro' component={Register}/>
            <Route exact path = '/registro/recuperar-contraseña' component={RecoverPass}/>
            <Route exact path = '/profile' component={Profile}/>

            <Route exact path = '/menu' component={Menu}/>
        </Switch>
    )
}
