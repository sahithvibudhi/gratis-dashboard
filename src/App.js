import React, { Component } from 'react';
import "antd/dist/antd.css";
import './App.css';
import SignIn from './SignIn';
import Dashboard from './Dashboard';
import Notfound from './Notfound';
import Navbar from './Navbar';
import SignOut from './SignOut';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Layout, Avatar, Icon } from 'antd';

const {
  Header, Content, Footer, Sider,
} = Layout;

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <Layout>
            <Sider style={{
              overflow: 'auto', height: '100vh', position: 'fixed', left: 0,
            }}>
            <div className="logo" />
            <Navbar />
          </Sider>
          <Layout style={{ marginLeft: 200 }}>
            <Header style={{ background: '#fff', padding: 0 }} >
              <Avatar style={{ backgroundColor: '#0984e3', verticalAlign: 'middle' }} size="large">
                Sahith
              </Avatar>
            </Header>
            <Content style={{ padding: '24px 16px 10px', overflow: 'initial', background: '#fff'}}>
                <div>
                  <Switch>
                    <Route exact path="/" component={SignIn} />
                    <Route exact path="/storeToken/:accessToken" component={SignIn} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/signout" component={SignOut} />
                    <Route component={Notfound} />
                  </Switch>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center', position: 'fixed', bottom: 0, right: 0, left: 0 }}>
              built with <Icon type="heart" theme="filled" style={{ color: 'hotpink', padding: '8px' }}/> by Gratis Team.
            </Footer>
          </Layout>
        </Layout>
      </Router>
      </div>
    );
  }
}

export default App;
