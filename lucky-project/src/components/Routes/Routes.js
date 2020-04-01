import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import WelcomePage from '../../components/WelcomePage/WelcomePage';
import Register from '../Log-Register/Register/Register';
import RecoverPass from '../Log-Register/subcomponents/RecoverPass';
import Home from '../Home/Home';
import OnBoarding from '../OnBoarding/OnBoarding';
import Login from '../Log-Register/Login/LoginUser';
import AdoptionPage from '../AdoptionPage/AdoptionPage';
import SelectLogin from '../Log-Register/SelectLogin';
import Maps_map from '../Map/Maps_map';
import SubmittedForm from '../AdoptionForm/subcomponents/SubmittedForm';
import Advertisement from '../AdoptionForm/subcomponents/Advertisement';
import ResultsFilters from '../Filters/ResultsFilters';
import DataPage from '../AnimalProfile/DataPage';
import DataAdoption from '../AnimalProfile/subcomponents/DataAdoption';
import DataHealth from '../AnimalProfile/subcomponents/DataHealth';
import ProfilePage from '../ProfilePage/ProfilePage';
import MorePage from '../MorePage/MorePage';


export default function Routes (){
    return(

    <BrowserRouter>
    
        <Switch>
            {/* <Route exact path = '/' component={WelcomePage}/> */}

            {/** Rutas MENÚ */}

            <Route exact path = '/' component={WelcomePage}/>
            <Route exact path = '/inicio' component={Home}/>
            <Route exact path = '/mapa' component={Maps_map}/>
            <Route exact path = '/adopcion' component={AdoptionPage}/>
            <Route exact path = '/perfil' component={ProfilePage}/>
            <Route exact path = '/mas' component={MorePage}/>

            {/** Rutas necesarias para componentes */}

            <Route exact path = '/tutorial' component={OnBoarding}/>
            <Route exact path = '/login' component={SelectLogin}/>
            <Route exact path = '/login-usuario' component={Login}/>
            <Route exact path = '/registro' component={Register}/>
            <Route exact path = '/registro/recuperar-contraseña' component={RecoverPass}/>
            

            

            {/** Rutas para componentes*/}
            
            <Route exact path='/form' component={SubmittedForm}/>
            <Route exact path='/advertencia' component={Advertisement}/>
            <Route exact path='/filtros' component={ResultsFilters}/>
            <Route exact path='/perfil-animal' component={DataPage}/>
            <Route exact path='/perfil-animal-salud' component={DataHealth}/>
            <Route exact path='/perfil-animal-adopcion' component={DataAdoption}/>

        </Switch>
    
        </BrowserRouter>
    )
}
