// contextApi
// 我们可以在父组件上 定义好一些被后代组件调用的方法，后代组件可以不通过属性传递的方式直接获取。
//let {Provider,Consumer} = React.creareContext();
import React ,{Component,PureComponent}from 'react';
import ReactDOM,{render} from 'react-dom';
//可以减少不必要的 render 操作的次数，从而提高性能，而且可以少写 shouldComponentUpdate 函数，节省了点代码。
export default class Todo extends PureComponent{
    state={
        todos:[]
    }
    todo =React.createRef();
    add =()=>{
        //更新策略 不要改引用空间 状态的修改永远是产生一个新的引用空间覆盖掉老的空间,新数组会把老数组盖掉
        this.setState({todos:[...this.state.todos,this.todo.current.value]});
    }
    render(){
        return (
            <div>
                <input type="text" ref={this.todo}/>
                <button onClick={this.add}>添加</button>
                {
                    this.state.todos
                }
            </div>
        )
    }
}