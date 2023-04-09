import { Component } from 'react';
import './new-task-form.css';
import { AppProps } from '../app/app';

export default class NewTaskForm extends Component<AppProps> {
  state = {
    label: '',
  };

  onLabelChange = (e: any) => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = (e: any) => {
    e.preventDefault();
    this.props.onTaskAdded(this.state.label);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <header className='header'>
          <h1>todos</h1>
          <input
            className='new-todo'
            placeholder='What needs to be done?'
            autoFocus
            onChange={this.onLabelChange}
          />
        </header>
      </form>
    );
  }
}
