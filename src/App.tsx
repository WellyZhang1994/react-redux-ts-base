import React,{lazy, Suspense} from "react";
import { Route, Switch, withRouter, useLocation} from "react-router-dom"
import Header from './components/header'

//lazy loading 
const login = lazy(() => import('./pages/login'));
const tab1 = lazy(() => import('./pages/tab1'));
const tab2 = lazy(() => import('./pages/tab2'));
const tab3 = lazy(() => import('./pages/tab3'));
const notfound = lazy(() => import('./components/notfound'));

const App: React.FunctionComponent = () =>
{
   const location = useLocation();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="page" >
        {location.pathname === '/' ? '' : <Header />}
        <Switch>
          <Route exact path="/" component={login} />
          <Route exact path="/tab1" component={tab1} />
          <Route exact path="/tab2" component={tab2} />
          <Route exact path="/tab3" component={tab3} />
          <Route exact path="*" component={notfound} />
          
        </Switch>
      </div>
    </Suspense>
  );
};

export default withRouter(App);