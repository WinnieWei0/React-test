
// import React from 'react';
import React,{Component} from 'react';
function FormattedDate(props) {
  return <h2>现在是66 {props.date.toLocaleTimeString()}.</h2>;
}
class Tick extends Component{
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
componentWillUnmount() {
  clearInterval(this.timerID);
}
tick() {
  this.setState({
    date: new Date()
  });
}
  render(){
    return (
      <div>
        <h1>现在是{this.state.date.toLocaleTimeString()}</h1>
        <FormattedDate date={this.state.date} />
      </div>
    )
  }
}
// const Tick=()=>{
//   const handleClick=(e)=> {
//     e.preventDefault();  //只能这么阻止冒泡
//     console.log('链接被点击');
//   }
 
//   return (
//     <a href="#" onClick={handleClick}>
//       点我
//     </a>
//   );
// }
export default Tick