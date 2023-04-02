import TaskList from '../task-list';
import NewTaskForm from '../new-task-form';
import Footer from '../footer';

import { Component } from 'react';

import './app.css';

export default class App extends Component {
  state = {
    taskData: [
      {
        description: 'Completed task',
        created: 'created 17 seconds ago',
        id: 1,
      },
      { description: 'Editing task', created: 'created 5 minutes ago', id: 2 },
      { description: 'Active task', created: 'created 5 minutes ago', id: 3 },
    ],
  };

  deleteTask = (id) => {
    this.setState(({ taskData }) => {
      const idx = taskData.findIndex((el) => el.id === id);
      const newTaskData = [
        ...taskData.slice(0, idx),
        ...taskData.slice(idx + 1),
      ];

      return { taskData: newTaskData };
    });
  };

  render() {
    return (
      <div>
        <NewTaskForm />
        <TaskList todos={this.state.taskData} onDeleted={this.deleteTask} />
        <Footer />
      </div>
    );
  }
}
