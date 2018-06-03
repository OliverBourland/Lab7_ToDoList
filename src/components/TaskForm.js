import React, { Component } from 'react';


class TaskForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            task: ''
        }
        this.inputUpdated = this.inputUpdated.bind(this);
        this.submitTask = this.submitTask.bind(this);
    }
    inputUpdated(e) {
        const {value} = e.target;
        this.setState( {task: value} );
        }
    submitTask (event){
        event.preventDefault();
        const task =  this.state.task.value;
        const addTask = this.props.onSubmit;
        addTask(task);
    }
    render() {
        return (
                <div className="content-area row">
                <div className="col-md-2 col-xs-2 col-lg-2 col-sm-2"></div>

                <div className="col-md-8 col-xs-8 col-lg-8 col-sm-8">
                    <h2>ToDo List</h2>
                    <form onSubmit={this.submitTask} id="submitForm" >
                    <div className="row input-area">
                        <div className="col-md-1"></div>
                        <div className="form-group col-md-9">
                            <input className="form-control" type="text" placeholder="New Task" onInput={this.inputUpdated} id="newTask"/>
                        </div>
                        <div className="form-group col-md-1">
                            <button className="btn btn-primary" id="addTask" >Add</button>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    </form>
                </div>
            </div>        
        )
    }
}

export default TaskForm;
