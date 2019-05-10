import React,{Component} from 'react'
class Toggle extends Component{
  constructor(props){
    super(props)
    this.state={toggle:false}
    this.handleToggle=this.handleToggle.bind(this)  //必须要绑定this，this才能在回调函数内使用
  }
  handleToggle(){
    this.setState(props=>({
      toggle:!props.toggle
  }))}
  render(){
    return (
      <button onClick={this.handleToggle}>{this.state.toggle?'true':'false'}</button>
    )
  }
}
export default Toggle