import React, {Component} from 'react';import Tab from "./components/Tab/index";import {HashRouter as Router, Route, Switch, Redirect, withRouter, Link} from "react-router-dom"import createHashHistory from "history/createHashHistory"import Home from "./containers/Home/index";import Login from "./containers/Login/index";import Profile from "./containers/Profile/index";import MyDate from '../helper/time'let history = createHashHistory();import {CSSTransition, TransitionGroup} from 'react-transition-group'//ConnectedRouter这个组件实现redux仓库和本组件连接import {ConnectedRouter} from 'react-router-redux';import async from './async';let Course = async(() => import("./containers/Course/index"));// let Profile = async(()=>import("./containers/Profile/index"));//The prop `history` is marked as required in `Router`//如果是HashRouter hash//BrowserRouter html5 pushState//Router本身需要外界传入historyimport './commin.less'import {Layout, Menu, Icon, Breadcrumb, Modal, Button} from 'antd';const {Header, Sider, Content} = Layout;const SubMenu = Menu.SubMenu;export default class App extends Component {  render() {    return (      <ConnectedRouter history={history}>        <div>          <Switch>            <Route path='/profile' component={Enhance(Profile)}/>            <Route path='/course' component={Enhance(Course)}/>            <Route path="/login" component={Login}/>            <Route path="/" component={Enhance(Home)}/>          </Switch>        </div>      </ConnectedRouter>    )  }}const Enhance = (BaseComponent) => {  class Base extends Component {    constructor() {      super();      this.state = {successCode: null, collapsed: false,}    }    componentDidMount() {    }    toggleCollapsed = () => {      this.setState({        collapsed: !this.state.collapsed,      });    }    render() {      console.log(this.props.location.pathname);      return (        <Layout id='outer_all'>            <div style={{ width: 256 }} className='left_container'>              {/*<Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>*/}                {/*<Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />*/}              {/*</Button>*/}              <Menu                defaultSelectedKeys={[this.props.location.pathname]}                mode="inline"                theme="light"                inlineCollapsed={this.state.collapsed}              >                <Menu.Item key="/">                  <Icon type="star-o" />                  <span><Link to='/'>首页</Link></span>                </Menu.Item>                <Menu.Item key="/course">                  <Icon type="bulb" />                   <span><Link to='/course'>列表页 </Link></span>                </Menu.Item>                <Menu.Item key="/profile">                  <Icon type="switcher" />                  <span><Link to='/profile'>个人中心 </Link></span>                </Menu.Item>                <Menu.Item key="1">                  <Icon type="pie-chart" />                  <span>Option 1</span>                </Menu.Item>                <Menu.Item key="2">                  <Icon type="desktop" />                  <span>Option 2</span>                </Menu.Item>                <Menu.Item key="3">                  <Icon type="inbox" />                  <span>Option 3</span>                </Menu.Item>                <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>                  <Menu.Item key="5">Option 5</Menu.Item>                  <Menu.Item key="6">Option 6</Menu.Item>                  <Menu.Item key="7">Option 7</Menu.Item>                  <Menu.Item key="8">Option 8</Menu.Item>                </SubMenu>                <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>                  <Menu.Item key="9">Option 9</Menu.Item>                  <Menu.Item key="10">Option 10</Menu.Item>                  <SubMenu key="sub3" title="Submenu">                    <Menu.Item key="11">Option 11</Menu.Item>                    <Menu.Item key="12">Option 12</Menu.Item>                  </SubMenu>                </SubMenu>              </Menu>            </div>          <Content className='right_container'>            <BaseComponent {...this.props} />          </Content>        </Layout>      )    }  }  return withRouter(Base);}