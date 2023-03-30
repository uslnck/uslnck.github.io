import TaskList from '../task-list';
import NewTaskForm from '../new-task-form';
import Footer from '../footer';

import './app.css';

const App = () => {
  const taskData = [
    { description: 'Completed task', created: 'created 17 seconds ago' },
    { description: 'Editing task', created: 'created 5 minutes ago' },
    { description: 'Active task', created: 'created 5 minutes ago' },
  ];

  return (
    <div>
      <NewTaskForm />
      <TaskList todos={taskData} />
      <Footer />
    </div>
  );
};

export default App;
