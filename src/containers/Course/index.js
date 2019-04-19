import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './index.less';
// import actions from '../../store/actions/session';
import {connect} from 'react-redux';
import Editor from 'gaea-editor';
import BasicComponents from 'gaea-basic-components';
import BaseInput from './BaseInput/index'
export default class Tab extends Component {
  componentDidMount(){
    //this.props.validate();
  }
  render() {
    return (
     <div className='outer_container'>
       这是course
       <div style={{ width: '100vw', height: '100vh' }}>
         <Editor componentClasses={[...BasicComponents, BaseInput]}  />
       </div>
     </div>
    )
  }
}
// export default connect(
//   state=>state.session,
//   actions
// )(Tab);