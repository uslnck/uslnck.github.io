import { Component } from 'react';

import './task.css';

export default class Task extends Component {
  state = {
    done: false,
  };

  onTaskClick = () => {
    this.setState((state) => {
      return { done: !state.done };
    });
  };

  render() {
    const { done } = this.state;
    let classNames = 'description';
    if (done) {
      classNames += ' completed';
    }
    return (
      <div className='view'>
        <input className='toggle' type='checkbox' />
        <label>
          <span className={classNames} onClick={this.onTaskClick}>
            {this.props.description}
          </span>
          <span className='created'>{this.props.created}</span>
        </label>
        <button className='icon icon-edit'></button>
        <button
          className='icon icon-destroy'
          onClick={this.props.onDeleted}
        ></button>
      </div>
    );
  }
}
