import React ,{Component}from 'react';
import ReactDOM,{render} from 'react-dom';
import PropTypes from 'propTypes'
// 属性校验
class Person extends Component{
    static defaultProps ={
        age:0//默认属性，如果传递了，采用传递的
    }
    static propTypes = {
        name:PropTypes.string.isRequired,
        age:PropTypes.number,
    }
    render(){
        console.log(this.props);
        return <h1>123</h1>
    }
}
// Person.defaultProps={
//     age:28
// }
let data={
    name:'ljb'
}
render(<Person {...data}/>,window.root);

















