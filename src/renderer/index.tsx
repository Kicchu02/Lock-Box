import { createRoot } from 'react-dom/client';
import App from './App';
import theme from '../../assets/theme'; // Import the custom theme
import { ThemeProvider } from '@mui/material/styles';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
  <ThemeProvider theme={theme}>
    {' '}
    {/* Wrap App with ThemeProvider */}
    <App />
  </ThemeProvider>,
);

// calling IPC exposed from preload script
window.electron.ipcRenderer.once('ipc-example', (arg) => {
  // eslint-disable-next-line no-console
  console.log(arg);
});
window.electron.ipcRenderer.sendMessage('ipc-example', ['ping']);
