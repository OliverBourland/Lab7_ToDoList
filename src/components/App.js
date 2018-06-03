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
    // this.setState(tasks[index].isComplete = !tasks[index].isComplete)
    // this.loadTasks();
}
deleteTask (event,index) {
    // console.log(event);
    event.preventDefault();
    this.state.tasks.splice(index,1);
    this.loadTasks();
}
addTask(task,index) {
    // let newTaskObject = {task: n, isComplete: false};
    // this.tasks.push(newTaskObject);
    // this.loadTasks();
    // document.getElementById("newTask").value = "";
    
    }
  render() {
    return (
      <div className="container">    
        <TaskForm onSubmit={this.addTask}/>
        <TaskList tasks={this.state.tasks}/>
      </div>
    );
  }
}

export default App;
