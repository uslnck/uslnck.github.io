import Task from '../task';
import './task-list.css';

const TaskList = ({ todos }) => {
  const elements = todos.map((todo) => {
    return (
      <li>
        <Task {...todo} />
      </li>
    );
  });

  return <ul className='todo-list'>{elements}</ul>;
};

export default TaskList;
