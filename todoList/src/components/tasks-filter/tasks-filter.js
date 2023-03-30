import './tasks-filter.css';

const TasksFilter = () => {
  return (
    <div>
      <li>
        <button className='selected'>All</button>
      </li>
      <li>
        <button>Active</button>
      </li>
      <li>
        <button>Completed</button>
      </li>
    </div>
  );
};

export default TasksFilter;
