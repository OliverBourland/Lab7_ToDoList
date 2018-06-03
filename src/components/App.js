import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        tasks: JSON.parse(localStorage.getItem("TASKS")),
        input: {}
      }
      this.state.tasks = [
        {task: 'Go to Dentist', isComplete: false},
        {task: 'Do Gardening', isComplete: true},
        {task: 'Renew Library Account', isComplete: false},
    ];
      this.toggleTaskStatus = this.toggleTaskStatus.bind(this);
      this.deleteTask = this.deleteTask.bind(this);
      this.addTask = this.addTask.bind(this);
  }


toggleTaskStatus(index) {
  let complete = !this.state.tasks[index].isComplete;
    this.setState({task: complete})
}
deleteTask (e,index) {
    // console.log(event);
   // e.preventDefault();
    this.setState(this.state.tasks.splice(index,1));
    this.setState({selectedDate: index});
}
addTask(t,index) {
    let newTaskObject = {task: t, isComplete: false};
   // this.setState(this.state.toggleTaskStatustasks.push(newTaskObject));
   this.setState({tasks: newTaskObject});
    document.getElementById("newTask").value = "";
    }
  render() {
    return (
      <div className="container">    
        <TaskForm onSubmit={this.addTask}/>
        <TaskList tasks={this.state.tasks} deleteTask={this.deleteTask} toggleTaskStatus={this.toggleTaskStatus}/>
      </div>
    );
  }
}

export default App;
