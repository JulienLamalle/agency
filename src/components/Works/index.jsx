import React from 'react';
import { FormattedMessage } from "react-intl";
import { Switch, Route, useRouteMatch, useLocation} from "react-router-dom";
import CaseBar from '../CaseBar'
import StudyCase from '../StudyCase';

const Works = () => {
  let { path } = useRouteMatch();
  let location = useLocation();

  return (
    <section>
      {location.pathname === '/works' ? 
      <div>
        <h4>
          <FormattedMessage id="works.title" />
        </h4>
        <p>
          <FormattedMessage id="works.paragraph" />
        </p>
      <CaseBar />
      </div> 
      : 
      <div>
        <Switch>
          <Route path={`${path}/:studyCaseId`}>
            <StudyCase />
          </Route>
        </Switch>
      </div>
      }
    </section>
  );
};

export default Works