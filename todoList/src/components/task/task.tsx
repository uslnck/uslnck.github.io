import { Component } from 'react';
import './task.css';
import { AppProps } from '../app/app';

export default class Task extends Component<AppProps> {
  render() {
    const { completed } = this.props.todo;
    let classNames = 'description';
    if (completed) classNames += ' completed';
    return (
      <div className='view'>
        <input className='toggle' type='checkbox' />
        <label>
          <span className={classNames} onClick={this.props.onClicked}>
            {this.props.description}
          </span>
          <span className='created'>{this.props.shownDate}</span>
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
