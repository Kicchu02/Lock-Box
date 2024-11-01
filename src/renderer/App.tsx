import { Stack, Typography } from '@mui/material';
import { useEffect } from 'react';
import {
  Route,
  MemoryRouter as Router,
  Routes,
  useNavigate,
} from 'react-router-dom';
import './App.css';
import { GeneratePassword } from './pages/GeneratePassword';
import { HomeScreenLayout } from './pages/HomeScreenLayout';
import { LockScreen } from './pages/LockScreen';
import { ManagePasswords } from './pages/ManagePasswords';
import { ViewPasswords } from './pages/ViewPasswords';
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
        <Route path={RoutesEnum.Root} element={<Hello />} />
        <Route path={RoutesEnum.LockScreen} element={<LockScreen />} />
        <Route path={RoutesEnum.HomeScreen} element={<HomeScreenLayout />}>
          <Route
            path={RoutesEnum.GeneratePassword}
            element={<GeneratePassword />}
          />
          <Route path={RoutesEnum.ViewPasswords} element={<ViewPasswords />} />
          <Route
            path={RoutesEnum.ManagePasswords}
            element={<ManagePasswords />}
          />
        </Route>
      </Routes>
    </Router>
  );
}
