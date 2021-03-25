import React from 'react';
import Route from './Route';
import { Switch } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Main from '../pages/Main';
import HeroList from '../pages/Heroes/list';
import HeroEdit from '../pages/Heroes/edit';
import HeroCreate from '../pages/Heroes/create';
import HeroesThreats from '../pages/Threats/history';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" exact component={SignUp} />

    <Route path="/main" component={Main} isPrivate />
    <Route path="/hero/:id" component={HeroEdit} isPrivate />
    <Route path="/hero" component={HeroCreate} isPrivate />
    <Route path="/heroes" component={HeroList} isPrivate />
    <Route path="/history" component={HeroesThreats} isPrivate />
  </Switch>
)

export default Routes;
