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
  winner(squares){
    const lines=[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]
    for(let i=0;i<lines.length-1;i++){
      const [a,b,c]=lines[i]
      if(squares[a]&&squares[a]===squares[b]&&squares[b]===squares[c]){
        return squares[a]
      }
    }
    return null
  }
  handleClick(i){
    let squares=this.state.squares.slice()  //不可变性
    if(this.winner(this.state.squares)||squares[i]){
      return
    }
    squares[i]=this.state.isNext?'X':'O'
    this.setState({
      squares,
      isNext:!this.state.isNext
    })
  }
  render(){
    const winner=this.winner(this.state.squares)
    if(winner){
      alert('winner:'+winner)
    }
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