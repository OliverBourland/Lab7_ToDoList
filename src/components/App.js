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
    
      if (!this.tasks){
      this.state.tasks = [
        {task: 'Go to Dentist', isComplete: false},
        {task: 'Do Gardening', isComplete: true},
        {task: 'Renew Library Account', isComplete: false},
    ];
  }
      this.toggleTaskStatus = this.toggleTaskStatus.bind(this);
      this.deleteTask = this.deleteTask.bind(this);
      this.addTask = this.addTask.bind(this);
  }


toggleTaskStatus(index) {
  console.log(index)
  const stateCopy = this.state.tasks; 
  stateCopy[index].isComplete = !this.state.tasks[index].isComplete;
  console.log(stateCopy[index].isComplete)
  this.setState(stateCopy[index])
}
deleteTask (index) {
    this.setState(this.state.tasks.splice(index,1));
}
addTask(taskItem) {
  const newTask = {task: taskItem, isComplete: false};
    this.setState({tasks: this.state.tasks.concat([newTask])});
    document.getElementById("newTask").value = "";
    }
  render() {
    localStorage.setItem("TASKS", JSON.stringify(this.state.tasks));
    return (
      <div className="container">    
        <TaskForm onSubmit={this.addTask}/>
        <TaskList tasks={this.state.tasks} deleteTask={this.deleteTask} toggleTaskStatus={this.toggleTaskStatus}/>
      </div>
    );
  }
}

export default App;
