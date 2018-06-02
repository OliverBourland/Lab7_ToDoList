import React, { Component } from 'react';
import Task from './Task';


class TaskList extends Component {
    
    render () {
        const { tasks } = this.props;
        return (
        <div className="">
            <ul className="list-group" id="taskList">
                { tasks.map((task, index) => <Task key={index} task={task} index={index} deleteTask={this.props.deleteTask}
                toggleTaskStatus={this.props.toggleTaskStatus}/>) }
            </ul>
        </div>
        )
    }
}

export default TaskList;
