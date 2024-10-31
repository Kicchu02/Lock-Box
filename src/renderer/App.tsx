import { Stack, Typography } from '@mui/material';
import { useEffect } from 'react';
import {
  Route,
  MemoryRouter as Router,
  Routes,
  useNavigate,
} from 'react-router-dom';
import './App.css';
import { LockScreen } from './pages/LockScreen';
import { Routes as RoutesEnum } from './types/Routes';

function Hello() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(RoutesEnum.LockScreen);
  });

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
        <Route path="/lock-screen" element={<LockScreen />} />
      </Routes>
    </Router>
  );
}
