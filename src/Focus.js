import React, { Component }  from 'react';
// class Focus extends Component {
//   constructor() {
//     return { userInput: '' };
//   }

//   handleChange(e) {
//     // this.setState({ userInput: e.target.value });
//   }

//   clearAndFocusInput() {
//     // this.setState({ userInput: '' }, () => {
//     //   this.refs.theInput.focus();
//     // });
//   }

//   render() {
//     return (
//       <div>
//         <div>
//         {/* <div onClick={this.clearAndFocusInput.bind(this)}> */}
//           Click to Focus and Reset
//         </div>
//         <input
//           ref="theInput"
//           value={this.state.userInput}
//           // onChange={this.handleChange.bind(this)}
//         />
//       </div>
//     );
//   }
// }
const Focus=()=>{
  constructor() {
        return { userInput: '' };
      }
    
      handleChange(e) {
        // this.setState({ userInput: e.target.value });
      }
    
      clearAndFocusInput() {
        // this.setState({ userInput: '' }, () => {
        //   this.refs.theInput.focus();
        // });
      }
  return (
    <div>
      Click to Focus and Reset
    </div>
    )
  }
export default Focus