
let isBatchingUpdate =true;//默认支持批量更新的
let transaction = (component)=>{
    component.state=component.pendingState;
    isBatchingUpdate=false;//不支持批量更新，setState是同步的
    component.render();
}
class Component{
    constructor(){
        this.state ={number:0}
        this.pendingState={...this.state}
    }
    setState(particalState){
        if(isBatchingUpdate){
            this.pendingState={...this.pendingState,...particalState};
        }else{
            this.pendingState={...this.pendingState,...particalState};
            transaction(this);  // 去将pending状态映射到state上。
        }

    }
    update(){
        this.setState({number:this.state.number+1});
        this.setState({number:this.state.number+1});
        // setTimeout(()=>{
        //     this.setState({number:this.state.number+1});
        //     this.setState({number:this.state.number+1});
        //
        // },0)
        transaction(this);  // 去将pending状态映射到state上。
    }
    render(){
        console.log('<h1>'+this.state.number+'</h1>')
        return '<h1>'+this.state.number+'</h1>'
    }
}
let component =new Component();
component.update();