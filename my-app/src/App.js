import React, { Component } from 'react';
import { EnterTask } from './components/EnterTask'
import { TaskList } from './components/TaskList'
import { TaskItem } from './components/TaskItem'

class App extends Component {
  constructor() {
    super();
    this.state = {
      todo: [],
      complete:[]
    }
    this.removeTask = this.removeTask.bind(this);
    this.addTask = this.addTask.bind(this);
    this.completeTask = this.completeTask.bind(this);
  }

  addTask(task) {
    const {todo}  = this.state;
    this.setState({
      todo: [...todo,task]
    })
  }

  removeTask(index) {
    const {todo}  = this.state;
    console.log(index);
    var x = todo.splice(index,1);
    console.log(x);
    console.log(todo);
    this.setState({
      todo: todo
    })
  }

  removeCompleteTask(index) {
    const {complete}  = this.state;
    console.log(index);
    var x = complete.splice(index,1);
    console.log(x);
    console.log(complete);
    this.setState({
      complete: complete
    })
  }

  completeTask(index) {
    const {complete,todo} = this.state;
    const currentTask = todo[index];
    this.removeTask(index);
    this.setState({
      complete: [...complete,currentTask]
    })
  }

  render() {
    return (
      <div className="App">
        <EnterTask addTask = {this.addTask} />
          <TaskList title={'Tasks'}>
            {this.state.todo.reduce((acc,taskvalue,index) => [...acc, <TaskItem key={index} task={taskvalue} removeTask={()=>this.removeTask(index)} completeTask={()=>this.completeTask(index)}/>], [])}
          </TaskList>

        <TaskList title={'Completed'}>
          {this.state.complete.reduce((acc, taskvalue,index) => [...acc, <TaskItem key={index} task={taskvalue} removeTask={()=>this.removeCompleteTask(index)} />], [])}
        </TaskList>
      </div>
    );
  }
}

export default App;
