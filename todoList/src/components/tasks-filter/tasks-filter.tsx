import { Component } from 'react';
import './tasks-filter.css';
import { AppProps } from '../app/app';

export default class TasksFilter extends Component<AppProps> {
  chooseSelection = (currentFilter: string) => {
    if (this.props.filter === currentFilter) return 'selected';
    else return '';
  };

  render() {
    const { setFilter } = this.props;
    return (
      <div>
        <li>
          <button
            onClick={() => setFilter('all')}
            className={this.chooseSelection('all')}
          >
            All
          </button>
        </li>
        <li>
          <button
            onClick={() => setFilter('active')}
            className={this.chooseSelection('active')}
          >
            Active
          </button>
        </li>
        <li>
          <button
            onClick={() => setFilter('completed')}
            className={this.chooseSelection('completed')}
          >
            Completed
          </button>
        </li>
      </div>
    );
  }
}
