import React,{Component} from 'react';
let i=0;
import './inex.less'
export default class Profile extends Component{
  constructor(){
    super();
    this.state={text:'hello,world',showText:''}
  }
  componentDidMount(){
    this.oneToOne();
  }
  oneToOne =() =>{

    let timer=setInterval(()=>{
      this.setState({showText:this.state.text.substring(0,i)},()=>{
        i++;
        if (this.state.showText.length===this.state.text.length){
          clearInterval(timer)
        }
      });
    },300)

  }
  render(){
    return (
      <div className='box'>
        <h1 className='tip' ref={input=>this.content=input}>{this.state.showText}</h1>
      </div>
    )
  }
}