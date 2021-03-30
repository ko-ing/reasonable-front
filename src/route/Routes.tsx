import React from 'react';
import { Switch, Route } from 'react-router-dom'
import SignIn from '../app/page/SignIn';
import Calendar from '../app/page/Calendar';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/signIn" component={SignIn}/>
            <Route exact path="/calendar"  component={Calendar} />
        </Switch>
    );
}

export default Routes