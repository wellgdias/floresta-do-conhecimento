import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../pages/Home';
import Group from '../pages/Group';
import Challenges from '../pages/Challenges';
import Challenge from '../pages/Challenge';
import Finish from '../pages/Finish';
import Complete from '../pages/Complete';

export default function Routes() {
  const [challenge, setChallenge] = useState(false);

  return (
    <Switch>
      <Route exact path="/" component={() => <Home challenge={challenge} />} />
      <Route path="/grupo" component={Group} />
      <Route path="/desafios" component={Challenges} />

      <Route
        path="/desafio/:id"
        component={() => <Challenge setChallenge={setChallenge} />}
      />
      <Route
        path="/finalizar"
        component={() => <Finish setChallenge={setChallenge} />}
      />

      <Route path="/parabens" component={Complete} />

      <Redirect to="/" />
    </Switch>
  );
}
