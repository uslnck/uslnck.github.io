import TaskList from '../task-list';
import NewTaskForm from '../new-task-form';
import Footer from '../footer';

import { Component } from 'react';
import './app.css';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

export type AppProps = any;

type AppState = {
  taskData: Array<{
    description: string;
    created: Date | number;
    id: number;
    completed: boolean;
    shownDate: string;
  }>;
  filter: string;
};

// export interface MyProps<T> {
//   onDeleted(id:T): object
// }

const formatDistanceOptions = {
  addSuffix: true,
  includeSeconds: true,
};

export default class App extends Component<AppProps, AppState> {
  getDate = () => {
    return formatDistanceToNow(new Date(), formatDistanceOptions);
  };

  state: AppState = {
    taskData: [
      {
        description: 'First task',
        created: new Date(),
        id: 1,
        completed: false,
        shownDate: this.getDate(),
      },
      {
        description: 'Second task',
        created: new Date(),
        id: 2,
        completed: false,
        shownDate: this.getDate(),
      },
      {
        description: 'Third task',
        created: new Date(),
        id: 3,
        completed: false,
        shownDate: this.getDate(),
      },
    ],
    filter: 'all',
  };

  setFilter = (pressedFilter: string) => {
    switch (pressedFilter) {
      case 'all':
        this.setState({ filter: 'all' });
        break;
      case 'active':
        this.setState({ filter: 'active' });
        break;
      case 'completed':
        this.setState({ filter: 'completed' });
        break;
      default:
        break;
    }
  };

  onTaskClick = (id: number) => {
    this.setState(({ taskData }) => {
      const idx = taskData.findIndex((el) => el.id === id);
      const updatedElement = Object.assign(taskData[idx], {
        completed: !taskData[idx].completed,
      });
      const newTaskData = [
        ...taskData.slice(0, idx),
        updatedElement,
        ...taskData.slice(idx + 1),
      ];
      return { taskData: newTaskData };
    });
  };

  deleteTask = (id: number) => {
    this.setState(({ taskData }) => {
      const idx = taskData.findIndex((el) => el.id === id);
      const newTaskData = [
        ...taskData.slice(0, idx),
        ...taskData.slice(idx + 1),
      ];
      return { taskData: newTaskData };
    });
  };

  deleteCompleted = () => {
    this.setState(({ taskData }) => {
      const newTaskData = [...taskData].filter(({ completed }) => !completed);
      return { taskData: newTaskData };
    });
  };

  getRemainingCount = () => {
    let counter = 0;
    this.state.taskData.forEach(({ completed }) => {
      if (!completed) {
        counter++;
      }
    });
    return counter;
  };

  maxId = 10;

  addTask = (text: string) => {
    const newItem = {
      description: text,
      created: new Date(),
      id: this.maxId++,
      completed: false,
      shownDate: this.getDate(),
    };

    this.setState(({ taskData }) => {
      const newTaskData = [...taskData, newItem];
      return { taskData: newTaskData };
    });

    this.refreshDates();
  };

  refreshDates = () => {
    this.setState(({ taskData }) => {
      const newTaskData = [...taskData];
      newTaskData.forEach((el) => {
        el.shownDate = formatDistanceToNow(el.created, formatDistanceOptions);
      });

      return { taskData: newTaskData };
    });
  };

  render() {
    return (
      <div>
        <NewTaskForm onTaskAdded={this.addTask} />
        <TaskList
          todos={this.state.taskData}
          onDeleted={this.deleteTask}
          onClicked={this.onTaskClick}
          filter={this.state.filter}
        />
        <Footer
          setFilter={this.setFilter}
          deleteCompleted={this.deleteCompleted}
          getRemainingCount={this.getRemainingCount}
          filter={this.state.filter}
        />
      </div>
    );
  }
}
