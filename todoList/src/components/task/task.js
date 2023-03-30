import './task.css';

const Task = ({ description, created }) => {
  return (
    <li>
      <div className='view'>
        <input className='toggle' type='checkbox' />
        <label>
          <span className='description'>{description}</span>
          <span className='created'>{created}</span>
        </label>
        <button className='icon icon-edit'></button>
        <button className='icon icon-destroy'></button>
      </div>
    </li>
  );
};

export default Task;
