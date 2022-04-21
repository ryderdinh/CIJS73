import React, { Component } from 'react';

// function FormInput(props) {
//   console.log(props);
//   const [inputValue, setInputValue] = useState('');

//   return (
//     <form
//       className='form-input'
//       onSubmit={(e) => {
//         e.preventDefault();
//         props.onSubmit(inputValue);
//         setInputValue('');
//       }}
//     >
//       <input
//         type='text'
//         placeholder='Enter your task here...'
//         value={inputValue}
//         onChange={(e) => {
//           setInputValue(e.target.value);
//         }}
//       />
//     </form>
//   );
// }

class FormInput extends Component {
  state = {
    inputValue: ''
  };

  render() {
    return (
      <form
        className='form-input'
        onSubmit={(e) => {
          e.preventDefault();
          this.props.onSubmit(this.state.inputValue);
          this.setState({
            ...this.state,
            inputValue: ''
          });
        }}
      >
        <input
          type='text'
          placeholder='Enter your task here...'
          value={this.state.inputValue}
          onChange={(e) => {
            this.setState({
              ...this.state,
              inputValue: e.target.value
            });
          }}
        />
      </form>
    );
  }
}

export default FormInput;
