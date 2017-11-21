import React from 'react';

export class EnterTask extends React.Component {
  handleChange = (e) => {
    this.input = e.target.value;
  }

  render(){
    return (
      <div>
        <h1>Enter your tasks</h1>
        <input id="task" type="text" onChange={(e) => this.handleChange(e)}/><button onClick={() => this.props.addTask(this.input) }>Add task</button>
        <hr/>
      </div>
    )
  }
}
