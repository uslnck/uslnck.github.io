import { Component } from 'react';
import TasksFilter from '../tasks-filter';
import './footer.css';

import { AppProps } from '../app/app';

export default class Footer extends Component<AppProps> {
  render() {
    const { getRemainingCount, setFilter, deleteCompleted, filter } =
      this.props;
    const count = getRemainingCount();
    return (
      <footer className='footer'>
        <span className='todo-count'>{`${count} items left`}</span>
        <ul className='filters'>
          <TasksFilter setFilter={setFilter} filter={filter} />
        </ul>
        <button onClick={deleteCompleted} className='clear-completed'>
          Clear completed
        </button>
      </footer>
    );
  }
}
