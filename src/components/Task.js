import React, { Component } from 'react';


class Task extends Component {
    toggleStatus(){
        const index = this.props.index;
        const toggleTaskStatus = this.props.toggleTaskStatus;
        toggleTaskStatus(index);
    }
    deleteTask() {
        const index = this.props.index;
        const deleteT = this.props.deleteTask;
        deleteT(index);
    }

    render() {
        const { task } = this.props.task;

    return (
          <li className="list-group-item checkbox">
            <div className="row">
              <div className="col-md-1 col-xs-1 col-lg-1 col-sm-1 checkbox">
                <label>
                    <input className="" onChange={this.toggleStatus} id="toggleTaskStatus" type="checkbox" value=""  />
                </label>
              </div>
              <div className="col-md-10 col-xs-10 col-lg-10 col-sm-10 task-text">
                {task}
              </div>
              <div className="col-md-1 col-xs-1 col-lg-1 col-sm-1 delete-icon-area">
                <a className=""  href="/" onClick={this.deleteTask}><i id="deleteTask" className="delete-icon glyphicon glyphicon-trash"></i></a>
              </div>
            </div>
          </li>
        )
    }
}

export default Task;
