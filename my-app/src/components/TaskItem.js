import React from 'react';
import PropTypes from 'prop-types';

export const TaskItem = ({task,removeTask,completeTask}) => {
    return (
      <li>
        { task }
        {removeTask && <span onClick={(e)=>removeTask(e)}>X</span>}
        {completeTask && <span onClick={(e)=>completeTask(e)}>
          <i className="fa fa-check" aria-hidden="true"></i>
        </span>}
      </li>
    )
}

TaskItem.defaultProps = {
  task:''
}

TaskItem.propTypes = {
  task: PropTypes.string,
  removeTask: PropTypes.func,
  completeTask: PropTypes.func
}
