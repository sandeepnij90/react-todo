import React from 'react';
import { TaskItem } from './TaskItem';

export class TaskList extends React.Component {
  render() {
    return (
      <div className="list">
        <h3>{this.props.title}</h3>
        <ul>
        {this.props.children}
        </ul>
      </div>
    )
  }
}
