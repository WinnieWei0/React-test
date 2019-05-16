import React,{Component} from 'react'
import './game.css'

// class Squar extends Component{
//   render(){
//     return (
//       <button onClick={()=>this.props.onClick()}>
//         {this.props.value}
//       </button>
//     )
//   }
// }
const Squar=(props)=>{   //函数式写法
  return (
    <button onClick={props.onClick}>  
      {props.value}
    </button>
  )
}

class Board extends Component{
  constructor(props){
    super(props)
    this.state={
      squares:Array(9).fill(null),
      isNext:true
    }
  }
  handleClick(i){
    let squares=this.state.squares.slice()  //不可变性
    squares[i]=this.state.isNext?'X':'O'
    this.setState({
      squares,
      isNext:!this.state.isNext
    })
  }
  render(){
    return (
      <div className="board">
        <div className="items">
          <Squar value={this.state.squares[0]} onClick={()=>this.handleClick(0)}/>
          <Squar value={this.state.squares[1]} onClick={()=>this.handleClick(1)}/>
          <Squar value={this.state.squares[2]} onClick={()=>this.handleClick(2)}/>
        </div>
        <div className="items">
          <Squar value={this.state.squares[3]} onClick={()=>this.handleClick(3)}/>
          <Squar value={this.state.squares[4]} onClick={()=>this.handleClick(4)}/>
          <Squar value={this.state.squares[5]} onClick={()=>this.handleClick(5)}/>
        </div>
        <div className="items">
          <Squar value={this.state.squares[6]} onClick={()=>this.handleClick(6)}/>
          <Squar value={this.state.squares[7]} onClick={()=>this.handleClick(7)}/>
          <Squar value={this.state.squares[8]} onClick={()=>this.handleClick(8)}/>
        </div>
      </div>
    )
  }
}

class Game extends Component {
  render(){
    return (
      <div>
        <Board/>
      </div>
    )
  }
}
export default Game