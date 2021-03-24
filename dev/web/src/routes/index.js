import React from 'react';
import Route from './Route';
import { Switch } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Main from '../pages/Main';
import HeroList from '../pages/Heros/list';
import HeroEdit from '../pages/Heros/edit';
import HeroCreate from '../pages/Heros/create';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" exact component={SignUp} />

    <Route path="/main" component={Main} isPrivate />
    <Route path="/hero/:id" component={HeroEdit} isPrivate />
    <Route path="/hero" component={HeroCreate} isPrivate />
    <Route path="/heros" component={HeroList} isPrivate />
  </Switch>
)

export default Routes;
