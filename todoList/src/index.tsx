import './index.css';

import { createRoot } from 'react-dom/client';
import App from './components/app';

const container = document.getElementById('todoapp');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<App />);
