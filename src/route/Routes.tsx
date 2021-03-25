import React from 'react';
import { Switch, Route } from 'react-router-dom'
import MainPage from '../app/page/MainPage';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={MainPage}/>
        </Switch>
    );
}

export default Routes