import Task from '../task';
import './task-list.css';

const TaskList = ({ todos, onDeleted }) => {
  const elements = todos.map((todo) => {
    const { id, ...todoProps } = todo;
    return (
      <li key={id}>
        <Task {...todoProps} onDeleted={() => onDeleted(id)} />
      </li>
    );
  });

  return <ul className='todo-list'>{elements}</ul>;
};

export default TaskList;
