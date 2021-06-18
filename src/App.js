import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import SignIn from './containers/SignIn';
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from './components/Sales/Welcome'
import Order from './containers/Sales/Order'
import CustAdd from './containers/Sales/CustAdd'
import Account from './components/Sales/Account';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { connect } from "react-redux";
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import SalesAdd from './components/Admin/SalesDetail';
import Issue from './components/Sales/Issue';
import Bill from './containers/Sales/Bill';
import ShipInfo from './containers/Shipment/ShipInfo';
import ProdAdd from './containers/WareHouse/ProdAdd';
import ProdMod from './containers/WareHouse/ProdMod';
import FetchPass from './components/Admin/FetchPass';

const App = (props) => {
  const history = useHistory();
  return (
    <Router>
      <IonApp>
        <div>
          <div>
            <Switch>
              <Route path="/" component={Welcome} exact={true} />
              <Route path="/signin" render={() => {
                return localStorage.getItem('user') === "SP" ? window.location.replace('http://localhost:8100/order') : localStorage.getItem('user') === "WH" ? window.location.replace('http://localhost:8100/WareHouse/Prod') : localStorage.getItem('user') === "SH" ? window.location.replace('http://localhost:8100/Shipment') : localStorage.getItem('user') === "AD" ? window.location.replace('http://localhost:8100/Admin') : <SignIn />
              }} />
              <Route path="/order" component={Order} />
              <Route path="/custadd" component={CustAdd} />
              <Route path="/Account" component={Account} />
              <Route path='/issues' component={Issue} />
              <Route path='/cart' component={Bill} />
              <Route path='/Admin' component={SalesAdd} />
              <Route path='/Fetch' component={FetchPass} />
              <Route path='/Shipment' component={ShipInfo} />
              <Route path="/WareHouse/Prod" component={ProdAdd} />
              <Route path="/WareHouse/ProdMod" component={ProdMod} />
            </Switch>
          </div>
        </div>
      </IonApp>
    </Router>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.login.loggedIn,
  };
};

export default connect(mapStateToProps)(App);

/* <Route path="/signin" render={() => {
          return localStorage.getItem('user') === null ? <SignIn /> : (localStorage.getItem('user') === "SP") ? <Bill /> : (localStorage.getItem('user') === "AD") ? <SalesAdd /> : (localStorage.getItem('user') === "WH") ? <ProdAdd /> : <ShipInfo />;
        }} component={SignIn} />*/