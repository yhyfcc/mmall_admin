import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import Layout from './component/layout/Layout';
import Home from './page/Home/Home';
import Login from './page/Login/Login';
import UserList from './page/UserList/UserList';
import Error from './page/Error/Error';

function App() {
  return (

              <Switch>
                  <Route path="/login" component={Login}/>
                  <Route patj="/" render={() => (
                      <Layout>
                          <div style={{background: 'white',width:'100%',height:'100%'}}>
                              <Switch>
                                  <Route path="/index" component={Home}/>
                                  <Route path="/" exact component={Home}/>
                                  <Route path="/user" component={UserList}/>
                                  <Route path="/ssss"/>
                                  <Route path="/" component={Error}/>
                              </Switch>
                          </div>
                      </Layout>
                  )}/>
              </Switch>

  );
}

export default App;
