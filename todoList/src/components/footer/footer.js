import TasksFilter from '../tasks-filter';
import './footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <span className='todo-count'>1 items left</span>
      <ul className='filters'>
        <TasksFilter />
      </ul>
      <button className='clear-completed'>Clear completed</button>
    </footer>
  );
};

export default Footer;
