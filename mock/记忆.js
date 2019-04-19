/*

zf-cli install (安装)
zf-

 */
let str = "201806";
console.log(str.slice(0, 4));
console.log(str.slice(4, 6));

jsx语法需要babel编译
@babel
preset - react
let React = {
    createElement(type, props, children) {
        console.log(type, props, children);
        return {type, props, children}
    }
}
// 1.type类型， "h1"
// 2.props：，{} 属性
// 3.children:["welcomr to",{ type:"span", props:className:'red', children:['zfpx'] }]
// 4.返回值：
let jsxElement = <h1>welcome to <span className='red'> zfpx </span></h1>
 render(jsxElement, window.root)  //jsxElement是虚拟dom，render方法是负责把虚拟dom渲染到真实dom上。

//jsxElement 是虚拟dom, window.root 是元素的容器

function render(vnode, container) { //vnode 虚拟dom
    //如果dom只是一层，就是单个简单元素
    if (typeof vnode ==='string'){
        return container.appendChild(document.createElement(type))
    }
    //如果dom是有属性的
    let {type, props, children} = vnode;
    //jsxElement = {type:'h1',props:{},children:["welcomr to",{ type:"span", props:className:'red', children:['zfpx'] }]}
    let ele = document.createElement(type);
    if (props) {
        for (let key in props) { // 循环设置属性
            ele.setAttribute(key, props[key]);
        }
    }
    //孩子有可能还是一个元素，递归渲染
    children.forEach(child => {
        render(child,ele,)
    })
    container.appendChild(ele);
}
//html片段
<React.Fragment>
    <div>hello</div>
</React.Fragment>

//函数组件 没有this指向，没有生命周期，没有状态
//
let obj ={addr:'回龙观',lession:'ss'}

function School(props) {
    console.log(props);
    console.log(this);//undefined
    return <div></div>
}
let ele =(
    <h1><School {...obj}></School></h1>
)
//类组件和函数组件有什么区别
//函数组件只会在初始化的时候渲染一次，渲染完毕后就结束了。
// class Clock extends Component{
// render (){
//
// }
// }

//子组件不能更改父组件的状态，















