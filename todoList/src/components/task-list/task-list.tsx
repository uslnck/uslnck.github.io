import Task from '../task';
import { Component } from 'react';
import './task-list.css';
import { AppProps } from '../app/app';

export default class TaskList extends Component<AppProps> {
  render() {
    const { todos, onDeleted, onClicked, filter } = this.props;
    const elements = todos
      .filter((todo: any) => {
        const { completed } = todo;
        if (filter === 'all') return true;
        else if (filter === 'completed') return completed;
        else if (filter === 'active') return !completed;
        else throw new Error();
      })
      .map((todo: any) => {
        const { id, ...todoProps } = todo;
        return (
          <li key={id}>
            <Task
              {...todoProps}
              onDeleted={() => onDeleted(id)}
              onClicked={() => onClicked(id)}
              todo={todo}
            />
          </li>
        );
      });
    return <ul className='todo-list'>{elements}</ul>;
  }
}
