import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import * as router from 'react-router-dom';
import AppBreadCrumb from 'react-router-breadcrumbs';

import routes from '../../routes';
const loading = () => <h1>Loading...</h1>;
const DefaultAside = React.lazy(() => import('./ResitAside'));
const DefaultFooter = React.lazy(() => import('./ResitFooter'));
const DefaultHeader = React.lazy(() => import('./ResitHeader'));

const ResitLayout = props => {
  
  return (
    <React.Fragment>
        <DefaultHeader />
        <main className="main">
            {/* <AppBreadCrumb appRoutes={routes} router={router}/> */}
            <div className="kampret">
              <Suspense fallback={loading()}>
                <Switch>
                  {routes.map((route, idx) => {
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => (
                          <route.component {...props} />
                        )} />
                    ) : (null);
                  })}
                  <Redirect from="/" to="/home" />
                </Switch>
              </Suspense>
            </div>
          </main>
        <DefaultFooter />
    </React.Fragment>
    )
}

export default ResitLayout;
