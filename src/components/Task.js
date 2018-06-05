import React, { Component } from 'react';


class Task extends Component {
    constructor(props) {
        super(props);
        this.onDeleteTask = this.onDeleteTask.bind(this);
        this.onToggleTaskStatus = this.onToggleTaskStatus.bind(this); 
    }
        

    onDeleteTask(event) {
        event.preventDefault();
        const index = this.props.index;
        const deleteTask = this.props.deleteTask;
        deleteTask(index);
    }
    onToggleTaskStatus(event) {
     // event.preventDefault();
      const index = this.props.index;
      const toggleTaskStatus = this.props.toggleTaskStatus;
      toggleTaskStatus(index);
    }

    render() {
        const { task } = this.props.task;
        
         const isChecked = this.props.task.isComplete;
        const complete = (this.props.task.isComplete) ? "complete":"";
    return (
          <li className="list-group-item checkbox">
            <div className="row">
              <div className="col-md-1 col-xs-1 col-lg-1 col-sm-1 checkbox">
                <label>
                    <input id="toggleTaskStatus" type="checkbox"  value="" className="" checked={isChecked} onChange={this.onToggleTaskStatus}/>
                </label>
              </div>
              <div className={`col-md-10 col-xs-10 col-lg-10 col-sm-10 task-text ${complete}`} >
                {task}
              </div>
              <div className="col-md-1 col-xs-1 col-lg-1 col-sm-1 delete-icon-area">
                <a className=""  href="/" onClick={this.onDeleteTask}><i id="deleteTask" className="delete-icon glyphicon glyphicon-trash"></i></a>
              </div>
            </div>
          </li>
        )
    }
}

export default Task;
