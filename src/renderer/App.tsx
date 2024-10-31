import { Stack, Typography } from '@mui/material';
import { Route, MemoryRouter as Router, Routes } from 'react-router-dom';
import './App.css';

function Hello() {
  return (
    <Stack height="100vh" alignItems="center" justifyContent="center">
      <Typography variant="h1">Lock Box</Typography>
    </Stack>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
