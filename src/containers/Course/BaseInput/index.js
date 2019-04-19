import React, {Component} from 'react';
import {Input,Table} from 'antd'
import {NavLink} from 'react-router-dom';
// import './index.less';
// import actions from '../../store/actions/session';
// import PropTypes from 'prop-types';

import Editor from 'gaea-editor';


export default class BaseInput extends Component {
  constructor(){
    super();
  }
  static defaultProps = {
    editSetting: {
      key: 'my-input-key', // Unique key.
      name: 'Input', // The name shown in drag menu.
      isContainer: false, // Can be dragged in.
      editors: [
        {
          field: 'value',
          text: 'Text',
          type: 'string'
        }
      ] // Tell gaea-editor, which props can be edited and how to edit it.
    }
  }
  render() {
    return (
       <Table/>
    )
  }
}

//{/*<Input {...this.props.editSetting.editors}/>*/}